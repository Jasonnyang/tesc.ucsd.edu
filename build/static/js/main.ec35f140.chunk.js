(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/hero.d2840188.svg"},20:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){var n;"undefined"!==typeof self&&self,n=function(e,t){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=266)}({1:function(t,a){t.exports=e},2:function(e,t){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};t.__extends=function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}},266:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=a(267);n.EventSourceParser.registerClass(r.default),n.GcalEventSource=r.default},267:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=a(3),c=a(1),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.parse=function(e,t){var a;return"object"===typeof e?a=e:"string"===typeof e&&(a={url:e}),!!a&&c.EventSource.parse.call(this,a,t)},t.prototype.fetch=function(e,t,a){var n=this,o=this.buildUrl(),l=this.buildRequestParams(e,t,a),s=this.ajaxSettings||{},i=s.success;return l?(this.calendar.pushLoading(),c.Promise.construct(function(e,t){r.ajax(r.extend({},c.JsonFeedEventSource.AJAX_DEFAULTS,s,{url:o,data:l,success:function(a,o,s){var m,u;n.calendar.popLoading(),a.error?(n.reportError("Google Calendar API: "+a.error.message,a.error.errors),t()):a.items&&(m=n.gcalItemsToRawEventDefs(a.items,l.timeZone),u=c.applyAll(i,n,[a,o,s]),r.isArray(u)&&(m=u),e(n.parseEventDefs(m)))},error:function(e,a,r){n.reportError("Google Calendar network failure: "+a,[e,r]),n.calendar.popLoading(),t()}}))})):c.Promise.reject()},t.prototype.gcalItemsToRawEventDefs=function(e,t){var a=this;return e.map(function(e){return a.gcalItemToRawEventDef(e,t)})},t.prototype.gcalItemToRawEventDef=function(e,t){var a=e.htmlLink||null;return a&&t&&(a=function(e,t){return e.replace(/(\?.*?)?(#|$)/,function(e,a,n){return(a?a+"&":"?")+t+n})}(a,"ctz="+t)),{id:e.id,title:e.summary,start:e.start.dateTime||e.start.date,end:e.end.dateTime||e.end.date,url:a,location:e.location,description:e.description}},t.prototype.buildUrl=function(){return t.API_BASE+"/"+encodeURIComponent(this.googleCalendarId)+"/events?callback=?"},t.prototype.buildRequestParams=function(e,t,a){var n,c=this.googleCalendarApiKey||this.calendar.opt("googleCalendarApiKey");return c?(e.hasZone()||(e=e.clone().utc().add(-1,"day")),t.hasZone()||(t=t.clone().utc().add(1,"day")),n=r.extend(this.ajaxSettings.data||{},{key:c,timeMin:e.format(),timeMax:t.format(),singleEvents:!0,maxResults:9999}),a&&"local"!==a&&(n.timeZone=a.replace(" ","_")),n):(this.reportError("Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"),null)},t.prototype.reportError=function(e,t){var a=this.calendar,n=a.opt("googleCalendarError"),r=t||[{message:e}];this.googleCalendarError&&this.googleCalendarError.apply(a,r),n&&n.apply(a,r),c.warn.apply(null,[e].concat(t||[]))},t.prototype.getPrimitive=function(){return this.googleCalendarId},t.prototype.applyManualStandardProps=function(e){var t=c.EventSource.prototype.applyManualStandardProps.apply(this,arguments),a=e.googleCalendarId;return null==a&&e.url&&(a=function(e){var t;if(/^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(e))return e;if((t=/^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(e))||(t=/^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(e)))return decodeURIComponent(t[1])}(e.url)),null!=a&&(this.googleCalendarId=a,t)},t.prototype.applyMiscProps=function(e){this.ajaxSettings||(this.ajaxSettings={}),r.extend(this.ajaxSettings,e)},t.API_BASE="https://www.googleapis.com/calendar/v3/calendars",t}(c.EventSource);t.default=o,o.defineStandardProps({url:!1,googleCalendarId:!1,googleCalendarApiKey:!0,googleCalendarError:!0})},3:function(e,a){e.exports=t}})},e.exports=n(a(19),a(10))},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=a(39),s=a(2),i=a(3),m=a(5),u=a(4),d=a(6),p=a(42),h=a(27),f=a(41),g=a(40),b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"everyoneLinks",value:function(){return r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item nav__item text-center"},r.a.createElement(g.a,{className:"nav-link",to:"/about"},"ABOUT")),r.a.createElement("li",{className:"nav-item nav__item text-center"},r.a.createElement(g.a,{className:"nav-link",to:"/#events"},"EVENTS")),r.a.createElement("li",{className:"nav-item nav__item text-center"},r.a.createElement(g.a,{className:"nav-link",to:"/#join"},"JOIN")),r.a.createElement("li",{className:"nav-item nav__item text-center"},r.a.createElement(g.a,{className:"nav-link",to:"/#contact"},"CONTACT")),r.a.createElement("li",{className:"nav-item text-center"},r.a.createElement(g.a,{className:"nav-link btn nav__toggle",to:"/orgs"},"For TESC Orgs")))}},{key:"orgLinks",value:function(){return r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item nav__item text-center"},r.a.createElement(g.a,{className:"nav-link",to:"/orgs/membership"},"MEMBERSHIP")),r.a.createElement("li",{className:"nav-item nav__item text-center"},r.a.createElement(g.a,{className:"nav-link",to:"/orgs/finance"},"FINANCE")),r.a.createElement("li",{className:"nav-item nav__item text-center"},r.a.createElement(g.a,{className:"nav-link",to:"/orgs/spaces"},"PROJECT SPACES")),r.a.createElement("li",{className:"nav-item nav__item text-center"},r.a.createElement(g.a,{className:"nav-link",to:"/#contact"},"CONTACT")),r.a.createElement("li",{className:"nav-item text-center"},r.a.createElement(g.a,{className:"nav-link btn nav__toggle-active",to:"/"},"FOR EVERYONE")))}},{key:"render",value:function(){var e=this.props.isOrgs;return r.a.createElement("header",null,r.a.createElement("div",{className:"pt-3",id:"top-nav"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light nav__items"},r.a.createElement(g.a,{to:"/"},r.a.createElement("img",{className:"ml-auto mr-auto nav__logo",href:"#",src:"/tesc-logo.png"})),r.a.createElement("button",{className:"navbar-toggler nav__toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},e?this.orgLinks():this.everyoneLinks()))))}}]),t}(r.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("section",{className:"contact",id:"contact"},r.a.createElement("div",{className:"container-fluid d-flex align-items-center h-100"},r.a.createElement("h1",{className:"contact__header m-auto"},"Talk to us at ",r.a.createElement("a",{className:"contact__link",href:"mailto:hello@tesc.ucsd.edu"},"hello@tesc.ucsd.edu")," if you have any questions."))),r.a.createElement("footer",{className:"footer",id:"footer"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("ul",{className:"footer__links flex-column ml-md-auto d-flex flex-md-row justify-content-between text-center text-md-left"},r.a.createElement("li",{className:"footer__link-item"},r.a.createElement("a",{className:"footer__link",target:"_new",href:"https://www.facebook.com/SDHacks/"},r.a.createElement("i",{className:"fab fa-facebook-square"}))),r.a.createElement("li",{className:"footer__link-item"},r.a.createElement("a",{className:"footer__link",target:"_new",href:"https://twitter.com/SDHacks"},r.a.createElement("i",{className:"fab fa-twitter-square"}))),r.a.createElement("li",{className:"footer__link-item footer__link-item--logo"},r.a.createElement("a",{className:"footer__link",href:"http://tesc.ucsd.edu",target:"_new"},r.a.createElement("img",{src:"/tesc-logo.png"}))),r.a.createElement("li",{className:"footer__link-item"},r.a.createElement("a",{className:"footer__link",target:"_new",href:"https://medium.com/triton-engineering-student-council"},r.a.createElement("i",{className:"fab fa-medium"}))),r.a.createElement("li",{className:"footer__link-item"},r.a.createElement("a",{className:"footer__link",target:"_new",href:"mailto://hello@tesc.ucsd.edu"},r.a.createElement("i",{className:"fas fa-envelope-square"})))))))}}]),t}(r.a.Component),v=a(14),_=a.n(v),y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"container-fluid p-0 h-100 mx-0"},r.a.createElement("div",{className:"row h-100 hero__row w-100 mx-0"},r.a.createElement("div",{className:"col-md-6 d-flex"},r.a.createElement("div",{className:"align-self-center hero__fix"},r.a.createElement("div",{className:"hero__copy"},"We empower engineers."),r.a.createElement("div",{className:"hero__cta"},r.a.createElement("a",{className:"btn hero__cta-btn",href:"http://eepurl.com/cEDIcb",target:"_blank"}," Subscribe ",r.a.createElement("i",{className:"fa fa-envelope"})," ")))),r.a.createElement("div",{className:"col-md-6 p-0 d-flex"},r.a.createElement("img",{src:_.a,className:"hero__graphic w-100 align-self-center"})))))}}]),t}(r.a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"events mb-5",id:"events"},r.a.createElement("div",{className:"text-center events__red"},"What's Happening?"),r.a.createElement("div",{className:"text-center events__header"},"Upcoming Events"),r.a.createElement("div",{className:"container events__container"},r.a.createElement("div",{className:"row h-100 justify-content-center flex-row events__cards"},r.a.createElement("div",{className:"events__none"},"Nothing Yet, Stay Tuned For More"))))}}]),t}(r.a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"join",id:"join"},r.a.createElement("div",{className:"text-center join__header pt-5"},"Join TESC"),r.a.createElement("div",{className:"join__container mt-5"},r.a.createElement("div",{className:"text-center"}),r.a.createElement("div",{className:"join__btns row"},r.a.createElement("div",{className:"col-md text-center"},r.a.createElement("a",{className:"btn join__cta",href:"https://docs.google.com/forms/d/e/1FAIpQLScNK0mTKbkKciAnptEeCwjLmqlNUALrwHhJb6ABktlvqpF1kA/viewform?usp=sf_link"}," TESC Committees")),r.a.createElement("div",{className:"col-md text-center"},r.a.createElement("a",{className:"btn join__cta",href:"https://tesc.typeform.com/to/GeFYtC"}," Council Organization")))))}}]),t}(r.a.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(j,null))}}]),t}(r.a.Component),O=a(10),k=a.n(O),x=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){k()("#calendar").fullCalendar({googleCalendarApiKey:"AIzaSyBFA-QZSbpnCJ_qcC82PHtlv_qaltzybr8",header:{left:"prev,next today",center:"title",right:"month,listWeek"},events:{googleCalendarId:"tesc.ucsd.edu_l62l0g9gertfd7rel7ksgrgq6k@group.calendar.google.com"},eventClick:function(e){return window.open(e.url,"_blank","width=700,height=600"),!1},defaultView:"listWeek"})}},{key:"render",value:function(){return r.a.createElement("section",{className:"hero h-100"},r.a.createElement("div",{className:"container-fluid w-100 p-0 h-100 ml-0"},r.a.createElement("div",{className:"row h-100 hero__row w-100 mx-0"},r.a.createElement("div",{className:"col-md-6 d-flex"},r.a.createElement("div",{className:"align-self-center calendar"},r.a.createElement("div",{className:"hero__copy-orgs"},"Upcoming Events & Deadlines"),r.a.createElement("div",{id:"calendar"}))),r.a.createElement("div",{className:"col-md-6 p-0 d-flex"},r.a.createElement("img",{src:_.a,className:"hero__graphic w-100 align-self-center"})))))}}]),t}(r.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null))}}]),t}(r.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{class:"about mb-5 mt-5"},r.a.createElement("div",{class:"text-center about__header-red"},"About TESC"),r.a.createElement("div",{class:"text-center about__header"},"Our Mission Statement"),r.a.createElement("div",{class:"about__text mt-5 text-center"},r.a.createElement("p",{class:"about__copy"},"The ",r.a.createElement("span",{class:"about__blue"},"Triton Engineering Student Council (TESC) ")," empowers UC San Diego engineering students by connecting them with impactful communities, projects, and career building opportunities.")))}}]),t}(r.a.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"col-md-3 board__member"},r.a.createElement("img",{src:e.img,className:"board__member-img"}),r.a.createElement("div",{className:"text-center board__member-name"},e.name),r.a.createElement("div",{className:"text-center board__member-title"},e.role))}}]),t}(r.a.Component),P=[{name:"Colin Feeney",role:"President",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Caitlyn Liu",role:"VP External",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Nick Thomson",role:"VP Internal",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Callie Boskin",role:"VP External",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Jonathan Luck",role:"VP Events",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"David Ding",role:"Sponsorship Lead",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Sergio Villazon",role:"ProDev Lead",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Bilguun Bulgan",role:"HackXX Director",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Alice Lee",role:"HackXX Director",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Subhankar Panda",role:"Technical Lead",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Cora Xing",role:"Design Lead",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Andy Li",role:"Outreach Lead",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Catherine Xia",role:"Social Lead",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Cameron Wilkinson",role:"Council Relations Lead",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Evon Hung",role:"Marketing Lead",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Joshua Hedgpeth",role:"Project Spaces Lead",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"},{name:"Nick Lin",role:"Data Analyst",img:"https://s3.us-east-2.amazonaws.com/tesc-website/board/placeholder.png"}],A=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"renderMembers",value:function(e){return e.reduce(function(e,t,a,n){return a%4?e:e.concat([n.slice(a,a+4)])},[]).map(function(e){return r.a.createElement("div",{className:"row board__row"},e.map(function(e){return r.a.createElement(T,{data:e})}))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"board__body pb-3"},r.a.createElement("div",{className:"text-center board__body-small pt-5"},"Our Team"),r.a.createElement("div",{className:"text-center board__body-big"},"Executive Board",r.a.createElement("div",{className:"container mt-3 p-0"},this.renderMembers(P))))}}]),t}(r.a.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(A,null))}}]),t}(r.a.Component),q=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"about"},r.a.createElement("div",{className:"text-center about__header-red"},"Membership"),r.a.createElement("div",{className:"text-center about__header"},"Become a TESC Organization"),r.a.createElement("div",{className:"about__text mt-5 text-center"},r.a.createElement("p",{className:"about__copy"},"Become a member in the largest collaborative student network of engineering organizations at UC San Diego. TESC organizations gain the full support of the Triton Engineering Student Council. Member orgs can receive funding and spaces for projects along with logistical and financial support for their events.")),r.a.createElement("div",{className:"row",style:{marginTop:"6rem"}},r.a.createElement("div",{className:"col-md text-center"},r.a.createElement("a",{className:"btn btn-cta",href:"https://tesc.typeform.com/to/GeFYtC"},"Join TESC"))))}}]),t}(r.a.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null))}}]),t}(r.a.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"about"},r.a.createElement("div",{className:"text-center about__header-red"},"Project Spaces"),r.a.createElement("div",{className:"text-center about__header"},"Storage & Workspaces"),r.a.createElement("div",{className:"about__text mt-5 text-center"},r.a.createElement("p",{className:"about__copy"},"The goal of TESC Project Spaces is to provide UC San Diego's engineering student organizations with the physical spaces they need to complete their projects. This includes providing access to on campus storage facilities and work spaces, and collaborating with the Jacobs School of Engineering for project space development.")),r.a.createElement("div",{className:"row",style:{marginTop:"6rem"}},r.a.createElement("div",{className:"col-md text-center"},r.a.createElement("a",{className:"btn btn-cta",href:"http://tinyurl.com/projectspacescontract"},"Project Spaces Allocation Agreement")),r.a.createElement("div",{className:"col-md text-center"},r.a.createElement("a",{className:"btn btn-cta",href:"https://goo.gl/forms/hs0hsuzpMySiy9vi1"},"Project Space Request Form"))))}}]),t}(r.a.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null))}}]),t}(r.a.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"req__item"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"req__item-header "},e.title)),r.a.createElement("div",{className:"req__item-content px-5 py-3"},r.a.createElement("ol",null,e.content.map(function(e){return r.a.createElement("li",null,e)}))))}}]),t}(r.a.Component),R=[{title:"Organization Eligibility to Apply for TESC Funds",content:[r.a.createElement("div",null,"Must be an undergraduate student engineering organization within the Jacobs School of Engineering."),r.a.createElement("div",null,"Must be registered as an active student organization with the Center for Student Involvement (CSI)."),r.a.createElement("div",null,"Must be an active TESC organization. ",r.a.createElement("i",null,"Probationary organizations are not eligible for funding"))]},{title:"Funding Rules",content:[r.a.createElement("div",null,"Funds requested for any event, project, or equipment must relate to the mission of the organization. "),r.a.createElement("div",null,"TESC will not fund any food items in cases where AS funding could be used for your event."),r.a.createElement("div",null,"We do not fund sales tax or shipping costs."),r.a.createElement("div",null,"For travel related expenses, please apply to the ",r.a.createElement("a",{target:"_blank",href:"http://jacobsschool.ucsd.edu/idea/resources/travel.shtml"},"Student Travel Fund")," or AS competition funds to request funding for travel. TESC will take requests for travel/competition funding only after an organization applies to the Student Travel Fund and AS Competition Funding"),r.a.createElement("div",null,"Any request for an event or project must be done at least 4 weeks in advance, with exceptions granted for extraordinary circumstances at the discretion of the VP Finance."),r.a.createElement("div",null,"We approve funding requests based on the list of expenses submitted during the funding request process. This means we will not reimburse you for expenses that were not included in that list. If small changes need to be made to the initial budget (ie. different supplier), ",r.a.createElement("a",{href:"mailto:callie@tesc.ucsd.edu",target:"_blank"},"email the VP Finance")," for approval."),r.a.createElement("div",null,"For projects that will take longer than 10 weeks to complete, a funding request is required at least once a quarter.")]},{title:"Process for Funding and Reimbursement",content:[r.a.createElement("div",null,"Create an itemized budget of expected expenses, such as the one ",r.a.createElement("a",{target:"_blank",href:""},"here")),r.a.createElement("div",null,"Submit a funding request through ",r.a.createElement("a",{href:"http://bit.ly/FundingRequestForm",target:"_blank"},"Typeform")),r.a.createElement("div",null,"You will receive an email from the ",r.a.createElement("a",{href:"mailto:callie@tesc.ucsd.edu",target:"_blank"},"VP Finance")," within two weeks of submitting the funding request either approving, partially approving, or denying your funding request."),r.a.createElement("div",null,"Spend your organization\u2019s money to host the event/buy the materials."),r.a.createElement("div",null,"Submit a reimbursement request on typeform with a scan/photo/screenshot of your receipt ",r.a.createElement("a",{href:"https://tesc.typeform.com/to/l7YNMz",target:"_blank"}," here. ")),r.a.createElement("div",null,"You will receive an email from TESC within two weeks of submitting the reimbursement request informing you of how you can collect your payment.")]}],D=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"showRequirements",value:function(){return R.map(function(e){return r.a.createElement(M,{data:e})})}},{key:"render",value:function(){return r.a.createElement("section",{className:"about"},r.a.createElement("div",{className:"text-center about__header-red"},"Finance"),r.a.createElement("div",{className:"text-center about__header mb-5"},"TESC Council Funding Requirements"),r.a.createElement("section",{className:"req pt-1"},r.a.createElement("div",{className:"container"},this.showRequirements())))}}]),t}(r.a.Component),J=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null))}}]),t}(r.a.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"withLayout",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{isOrgs:t}),r.a.createElement("div",{id:"main"},r.a.createElement(e,null)),r.a.createElement(E,null))}}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:this.withLayout(N)}),r.a.createElement(h.a,{exact:!0,path:"/orgs",component:this.withLayout(C,!0)}),r.a.createElement(h.a,{exact:!0,path:"/about",component:this.withLayout(z)}),r.a.createElement(h.a,{exact:!0,path:"/orgs/membership",component:this.withLayout(F,!0)}),r.a.createElement(h.a,{exact:!0,path:"/orgs/spaces",component:this.withLayout(I,!0)}),r.a.createElement(h.a,{exact:!0,path:"/orgs/finance",component:this.withLayout(J,!0)}))}}]),t}(r.a.Component),U=Object(f.a)(B),V=(a(31),a(19),a(17)),H=a.n(V);window.React=r.a,window.ReactDOM=o.a,window.jQuery=k.a,window.jquery=k.a,window.$=k.a,window.moment=H.a;a(35),a(37);o.a.render(r.a.createElement(l.a,null,r.a.createElement(U,null)),document.getElementById("app"))}},[[20,2,1]]]);
//# sourceMappingURL=main.ec35f140.chunk.js.map