import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import pyramid from '../libs/d3populationpyramid'
import data from '../libs/alberta'

class PopulationPyramidPage extends Component {
  componentDidMount () {
    new pyramid(data, 'PopulationPyramid', 'K')
  }
  render () {
    return (<Layout>
      <Helmet>
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
        <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
        <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
      </Helmet>
      <SEO title="Population Pyramid" />
      <ul>
      <li>
        Adapted from the <a href="https://open.alberta.ca/opendata/annual-population-estimates-july-1-alberta">Alberta Official Statistics Annual Population Estimates.</a>
      </li>
      <li>
      Use the slider to change the year.
      </li>
      </ul>
      <h2>Alberta Population Pyramid</h2>
      <div id="PopulationPyramid"></div>
    </Layout>);
  }
}

export default PopulationPyramidPage
