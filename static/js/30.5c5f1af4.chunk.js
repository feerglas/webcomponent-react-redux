(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{99:function(t,e,o){"use strict";o.r(e),o.d(e,"SbbAutocomplete",function(){return n});var i=o(18),n=function(){function t(){var t=this;this.isDirty=!0,this.onFocus=function(){t.hasFocus=!0},this.onBlur=function(){t.hasFocus=!1,t.trigger("sbb-autocomplete_blur")},this.onInput=function(e){var o=e.target.value;t.setValue(o),t.isDirty=!0,t.triggerInputEvent(o)}}return t.prototype.componentWillLoad=function(){this.isDirty=!this.value},t.prototype.getSuggestions=function(){try{var t=JSON.parse(this.suggestions);if(Array.isArray(t))return t}catch(t){throw new Error('\n\t\t\t\t\tsbb-autocomplete: suggestions attribute expected as JSON Array,\n\t\t\t\t\te.g. [{"label": "hello", "id": "world"}]\n\t\t\t\t')}},t.prototype.triggerInputEvent=function(t){this.trigger("sbb-autocomplete_input",{input:t})},t.prototype.onSuggestionSelected=function(t,e){e.preventDefault(),this.isDirty=!1,this.setValue(t.label||t),this.triggerSelectionEvent(t)},t.prototype.triggerSelectionEvent=function(t){this.trigger("sbb-autocomplete_selection",{selection:t})},t.prototype.trigger=function(t,e){var o=new CustomEvent(t,{detail:e});this.element.dispatchEvent(o)},t.prototype.setValue=function(t){this.element.setAttribute("value",t)},t.prototype.render=function(){var t=this,e=this.getSuggestions(),o=!!e.length&&this.hasFocus&&this.isDirty,n=[Object(i.b)("input",{type:"text",name:this.name,placeholder:this.placeholder,onInput:this.onInput,onFocus:this.onFocus,onBlur:this.onBlur,value:this.value})];if(this.label){var r=n[0];n[0]=Object(i.b)("label",null,Object(i.b)("span",{class:this.value?"visible":""},this.label),r)}return o&&n.push(Object(i.b)("ul",null,e.map(function(e){var o=t.onSuggestionSelected.bind(t,e);return Object(i.b)("li",{onMouseDown:o},e.label||e)}))),n},Object.defineProperty(t,"is",{get:function(){return"sbb-autocomplete"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{element:{elementRef:!0},hasFocus:{state:!0},isDirty:{state:!0},label:{type:String,attr:"label"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},suggestions:{type:String,attr:"suggestions"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return'.sc-sbb-autocomplete-h{font-family:SBBWeb Roman,Helvetica Neue,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;display:block;width:auto;margin:0 0 1.5rem 0;position:relative}*.sc-sbb-autocomplete{-webkit-box-sizing:border-box;box-sizing:border-box}input.sc-sbb-autocomplete, label.sc-sbb-autocomplete{display:block;width:100%;font-size:1rem;color:#444}label.sc-sbb-autocomplete   span.sc-sbb-autocomplete{display:block;padding:0 0 .3125rem .5rem;margin:0;font-size:.8125rem;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}label.sc-sbb-autocomplete   span.visible.sc-sbb-autocomplete{opacity:1}input.sc-sbb-autocomplete{border:.125rem solid #d2d2d2;border-radius:2rem/16;outline:none;padding:.625rem .75rem}input.sc-sbb-autocomplete:focus{border-color:#444;outline:none}ul.sc-sbb-autocomplete{-webkit-transform:translateY(-.125rem);transform:translateY(-.125rem);z-index:1;border:.125rem solid #444;border-top:0;background-color:#fff;width:100%;margin:0;padding:.5625rem 0 .75rem;list-style-type:none;-webkit-box-shadow:0 .375rem 0 rgba(0,0,0,.15);box-shadow:0 .375rem 0 rgba(0,0,0,.15)}ul.sc-sbb-autocomplete, ul.sc-sbb-autocomplete:before{position:absolute}ul.sc-sbb-autocomplete:before{content:"";display:block;top:0;left:0;right:0;height:.0625rem;background-color:#d2d2d2}li.sc-sbb-autocomplete{margin:0;padding:.375rem .9375rem;font-size:.9375rem;cursor:pointer}li.is-active.sc-sbb-autocomplete, li.sc-sbb-autocomplete:hover{color:#c60018}'},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=30.5c5f1af4.chunk.js.map