import './cpi.css'

import React, {Component} from 'react'
import { graphql } from 'gatsby'

import * as d3 from 'd3'
import { DateTime } from 'luxon' 

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'

import Tooltip from 'rc-tooltip'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Handle = Slider.Handle;

class CPIPage extends Component {
  constructor(props) {
    super(props)
    this.state = {};

    let data = this.props.data.allCpiCsv.edges;

    // Clean up the data
    data = data.map(d => {
      let nd = {};
      d = d.node;
      nd.period = DateTime.fromFormat(d.REF_DATE, 'MMMyyyy')
        .toFormat('yyyy-MMM');
      nd.category = d.Products_and_product_groups;
      nd.value = d.Percent_Change;
      nd.region = d.GEO;
      return nd;
    });

    // Group by period
    data = data.reduce((periods, d) => {
      periods[d.period] = Object.assign({}, periods[d.period]);
      let period = periods[d.period];
      period.Legend = {
        'Canada': 'Canada',
        'Alberta': 'Alberta'
      };
      period[d.category] = Object.assign({
        [d.region]: Number.parseFloat(d.value)
      }, period[d.category]);
      return periods;
    }, {});

    this.data = data;
    this.numPeriods = Object.keys(data).length;
    this.state.period = this.getPeriod(this.numPeriods - 1);

    // Get the largest absolute value from the domain
    this.max = this.props.data.allCpiCsv.edges.reduce((max, d) => {
      return Math.max(max, Math.abs(d.node.Percent_Change))
    }, -Infinity);
  }

  getPeriod(num) {
    return Object.entries(this.data)[num];
  }

  componentDidMount () {
    // Set up our canvas
    this.svg = d3.select('#cpi')
      .append('svg');

    // Listen for window resize
    window.addEventListener("resize", this.componentDidUpdate.bind(this));

    // Update once
    // let ctx = this;
    // setTimeout(() => {
    //   ctx.componentDidUpdate();
    // }, 500);
    this.componentDidUpdate();
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.componentDidUpdate.bind(this));
  }

  componentDidUpdate () {
    // Set up some variables
    let elementHeight = 17;
    let categoryHeight = elementHeight * 3.5;
    let canvassWidth = document.getElementById('cpi').offsetWidth;
    let canvassHeight = (Object.keys(Object.entries(this.state.period[1])).length) * categoryHeight;
    let textPadding = 3;

    // Set up our horizontal scale
    let x = d3.scaleLinear([-this.max - 2, this.max + 2], [0, canvassWidth]);

    // Resize if necessary
    this.svg
      .attr("width", canvassWidth)
      .attr("height", canvassHeight);

    // Add a group for each category
    let categories = this.svg
      .selectAll('g.category')
      .data(Object.entries(this.state.period[1]));

    let newCategories = categories
      .enter()
      .append('g');

    newCategories
      .append('text')
        .attr('class', 'categoryLabel')
        .text(d => d[0])
        .attr('dy', -textPadding)
        .attr('text-anchor', 'middle');

    categories = categories
      .merge(newCategories)
        .attr('class', d => `category`)
        .attr('transform', (d, n) => `translate(${x(0)},${n * categoryHeight + 20})`);

    // Add a group for each region
    let regions = categories
      .selectAll('g.region')
      .data(d => Object.entries(d[1]));

    let newregions = regions
      .enter()
      .append('g')
        .attr('class', d => `${d[0]} region`)
        .attr('transform', (d, n) => `translate(0, ${n*elementHeight})`);

    newregions
      .append('rect')
        .attr('y', 0)
        .attr('height', elementHeight);

    newregions
      .append('text')
        .attr('class', 'regionValueLabel')
        .attr('alignment-baseline', 'middle')
        .attr('dy', elementHeight / 2);
    
    let mergedregions = regions
      .merge(newregions);
      
    mergedregions
      .select('rect')
        .attr('x', d => {
          if (isLegend(d)) {
            return -elementHeight/2;
          } else {
            return Math.min(0, x(d[1]) - x(0))
          }
        })
        .attr('width', d => {
          if (isLegend(d)){
            return elementHeight;
          } else {
            return Math.abs(x(0) - x(d[1]))}
        });

    mergedregions
      .select('text')
        .attr('text-anchor', d => d[1] < 0 ? 'end' : 'start')
        .attr('dx', d => {
          if (isLegend(d)) {
            return elementHeight/2 + textPadding;
          } else {
            return x(d[1]) - x(0) + Math.sign(d[1] - 0) * textPadding;
          }
        })
        .text(d => `${d[1]}`);

    regions.exit().remove();
    categories.exit().remove();


    function isLegend (d) {
      return typeof d[1] === 'string';
    }

  }

  render () {
    const handle = (props) => {
      const { value, dragging, index, ...restProps } = props;
      return (
        <Tooltip
          prefixCls="rc-slider-tooltip"
          overlay={this.getPeriod(value)[0]}
          visible={true}
          placement="top"
          key={index}
        >
          <Handle value={value} {...restProps} />
        </Tooltip>
      );
    };

    return (<Layout>
      <SEO title="CPI" />
      <ul>
      <li>
        Adapted from the <a href="https://open.alberta.ca/dataset/443b43de-b8c0-4108-9aab-bde7df7532ed">Alberta Official Statistics Consumer Price Index.</a>
      </li>
      <li>
        Automatically updates with a single command.
      </li>
      <li>
        Fully mobile accessible.
      </li>
      <li>
      Groups category labels and bars together to reduce the eye movement required to connect them.
      </li>
      <li>
      This visualization does not consider the weight of each CPI component. As such, a similar per cent change in two CPI components could have very different impacts on overall CPI. It may be worth exploring designs that visualize this more effectively.
      </li>
      <li>
      Use the slider to change the period.
      </li>
      </ul>
      <h2>Consumer Price Index, Year-Over-Year Percentage Change</h2>
      <h3>{DateTime.fromFormat(this.state.period[0], 'yyyy-MMM').toFormat('MMMM yyyy')}</h3>
      <Slider
        min={0}
        max={this.numPeriods - 1}
        trackStyle={{backgroundColor: 'lightgrey'}}
        railStyle={{backgroundColor: 'lightgrey'}}
        defaultValue={this.numPeriods - 1}
        handle={handle}
        onChange={this.changePeriod}
      />
      <div id="cpi"></div>
    </Layout>);
  }

  changePeriod = (period) => {
    this.setState({period: this.getPeriod(period)});
  }
}

export default CPIPage

export const CPIQuery = graphql`
  query {
    allCpiCsv {
      edges {
        node {
          REF_DATE,
          GEO,
          Products_and_product_groups,
          VALUE,
          Percent_Change
        }
      }
    }
  }
`
