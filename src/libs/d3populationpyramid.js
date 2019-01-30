/*global $ */
import * as d3 from 'd3'
//import 'jquery-ui/themes/base/slider.css'
// import 'jquery-ui/themes/base/theme.css'
// let $ = require('jquery');
// let slider = require('imports-loader?$=jquery,jQuery=jquery,mouse=jquery-ui/ui/widgets/mouse,widget=jquery-ui/ui/widget,ui=jquery-ui!jquery-ui/ui/widgets/slider');
//import 'imports-loader?$=jquery,jQuery=jquery!jquery-ui/ui/widgets/slider'
export default function PeoplePyramid (data, elementID, unit) {
	this.data = data;
	this.data.sort(function (a, b) {
		return a.age - b.age;
	});
	this.maxAge = this.data.reduce(function (age, obj) {
		return age < obj.age ? obj.age : age;
	}, 0);

	var maxPop = this.data.reduce(function (pop, obj) {
		return pop < +obj.people ? +obj.people : pop;
	}, 0);
	var minYear = this.data.reduce(function (year, obj) {
		return year < obj.year ? year : obj.year;
	}, Infinity);
	var maxYear = this.data.reduce(function (year, obj) {
		return year < obj.year ? obj.year : year;
	}, -Infinity);
	this.nest = d3.nest();
	// Nest by age
	this.nest.key(function (d) {
		return d.age;
	})
	.key(function (d) {
		return d.sex;
	})
	.rollup(function (d) {
		return d.reduce(function (map, d) {
			map[d.year] = d;
			return map;
		}, {});
	})
	this.data = this.nest.entries(this.data);

	this.width = 800;
	var height = 494;
	var margin = 15;

	var center = this.width/2;

	var age = d3.scaleBand()
		.domain(['popscale'].concat(this.data.map(function (d) {
			return d.key
		})))
		.rangeRound([height, 0]);

	var people = d3.scaleLinear()
		.domain([0, maxPop])
		.rangeRound([0, center - age.bandwidth()/2 - margin])
		.nice(5);

	var $container = $('#' + elementID);
	var $chart = $container.append('<svg></svg>');

	this.chart = d3.select('svg')
		.attr('width', this.width)
		.attr('height', height);



	this.ageGroups = this.chart.selectAll('g')
		.data(this.data)
		.enter().append('g')
		.attr('transform', function (d) {
			return 'translate(0, ' + age(d.key) + ')';
		});

	function resetBarLocation (d) {
		if (d.key == 1) {
			// men
			return 'translate(' + (center + age.bandwidth()/2) + ', 0)';
		} else {
			return 'translate(' + (center - people(d.value[minYear].people) - age.bandwidth()/2) + ', 0)';
		}
	};

	var barGroups = this.ageGroups.selectAll('g')
		.data(function (d) {
			return d.values;
		})
		.enter().append('g')
		.attr('transform', resetBarLocation);

	var bars = barGroups
		.append('rect')
		.attr('width', function (d) {
			return people(d.value[minYear].people);
		})
		.attr('height', function (d) {
			return age.bandwidth();
		})
		.attr('style', function (d) {
			var fill = d.key == 1 ? 'rgb(0,170,210)' : 'rgb(212,0,114)';
			return 'fill: ' + fill + '; stroke: white; stroke-width: 2px'
		});

	var ageLabels = this.ageGroups
		.append('text')
		.text(function (d) {
			return d.key;
		})
		.attr('dx', center)
		.attr('dy', Math.ceil(age.bandwidth()/2))
		.attr('text-anchor', 'middle')
		.attr('style', 'dominant-baseline: central; alignment-baseline: central; font-family: sans-serif; font-size:' + age.bandwidth()*.45);

	var populationTickValues = people.ticks(10);
	var malePopulationTicks = this.chart.append('g')
		.selectAll('g').data(populationTickValues).enter()
		.append('g').attr('transform', function (d) {
			return 'translate(' + (center + age.bandwidth()/2 + people(d)) +', 0)';
		});
	var maleTickLines = malePopulationTicks.filter(function (d) {
			return d ? this : null; // Remove zero
		})
		.append('line')
		.attr('x1', 0)
		.attr('x2', 0)
		.attr('y1', 0)
		.attr('y2', height)
		.attr('stroke', 'white')
		.attr('stroke-width', 1)
		.attr('stroke-opacity', 0.618);
	var malePopulationTickLabels = malePopulationTicks.append('text')
		.text(function (d) {
			return d ? d + unit : '';
		})
		.attr('y', age('popscale')+age.bandwidth()/2)
		.attr('text-anchor', 'middle')
		.attr('style', 'dominant-baseline: central; alignment-baseline: central; font-family: sans-serif; font-size:' + age.bandwidth()*.45);

	var femalePopulationTicks = this.chart.append('g')
		.selectAll('g').data(populationTickValues).enter()
		.append('g').attr('transform', function (d) {
			return 'translate(' + (center - age.bandwidth()/2 - people(d)) +', 0)';
		});
	var femaleTickLines = femalePopulationTicks.filter(function (d) {
			return d ? this : null; // Remove zero
		})
		.append('line')
		.attr('x1', 0)
		.attr('x2', 0)
		.attr('y1', 0)
		.attr('y2', height)
		.attr('stroke', 'white')
		.attr('stroke-width', 1)
		.attr('stroke-opacity', 0.618);
	var femalePopulationTickLabels = femalePopulationTicks.append('text')
		.text(function (d) {
			return d ? d + unit : '';
		})
		.attr('y', age('popscale') + age.bandwidth()/2)
		.attr('text-anchor', 'middle')
		.attr('style', 'dominant-baseline: central; alignment-baseline: central; font-family: sans-serif; font-size:' + age.bandwidth()*.45);
	var ageAxisLabel = this.chart.append('text')
		.text('Age')
		.attr('y', age('popscale')+age.bandwidth()/2)
		.attr('x', center)
		.attr('text-anchor', 'middle')
		.attr('style', 'dominant-baseline: central; alignment-baseline: central; font-family: sans-serif; font-size:' + age.bandwidth()*.45);

	var yearLabel = this.chart.append('text')
		.text(minYear)
		.attr('dx', age.bandwidth())
		.attr('dy', age.bandwidth())
		.attr('style', 'alignment-baseline: hanging; font-family: sans-serif; font-weight: bold; fill: rgb(88,88,88); font-size:' + age.bandwidth()*2.2);

	$container.css('text-align', 'center');
	$container.append('<div id="' + elementID + 'YearControl" style="display: block; text-align: center; width: 100%"></div>');
	var $yearControl = $container.find('#' + elementID + 'YearControl');
	$yearControl.append('<div id="slider"></div>');


	let slider = $('#slider');
	slider.width(this.width*.4);
	slider.slider({
		min: +minYear,
		max: +maxYear,
		step: 1,
		slide: function (event, ui) {
			changeYear(ui.value);
		}
	});
	slider.css('display', 'inline-block').css('vertical-align', 'middle');

	slider.before('<div style="font-family: sans-serif; display: inline-block; margin: 0 ' + age.bandwidth()/2 +'px; font-size:' + age.bandwidth()*.45 + 'px">' + minYear + '</div>');
	var lastYearLabel = slider.after('<div style="font-family: sans-serif; display: inline-block; margin: 0 ' + age.bandwidth()/2 +'px; font-size:' + age.bandwidth()*.45 + 'px">' + maxYear + '</div>');
	$yearControl.append('<div style="font-family: sans-serif; margin: ' + age.bandwidth()*.55/2 + 'px auto; horizontal-align: center; font-size:' + age.bandwidth()*.45 + 'px">Year</div>')

	//$('#sliderLabels').append('<div>' + minYear + '</div><div>' + maxYear + '</div>');

	var changeYear = function (year) {
		barGroups.attr('transform', function (d) {
			if (d.key == 1) {
				// men
				return 'translate(' + (center + age.bandwidth()/2) + ', 0)';
			} else {
				return 'translate(' + (center - people(d.value[year].people) - age.bandwidth()/2) + ', 0)';
			}
		});
		bars.attr('width', function (d) {
			return people(d.value[year].people);
		});
		ageLabels.text(function (d) {
			return d.key;
		});
		yearLabel.text(year);
	};

};