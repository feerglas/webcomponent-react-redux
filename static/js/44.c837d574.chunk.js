(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{112:function(e,t,s){"use strict";s.r(t),s.d(t,"SbbDeeplinkTeaser",function(){return n}),s.d(t,"SbbDeeplinkTeasers",function(){return r});var i=s(18),n=function(){function e(){}return e.prototype.render=function(){return Object(i.b)("li",{class:"item"},Object(i.b)("a",{class:"link",href:this.link.link},Object(i.b)("div",{class:"image-wrapper"},Object(i.b)("img",{class:"image",src:this.image})),Object(i.b)("div",{class:"text-wrapper"},Object(i.b)("h"+this.titleLevel,{className:"title"},this.teaserTitle),Object(i.b)("div",{class:"text-wrapper-inner"},Object(i.b)("p",{class:"text"},this.text),Object(i.b)("span",{class:"bottom-link"},this.link.title,Object(i.b)("span",{class:"bottom-link-icon",innerHTML:'<svg width="15px" height="11px" viewBox="0 0 15 11"><g id="Page-1" stroke="none"><polyline id="Path" points="9.6 0.5 8.8 1.3 12.5 5 0.5 5 0.5 6 12.5 6 8.8 9.7 9.6 10.4 14.6 5.4"></polyline></g></svg>'}))))))},Object.defineProperty(e,"is",{get:function(){return"sbb-deeplink-teaser"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{image:{type:String,attr:"image"},link:{type:"Any",attr:"link"},teaserTitle:{type:String,attr:"teaser-title"},text:{type:String,attr:"text"},titleLevel:{type:Number,attr:"title-level"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-sbb-deeplink-teaser-h{-ms-flex-preferred-size:100%;flex-basis:100%;display:block;margin-bottom:1rem}.item.sc-sbb-deeplink-teaser{font-family:SBBWeb Light,Helvetica Neue,Helvetica,Arial,sans-serif;height:100%}.link.sc-sbb-deeplink-teaser{background-color:#f6f6f6;display:block;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in;text-decoration:none;color:#000;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}.image-wrapper.sc-sbb-deeplink-teaser{overflow:hidden;-ms-flex-negative:0;flex-shrink:0}.link.sc-sbb-deeplink-teaser:hover{background-color:#e5e5e5}.image.sc-sbb-deeplink-teaser{display:block;width:100%;-webkit-transition:-webkit-transform .2s ease-in;transition:-webkit-transform .2s ease-in;transition:transform .2s ease-in;transition:transform .2s ease-in,-webkit-transform .2s ease-in}.link.sc-sbb-deeplink-teaser:hover   .image.sc-sbb-deeplink-teaser{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}.text-wrapper.sc-sbb-deeplink-teaser{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:.6rem;height:100%}.title.sc-sbb-deeplink-teaser{margin:.9rem 0 2rem;font-size:1.2rem;font-weight:400}.text.sc-sbb-deeplink-teaser{display:none;line-height:1.7rem}.bottom-link.sc-sbb-deeplink-teaser, .text.sc-sbb-deeplink-teaser{font-family:SBBWeb Roman,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:.9rem}.bottom-link.sc-sbb-deeplink-teaser{display:block;margin-bottom:1.2rem;-webkit-transition:color .2s ease-in;transition:color .2s ease-in}.link.sc-sbb-deeplink-teaser:hover   .bottom-link.sc-sbb-deeplink-teaser{color:#c60018}.bottom-link-icon.sc-sbb-deeplink-teaser{display:inline-block;margin-left:.6rem;fill:#eb0000}.link.sc-sbb-deeplink-teaser:hover   .bottom-link-icon.sc-sbb-deeplink-teaser{fill:#c60018}@media (min-width:643px){.sc-sbb-deeplink-teaser-h{-ms-flex-preferred-size:calc(50% - .5rem);flex-basis:calc(50% - .5rem)}.text-wrapper.sc-sbb-deeplink-teaser{padding:1.5rem}.text-wrapper-inner.sc-sbb-deeplink-teaser{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%;-ms-flex-pack:justify;justify-content:space-between}.text.sc-sbb-deeplink-teaser{display:block;margin-top:0}}@media (min-width:1025px){.sc-sbb-deeplink-teaser-h{-ms-flex-preferred-size:calc(25% - 1rem);flex-basis:calc(25% - 1rem)}}"},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){}return e.prototype.render=function(){var e=this,t=JSON.parse(this.items);return Object(i.b)("ul",{class:"teasers"},t.map(function(t){return Object(i.b)("sbb-deeplink-teaser",{image:t.image,"teaser-title":t.title,"title-level":e.titlesLevel,text:t.text,link:t.link})}))},Object.defineProperty(e,"is",{get:function(){return"sbb-deeplink-teasers"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{items:{type:String,attr:"items"},titlesLevel:{type:String,attr:"titles-level"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-sbb-deeplink-teasers-h{display:block;overflow:auto;margin-bottom:3.5rem}@media (min-width:643px){.sc-sbb-deeplink-teasers-h{margin-bottom:4.5rem}}@media (min-width:1025px){.sc-sbb-deeplink-teasers-h{margin-bottom:6rem}}.teasers.sc-sbb-deeplink-teasers{list-style-type:none;padding:0 .8rem;margin:0;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}@media (min-width:643px){.teasers.sc-sbb-deeplink-teasers{padding:0 1.5rem}.teasers.sc-sbb-deeplink-teasers   sbb-deeplink-teaser.sc-sbb-deeplink-teasers{margin-right:1rem}.teasers.sc-sbb-deeplink-teasers   sbb-deeplink-teaser.sc-sbb-deeplink-teasers:nth-child(2n){margin-right:0}}@media (min-width:1025px){.teasers.sc-sbb-deeplink-teasers{padding:0 2rem;margin:0 auto;max-width:1200px}.teasers.sc-sbb-deeplink-teasers   sbb-deeplink-teaser.sc-sbb-deeplink-teasers:nth-child(2n){margin-right:1rem}.teasers.sc-sbb-deeplink-teasers   sbb-deeplink-teaser.sc-sbb-deeplink-teasers:last-child, .teasers.sc-sbb-deeplink-teasers   sbb-deeplink-teaser.sc-sbb-deeplink-teasers:nth-last-child(3){margin-right:0}}"},enumerable:!0,configurable:!0}),e}()}}]);
//# sourceMappingURL=44.c837d574.chunk.js.map