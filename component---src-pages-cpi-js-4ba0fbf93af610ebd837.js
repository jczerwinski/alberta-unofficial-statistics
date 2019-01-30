(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"CPIQuery",function(){return y});var n=a(198),r=a.n(n),i=(a(229),a(231),a(75),a(53),a(233),a(235),a(239),a(34),a(7)),o=a.n(i),c=(a(241),a(0)),s=a.n(c),l=a(219),u=a(242),d=a(310),m=(a(299),a(300),a(220)),p=a(165),g=a(159),h=d.a.Handle,f=function(e){function t(t){var a;(a=e.call(this,t)||this).changePeriod=function(e){a.setState({period:a.getPeriod(e)})},a.state={};var n=a.props.data.allCpiCsv.edges;return n=(n=n.map(function(e){var t={};return e=e.node,t.period=u.DateTime.fromFormat(e.REF_DATE,"MMMyyyy").toFormat("yyyy-MMM"),t.category=e.Products_and_product_groups,t.value=e.Percent_Change,t.region=e.GEO,t})).reduce(function(e,t){var a;e[t.period]=Object.assign({},e[t.period]);var n=e[t.period];return n.Legend={Canada:"Canada",Alberta:"Alberta"},n[t.category]=Object.assign(((a={})[t.region]=Number.parseFloat(t.value),a),n[t.category]),e},{}),a.data=n,a.numPeriods=Object.keys(n).length,a.state.period=a.getPeriod(a.numPeriods-1),a.max=a.props.data.allCpiCsv.edges.reduce(function(e,t){return Math.max(e,Math.abs(t.node.Percent_Change))},-1/0),a}o()(t,e);var a=t.prototype;return a.getPeriod=function(e){return Object.entries(this.data)[e]},a.componentDidMount=function(){this.svg=l.d("#cpi").append("svg"),window.addEventListener("resize",this.componentDidUpdate.bind(this)),this.componentDidUpdate()},a.componentWillUnmount=function(){window.removeEventListener("resize",this.componentDidUpdate.bind(this))},a.componentDidUpdate=function(){var e=document.getElementById("cpi").offsetWidth,t=59.5*Object.keys(Object.entries(this.state.period[1])).length,a=l.c([-this.max-2,this.max+2],[0,e]);this.svg.attr("width",e).attr("height",t);var n=this.svg.selectAll("g.category").data(Object.entries(this.state.period[1])),r=n.enter().append("g");r.append("text").attr("class","categoryLabel").text(function(e){return e[0]}).attr("dy",-3).attr("text-anchor","middle");var i=(n=n.merge(r).attr("class",function(e){return"category"}).attr("transform",function(e,t){return"translate("+a(0)+","+(59.5*t+20)+")"})).selectAll("g.region").data(function(e){return Object.entries(e[1])}),o=i.enter().append("g").attr("class",function(e){return e[0]+" region"}).attr("transform",function(e,t){return"translate(0, "+17*t+")"});o.append("rect").attr("y",0).attr("height",17),o.append("text").attr("class","regionValueLabel").attr("alignment-baseline","middle").attr("dy",8.5);var c=i.merge(o);function s(e){return"string"==typeof e[1]}c.select("rect").attr("x",function(e){return s(e)?-8.5:Math.min(0,a(e[1])-a(0))}).attr("width",function(e){return s(e)?17:Math.abs(a(0)-a(e[1]))}),c.select("text").attr("text-anchor",function(e){return e[1]<0?"end":"start"}).attr("dx",function(e){return s(e)?11.5:a(e[1])-a(0)+3*Math.sign(e[1]-0)}).text(function(e){return""+e[1]}),i.exit().remove(),n.exit().remove()},a.render=function(){var e=this;return s.a.createElement(p.a,null,s.a.createElement(g.a,{title:"CPI"}),s.a.createElement("ul",null,s.a.createElement("li",null,"Adapted from the ",s.a.createElement("a",{href:"https://open.alberta.ca/dataset/443b43de-b8c0-4108-9aab-bde7df7532ed"},"Alberta Official Statistics Consumer Price Index.")),s.a.createElement("li",null,"Automatically updates with a single command."),s.a.createElement("li",null,"Fully mobile accessible."),s.a.createElement("li",null,"Groups category labels and bars together to reduce the eye movement required to connect them."),s.a.createElement("li",null,"This visualization does not consider the weight of each CPI component. As such, a similar per cent change in two CPI components could have very different impacts on overall CPI. It may be worth exploring designs that visualize this more effectively."),s.a.createElement("li",null,"Use the slider to change the period.")),s.a.createElement("h2",null,"Consumer Price Index, Year-Over-Year Percentage Change"),s.a.createElement("h3",null,u.DateTime.fromFormat(this.state.period[0],"yyyy-MMM").toFormat("MMMM yyyy")),s.a.createElement(d.a,{min:0,max:this.numPeriods-1,trackStyle:{backgroundColor:"lightgrey"},railStyle:{backgroundColor:"lightgrey"},defaultValue:this.numPeriods-1,handle:function(t){var a=t.value,n=(t.dragging,t.index),i=r()(t,["value","dragging","index"]);return s.a.createElement(m.a,{prefixCls:"rc-slider-tooltip",overlay:e.getPeriod(a)[0],visible:!0,placement:"top",key:n},s.a.createElement(h,Object.assign({value:a},i)))},onChange:this.changePeriod}),s.a.createElement("div",{id:"cpi"}))},t}(c.Component);t.default=f;var y="136371961"},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(149),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Alberta un-Official Statistics"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},158:function(e,t,a){},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(176),l=a.n(s),u=a(143);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Alberta un-Official Statistics",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},165:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(143),l=a(175),u=a.n(l),d=function(e){e.siteTitle;return i.a.createElement("div",{style:{marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0,fontFamily:"Arial",fontWeight:100}},i.a.createElement(s.Link,{style:{textDecoration:"none",color:"inherit"},to:"/"},"Alberta ",i.a.createElement("span",{style:{color:"#ff7900"}},"un-"),i.a.createElement("span",{style:{color:"#00aad2"}},"Official Statistics")))))};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var m=d,p=(a(158),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{href:"//www.github.com/jczerwinski/alberta-unofficial-statistics",color:"black",target:"_blank",position:"right"},"Fork me on GitHub"),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});p.propTypes={children:c.a.node.isRequired};t.a=p},241:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-cpi-js-4ba0fbf93af610ebd837.js.map