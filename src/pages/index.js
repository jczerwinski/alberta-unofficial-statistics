import './index.css'

import React, {Component} from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class IndexPage extends Component {
  render () {
    return (<Layout>
      <SEO title="Home" />
      <p>This site is designed to imagine what the <a href="https://www.alberta.ca/office-statistics-information.aspx">Government of Alberta's Office of Statistics and Information's</a> <a href="https://open.alberta.ca/dataset?topic=Economy+and+Finance&tags=Alberta+Official+Statistics">Alberta Official Statistics</a> data visualizations <strong><em>could be</em></strong>.</p>
      <p>It is developed primarily using Gatsby, React, and D3.js, and is deployed on Github Pages.</p>
      <p>You can find the <a href="https://github.com/jczerwinski/alberta-unofficial-statistics">source code</a> on GitHub.</p>
      <h2><Link to="/cpi">Consumer Price Index</Link></h2>
      <p>Interactive visualization of Alberta and Canada's year-over-year percent change in the Consumer Price Index. Use a slider to dynamically change the period.</p>
      <h2><Link to="/population-pyramid">Population Pyramid</Link></h2>
      <p>Interactive Alberta population pyramid. Use a slider to dynamically change the year.</p>
    </Layout>);
  }
}

export default IndexPage
