jQuery(document).ready(function (jQuery){
"use strict";
jQuery.fn.extend({
cityAutocomplete: function (options){
return this.each(function (){
var googleConObj=google.maps;
if(typeof googleConObj.places!=='undefined'){
var input=jQuery(this), opts=jQuery.extend({}, jQuery.cityAutocomplete);
var autocompleteService=new google.maps.places.AutocompleteService();
var predictionsDropDown=jQuery('<div class="jobsearch_location_autocomplete" class="city-autocomplete"></div>').appendTo(jQuery(this).parent());
var request_var=1;
input.keyup(function (){
var adress_type='';
if(jobsearch_plugin_vars.autocomplete_adres_type=='city_contry'){
adress_type=['(cities)'];
}
jQuery(this).parent(".jobsearch_searchloc_div").find('.loc-loader').html("<i class='fa fa-refresh fa-spin'></i>");
if(request_var==1){
var searchStr=jQuery(this).val();
var num_of_chars=0;
if(searchStr.length > num_of_chars){
var params={
input: searchStr,
bouns: 'upperbound',
types: adress_type
};
var selected_contries_json='';
var selected_contries=jobsearch_plugin_vars.sel_countries_json;
if(selected_contries!=''){
var selected_contries_tojs=jQuery.parseJSON(selected_contries);
selected_contries_json={country: selected_contries_tojs};}
params.componentRestrictions=selected_contries_json;
autocompleteService.getPlacePredictions(params, updatePredictions);
}else{
jQuery(".jobsearch_searchloc_div").find('.loc-loader').html('');
}}
});
predictionsDropDown.delegate('div', 'click', function (){
if(jQuery(this).text()!=jobsearch_plugin_vars.var_address_str&&jQuery(this).text()!=jobsearch_plugin_vars.var_other_locs_str){
var jobsearch_address_html=jQuery(this).text();
var jobsearch_address_slug=jQuery(this).find('span').html();
jQuery(this).find('span').remove();
input.val(jQuery(this).text());
input.next('.loc_search_keyword').val(jobsearch_address_slug);
predictionsDropDown.hide();
input.next('.loc_search_keyword').closest("form.side-loc-srch-form").submit();
}});
jQuery(document).mouseup(function (e){
predictionsDropDown.hide();
});
jQuery(window).resize(function (){
updatePredictionsDropDownDisplay(predictionsDropDown, input);
});
updatePredictionsDropDownDisplay(predictionsDropDown, input);
function updatePredictions(predictions, status){
var google_results='';
if(google.maps.places.PlacesServiceStatus.OK==status){
google_results +='<div class="address_headers"><h5>' + jobsearch_plugin_vars.var_address_str + '</h5></div>';
jQuery.each(predictions, function (i, prediction){
google_results +='<div class="jobsearch_google_suggestions"><i class="icon-location-arrow"></i> ' + prediction.description + '<span style="display:none">' + prediction.description + '</span></div>';
});
request_var=0;
}else{
predictionsDropDown.empty();
}
var dataString='action=jobsearch_get_all_db_locations' + '&keyword=' + jQuery('.jobsearch_search_location_field').val();
var plugin_url=jobsearch_plugin_vars.ajax_url;
var request=jQuery.ajax({
type: "POST",
url: plugin_url,
data: dataString,
});
request.done(function (data){
jQuery(".jobsearch_searchloc_div").find('.loc-loader').html('');
var results=jQuery.parseJSON(data);
predictionsDropDown.empty();
predictionsDropDown.append(google_results);
if(results!=''){
predictionsDropDown.append('<div class="address_headers"><h5>' + jobsearch_plugin_vars.var_other_locs_str + '</h5></div>');
jQuery(results).each(function (key, value){
if(value.hasOwnProperty('child')){
jQuery(value.child).each(function (child_key, child_value){
predictionsDropDown.append('<div class="jobsearch_location_child">' + child_value.value + '<span style="display:none">' + child_value.slug + '</span></div');
})
}else{
predictionsDropDown.append('<div class="jobsearch_location_parent">' + value.value + '<span style="display:none">' + value.slug + '</span></div');
}})
}
request_var=1;
});
request.fail(function (jqXHR, textStatus){
jQuery(".jobsearch_searchloc_div").find('.loc-loader').html('');
});
predictionsDropDown.show();
}
return input;
}});
}});
function updatePredictionsDropDownDisplay(dropDown, input){
if(typeof (input.offset())!=='undefined'){
dropDown.css({
'width': input.outerWidth(),
'left': input.offset().left,
'top': input.offset().top + input.outerHeight()
});
}}
}(jQuery));
jQuery('.jobsearch_search_location_field').cityAutocomplete();
jQuery(document).on('click', '.jobsearch_searchloc_div', function (){
jQuery('.jobsearch_search_location_field').prop('disabled', false);
});
jQuery(document).on('click', 'form', function (){
var src_loc_val=jQuery(this).find('.jobsearch_search_location_field');
src_loc_val.next('.loc_search_keyword').val(src_loc_val.val());
});
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
!function(t){"use strict";t.fn.countUp=function(e){var a=t.extend({time:2e3,delay:10},e);return this.each(function(){var e=t(this),n=a,u=function(){e.data("counterupTo")||e.data("counterupTo",e.text());var t=parseInt(e.data("counter-time"))>0?parseInt(e.data("counter-time")):n.time,a=parseInt(e.data("counter-delay"))>0?parseInt(e.data("counter-delay")):n.delay,u=t/a,r=e.data("counterupTo"),o=[r],c=/[0-9]+,[0-9]+/.test(r);r=r.replace(/,/g,"");for(var d=(/^[0-9]+$/.test(r),/^[0-9]+\.[0-9]+$/.test(r)),s=d?(r.split(".")[1]||[]).length:0,i=u;i>=1;i--){var p=parseInt(Math.round(r/u*i));if(d&&(p=parseFloat(r/u*i).toFixed(s)),c)for(;/(\d+)(\d{3})/.test(p.toString());)p=p.toString().replace(/(\d+)(\d{3})/,"$1,$2");o.unshift(p)}e.data("counterup-nums",o),e.text("0");var f=function(){e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),a):(delete e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null))};e.data("counterup-func",f),setTimeout(e.data("counterup-func"),a)};e.waypoint(u,{offset:"100%",triggerOnce:!0})})}}(jQuery);
(function(factory){
var intlTelInput=factory(window, document);
if(typeof module==="object"&&module.exports) module.exports=intlTelInput; else window.intlTelInput=intlTelInput;
})(function(window, document, undefined){
"use strict";
return function(){
var allCountries=[ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1684" ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1264" ], [ "Antigua and Barbuda", "ag", "1268" ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1242" ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1246" ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1441" ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1284" ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1 ], [ "Cayman Islands", "ky", "1345" ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2 ], [ "Cocos (Keeling) Islands", "cc", "61", 1 ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1767" ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1473" ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1671" ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1 ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2 ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3 ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1 ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "Macedonia (FYROM) (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1 ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1664" ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1670" ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1869" ], [ "Saint Lucia", "lc", "1758" ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1784" ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1721" ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1 ], [ "Swaziland", "sz", "268" ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1868" ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1649" ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1340" ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1 ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1 ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1 ] ];
for (var i=0; i < allCountries.length; i++){
var c=allCountries[i];
allCountries[i]={
name: c[0],
iso2: c[1],
dialCode: c[2],
priority: c[3]||0,
areaCodes: c[4]||null
};}
"use strict";
function _classCallCheck(instance, Constructor){
if(!(instance instanceof Constructor)){
throw new TypeError("Cannot call a class as a function");
}}
function _defineProperties(target, props){
for (var i=0; i < props.length; i++){
var descriptor=props[i];
descriptor.enumerable=descriptor.enumerable||false;
descriptor.configurable=true;
if("value" in descriptor) descriptor.writable=true;
Object.defineProperty(target, descriptor.key, descriptor);
}}
function _createClass(Constructor, protoProps, staticProps){
if(protoProps) _defineProperties(Constructor.prototype, protoProps);
if(staticProps) _defineProperties(Constructor, staticProps);
return Constructor;
}
window.intlTelInputGlobals={
getInstance: function getInstance(input){
var id=input.getAttribute("data-intl-tel-input-id");
return window.intlTelInputGlobals.instances[id];
},
instances: {}};
var id=0;
var defaults={
allowDropdown: true,
autoHideDialCode: true,
autoPlaceholder: "polite",
customContainer: "",
customPlaceholder: null,
dropdownContainer: null,
excludeCountries: [],
formatOnDisplay: true,
geoIpLookup: null,
hiddenInput: "",
initialCountry: "",
localizedCountries: null,
nationalMode: true,
onlyCountries: [],
placeholderNumberType: "MOBILE",
preferredCountries: [ "us", "gb" ],
separateDialCode: false,
utilsScript: ""
};
var regionlessNanpNumbers=[ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
window.addEventListener("load", function(){
window.intlTelInputGlobals.windowLoaded=true;
});
var forEachProp=function forEachProp(obj, callback){
var keys=Object.keys(obj);
for (var i=0; i < keys.length; i++){
callback(keys[i], obj[keys[i]]);
}};
var forEachInstance=function forEachInstance(method){
forEachProp(window.intlTelInputGlobals.instances, function(key){
window.intlTelInputGlobals.instances[key][method]();
});
};
var Iti=
function(){
function Iti(input, options){
var _this=this;
_classCallCheck(this, Iti);
this.id=id++;
this.telInput=input;
this.activeItem=null;
this.highlightedItem=null;
var customOptions=options||{};
this.options={};
forEachProp(defaults, function(key, value){
_this.options[key]=customOptions.hasOwnProperty(key) ? customOptions[key]:value;
});
this.hadInitialPlaceholder=Boolean(input.getAttribute("placeholder"));
}
_createClass(Iti, [ {
key: "_init",
value: function _init(){
var _this2=this;
if(this.options.nationalMode) this.options.autoHideDialCode=false;
if(this.options.separateDialCode){
this.options.autoHideDialCode=this.options.nationalMode=false;
}
this.isMobile=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if(this.isMobile){
document.body.classList.add("iti-mobile");
if(!this.options.dropdownContainer) this.options.dropdownContainer=document.body;
}
if(typeof Promise!=="undefined"){
var autoCountryPromise=new Promise(function(resolve, reject){
_this2.resolveAutoCountryPromise=resolve;
_this2.rejectAutoCountryPromise=reject;
});
var utilsScriptPromise=new Promise(function(resolve, reject){
_this2.resolveUtilsScriptPromise=resolve;
_this2.rejectUtilsScriptPromise=reject;
});
this.promise=Promise.all([ autoCountryPromise, utilsScriptPromise ]);
}else{
this.resolveAutoCountryPromise=this.rejectAutoCountryPromise=function(){};
this.resolveUtilsScriptPromise=this.rejectUtilsScriptPromise=function(){};}
this.selectedCountryData={};
this._processCountryData();
this._generateMarkup();
this._setInitialState();
this._initListeners();
this._initRequests();
}}, {
key: "_processCountryData",
value: function _processCountryData(){
this._processAllCountries();
this._processCountryCodes();
this._processPreferredCountries();
if(this.options.localizedCountries) this._translateCountriesByLocale();
if(this.options.onlyCountries.length||this.options.localizedCountries){
this.countries.sort(this._countryNameSort);
}}
}, {
key: "_addCountryCode",
value: function _addCountryCode(iso2, dialCode, priority){
if(!this.countryCodes.hasOwnProperty(dialCode)){
this.countryCodes[dialCode]=[];
}
var index=priority||0;
this.countryCodes[dialCode][index]=iso2;
}}, {
key: "_processAllCountries",
value: function _processAllCountries(){
if(this.options.onlyCountries.length){
var lowerCaseOnlyCountries=this.options.onlyCountries.map(function(country){
return country.toLowerCase();
});
this.countries=allCountries.filter(function(country){
return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
});
}else if(this.options.excludeCountries.length){
var lowerCaseExcludeCountries=this.options.excludeCountries.map(function(country){
return country.toLowerCase();
});
this.countries=allCountries.filter(function(country){
return lowerCaseExcludeCountries.indexOf(country.iso2)===-1;
});
}else{
this.countries=allCountries;
}}
}, {
key: "_translateCountriesByLocale",
value: function _translateCountriesByLocale(){
for (var i=0; i < this.countries.length; i++){
var iso=this.countries[i].iso2.toLowerCase();
if(this.options.localizedCountries.hasOwnProperty(iso)){
this.countries[i].name=this.options.localizedCountries[iso];
}}
}}, {
key: "_countryNameSort",
value: function _countryNameSort(a, b){
return a.name.localeCompare(b.name);
}}, {
key: "_processCountryCodes",
value: function _processCountryCodes(){
this.countryCodes={};
for (var i=0; i < this.countries.length; i++){
var c=this.countries[i];
this._addCountryCode(c.iso2, c.dialCode, c.priority);
if(c.areaCodes){
for (var j=0; j < c.areaCodes.length; j++){
this._addCountryCode(c.iso2, c.dialCode + c.areaCodes[j]);
}}
}}
}, {
key: "_processPreferredCountries",
value: function _processPreferredCountries(){
this.preferredCountries=[];
for (var i=0; i < this.options.preferredCountries.length; i++){
var countryCode=this.options.preferredCountries[i].toLowerCase();
var countryData=this._getCountryData(countryCode, false, true);
if(countryData) this.preferredCountries.push(countryData);
}}
}, {
key: "_createEl",
value: function _createEl(name, attrs, container){
var el=document.createElement(name);
if(attrs) forEachProp(attrs, function(key, value){
return el.setAttribute(key, value);
});
if(container) container.appendChild(el);
return el;
}}, {
key: "_generateMarkup",
value: function _generateMarkup(){
this.telInput.setAttribute("autocomplete", "off");
var parentClass="intl-tel-input";
if(this.options.allowDropdown) parentClass +=" allow-dropdown";
if(this.options.separateDialCode) parentClass +=" separate-dial-code";
if(this.options.customContainer){
parentClass +=" ";
parentClass +=this.options.customContainer;
}
var wrapper=this._createEl("div", {
"class": parentClass
});
this.telInput.parentNode.insertBefore(wrapper, this.telInput);
this.flagsContainer=this._createEl("div", {
"class": "flag-container"
}, wrapper);
wrapper.appendChild(this.telInput);
this.selectedFlag=this._createEl("div", {
"class": "selected-flag",
role: "combobox",
"aria-owns": "country-listbox"
}, this.flagsContainer);
this.selectedFlagInner=this._createEl("div", {
"class": "iti-flag"
}, this.selectedFlag);
if(this.options.separateDialCode){
this.selectedDialCode=this._createEl("div", {
"class": "selected-dial-code"
}, this.selectedFlag);
}
if(this.options.allowDropdown){
this.selectedFlag.setAttribute("tabindex", "0");
this.dropdownArrow=this._createEl("div", {
"class": "iti-arrow"
}, this.selectedFlag);
this.countryList=this._createEl("ul", {
"class": "country-list hide",
id: "country-listbox",
"aria-expanded": "false",
role: "listbox"
});
if(this.preferredCountries.length){
this._appendListItems(this.preferredCountries, "preferred");
this._createEl("li", {
"class": "divider",
role: "separator",
"aria-disabled": "true"
}, this.countryList);
}
this._appendListItems(this.countries, "standard");
if(this.options.dropdownContainer){
this.dropdown=this._createEl("div", {
"class": "intl-tel-input iti-container"
});
this.dropdown.appendChild(this.countryList);
}else{
this.flagsContainer.appendChild(this.countryList);
}}
if(this.options.hiddenInput){
var hiddenInputName=this.options.hiddenInput;
var name=this.telInput.getAttribute("name");
if(name){
var i=name.lastIndexOf("[");
if(i!==-1) hiddenInputName="".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
}
this.hiddenInput=this._createEl("input", {
type: "hidden",
name: hiddenInputName
});
wrapper.appendChild(this.hiddenInput);
}}
}, {
key: "_appendListItems",
value: function _appendListItems(countries, className){
var tmp="";
for (var i=0; i < countries.length; i++){
var c=countries[i];
tmp +="<li class='country ".concat(className, "' id='iti-item-").concat(c.iso2, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "'>");
tmp +="<div class='flag-box'><div class='iti-flag ".concat(c.iso2, "'></div></div>");
tmp +="<span class='country-name'>".concat(c.name, "</span>");
tmp +="<span class='dial-code'>+".concat(c.dialCode, "</span>");
tmp +="</li>";
}
this.countryList.insertAdjacentHTML("beforeend", tmp);
}}, {
key: "_setInitialState",
value: function _setInitialState(){
var val=this.telInput.value;
var dialCode=this._getDialCode(val);
var isRegionlessNanp=this._isRegionlessNanp(val);
var _this$options=this.options, initialCountry=_this$options.initialCountry, nationalMode=_this$options.nationalMode, autoHideDialCode=_this$options.autoHideDialCode, separateDialCode=_this$options.separateDialCode;
if(dialCode&&!isRegionlessNanp){
this._updateFlagFromNumber(val);
}else if(initialCountry!=="auto"){
if(initialCountry){
this._setFlag(initialCountry.toLowerCase());
}else{
if(dialCode&&isRegionlessNanp){
this._setFlag("us");
}else{
this.defaultCountry=this.preferredCountries.length ? this.preferredCountries[0].iso2:this.countries[0].iso2;
if(!val){
this._setFlag(this.defaultCountry);
}}
}
if(!val&&!nationalMode&&!autoHideDialCode&&!separateDialCode){
this.telInput.value="+".concat(this.selectedCountryData.dialCode);
}}
if(val) this._updateValFromNumber(val);
}}, {
key: "_initListeners",
value: function _initListeners(){
this._initKeyListeners();
if(this.options.autoHideDialCode) this._initBlurListeners();
if(this.options.allowDropdown) this._initDropdownListeners();
if(this.hiddenInput) this._initHiddenInputListener();
}}, {
key: "_initHiddenInputListener",
value: function _initHiddenInputListener(){
var _this3=this;
this._handleHiddenInputSubmit=function(){
_this3.hiddenInput.value=_this3.getNumber();
};
if(this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
}}, {
key: "_getClosestLabel",
value: function _getClosestLabel(){
var el=this.telInput;
while (el&&el.tagName!=="LABEL"){
el=el.parentNode;
}
return el;
}}, {
key: "_initDropdownListeners",
value: function _initDropdownListeners(){
var _this4=this;
this._handleLabelClick=function(e){
if(_this4.countryList.classList.contains("hide")) _this4.telInput.focus(); else e.preventDefault();
};
var label=this._getClosestLabel();
if(label) label.addEventListener("click", this._handleLabelClick);
this._handleClickSelectedFlag=function(){
if(_this4.countryList.classList.contains("hide")&&!_this4.telInput.disabled&&!_this4.telInput.readOnly){
_this4._showDropdown();
}};
this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
this._handleFlagsContainerKeydown=function(e){
var isDropdownHidden=_this4.countryList.classList.contains("hide");
if(isDropdownHidden&&[ "ArrowUp", "ArrowDown", " ", "Enter" ].indexOf(e.key)!==-1){
e.preventDefault();
e.stopPropagation();
_this4._showDropdown();
}
if(e.key==="Tab") _this4._closeDropdown();
};
this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
}}, {
key: "_initRequests",
value: function _initRequests(){
var _this5=this;
if(this.options.utilsScript&&!window.intlTelInputUtils){
if(window.intlTelInputGlobals.windowLoaded){
window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
}else{
window.addEventListener("load", function(){
window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
});
}} else this.resolveUtilsScriptPromise();
if(this.options.initialCountry==="auto") this._loadAutoCountry(); else this.resolveAutoCountryPromise();
}}, {
key: "_loadAutoCountry",
value: function _loadAutoCountry(){
if(window.intlTelInputGlobals.autoCountry){
this.handleAutoCountry();
}else if(!window.intlTelInputGlobals.startedLoadingAutoCountry){
window.intlTelInputGlobals.startedLoadingAutoCountry=true;
if(typeof this.options.geoIpLookup==="function"){
this.options.geoIpLookup(function(countryCode){
window.intlTelInputGlobals.autoCountry=countryCode.toLowerCase();
setTimeout(function(){
return forEachInstance("handleAutoCountry");
});
}, function(){
return forEachInstance("rejectAutoCountryPromise");
});
}}
}}, {
key: "_initKeyListeners",
value: function _initKeyListeners(){
var _this6=this;
this._handleKeyupEvent=function(){
if(_this6._updateFlagFromNumber(_this6.telInput.value)){
_this6._triggerCountryChange();
}};
this.telInput.addEventListener("keyup", this._handleKeyupEvent);
this._handleClipboardEvent=function(){
setTimeout(_this6._handleKeyupEvent);
};
this.telInput.addEventListener("cut", this._handleClipboardEvent);
this.telInput.addEventListener("paste", this._handleClipboardEvent);
}}, {
key: "_cap",
value: function _cap(number){
var max=this.telInput.getAttribute("maxlength");
return max&&number.length > max ? number.substr(0, max):number;
}}, {
key: "_initBlurListeners",
value: function _initBlurListeners(){
var _this7=this;
this._handleSubmitOrBlurEvent=function(){
_this7._removeEmptyDialCode();
};
if(this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
}}, {
key: "_removeEmptyDialCode",
value: function _removeEmptyDialCode(){
if(this.telInput.value.charAt(0)==="+"){
var numeric=this._getNumeric(this.telInput.value);
if(!numeric||this.selectedCountryData.dialCode===numeric){
this.telInput.value="";
}}
}}, {
key: "_getNumeric",
value: function _getNumeric(s){
return s.replace(/\D/g, "");
}}, {
key: "_trigger",
value: function _trigger(name){
var e=document.createEvent("Event");
e.initEvent(name, true, true);
this.telInput.dispatchEvent(e);
}}, {
key: "_showDropdown",
value: function _showDropdown(){
this.countryList.classList.remove("hide");
this.countryList.setAttribute("aria-expanded", "true");
this._setDropdownPosition();
if(this.activeItem){
this._highlightListItem(this.activeItem);
this._scrollTo(this.activeItem);
}
this._bindDropdownListeners();
this.dropdownArrow.classList.add("up");
this._trigger("open:countrydropdown");
}}, {
key: "_toggleClass",
value: function _toggleClass(el, className, shouldHaveClass){
if(shouldHaveClass&&!el.classList.contains(className)) el.classList.add(className); else if(!shouldHaveClass&&el.classList.contains(className)) el.classList.remove(className);
}}, {
key: "_setDropdownPosition",
value: function _setDropdownPosition(){
var _this8=this;
if(this.options.dropdownContainer){
this.options.dropdownContainer.appendChild(this.dropdown);
}
if(!this.isMobile){
var pos=this.telInput.getBoundingClientRect();
var windowTop=window.pageYOffset||document.documentElement.scrollTop;
var inputTop=pos.top + windowTop;
var dropdownHeight=this.countryList.offsetHeight;
var dropdownFitsBelow=inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
var dropdownFitsAbove=inputTop - dropdownHeight > windowTop;
this._toggleClass(this.countryList, "dropup", !dropdownFitsBelow&&dropdownFitsAbove);
if(this.options.dropdownContainer){
var extraTop = !dropdownFitsBelow&&dropdownFitsAbove ? 0:this.telInput.offsetHeight;
this.dropdown.style.top="".concat(inputTop + extraTop, "px");
this.dropdown.style.left="".concat(pos.left + document.body.scrollLeft, "px");
this._handleWindowScroll=function(){
return _this8._closeDropdown();
};
window.addEventListener("scroll", this._handleWindowScroll);
}}
}}, {
key: "_getClosestListItem",
value: function _getClosestListItem(target){
var el=target;
while (el&&el!==this.countryList&&!el.classList.contains("country")){
el=el.parentNode;
}
return el===this.countryList ? null:el;
}}, {
key: "_bindDropdownListeners",
value: function _bindDropdownListeners(){
var _this9=this;
this._handleMouseoverCountryList=function(e){
var listItem=_this9._getClosestListItem(e.target);
if(listItem) _this9._highlightListItem(listItem);
};
this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
this._handleClickCountryList=function(e){
var listItem=_this9._getClosestListItem(e.target);
if(listItem) _this9._selectListItem(listItem);
};
this.countryList.addEventListener("click", this._handleClickCountryList);
var isOpening=true;
this._handleClickOffToClose=function(){
if(!isOpening) _this9._closeDropdown();
isOpening=false;
};
document.documentElement.addEventListener("click", this._handleClickOffToClose);
var query="";
var queryTimer=null;
this._handleKeydownOnDropdown=function(e){
e.preventDefault();
if(e.key==="ArrowUp"||e.key==="ArrowDown") _this9._handleUpDownKey(e.key); else if(e.key==="Enter") _this9._handleEnterKey(); else if(e.key==="Escape") _this9._closeDropdown(); else if(/^[a-zA-ZÀ-ÿ ]$/.test(e.key)){
if(queryTimer) clearTimeout(queryTimer);
query +=e.key.toLowerCase();
_this9._searchForCountry(query);
queryTimer=setTimeout(function(){
query="";
}, 1e3);
}};
document.addEventListener("keydown", this._handleKeydownOnDropdown);
}}, {
key: "_handleUpDownKey",
value: function _handleUpDownKey(key){
var next=key==="ArrowUp" ? this.highlightedItem.previousElementSibling:this.highlightedItem.nextElementSibling;
if(next){
if(next.classList.contains("divider")){
next=key==="ArrowUp" ? next.previousElementSibling:next.nextElementSibling;
}
this._highlightListItem(next);
this._scrollTo(next);
}}
}, {
key: "_handleEnterKey",
value: function _handleEnterKey(){
if(this.highlightedItem) this._selectListItem(this.highlightedItem);
}}, {
key: "_searchForCountry",
value: function _searchForCountry(query){
for (var i=0; i < this.countries.length; i++){
if(this._startsWith(this.countries[i].name, query)){
var listItem=this.countryList.querySelector("#iti-item-".concat(this.countries[i].iso2));
this._highlightListItem(listItem);
this._scrollTo(listItem, true);
break;
}}
}}, {
key: "_startsWith",
value: function _startsWith(a, b){
return a.substr(0, b.length).toLowerCase()===b;
}}, {
key: "_updateValFromNumber",
value: function _updateValFromNumber(originalNumber){
var number=originalNumber;
if(this.options.formatOnDisplay&&window.intlTelInputUtils&&this.selectedCountryData){
var useNational = !this.options.separateDialCode&&(this.options.nationalMode||number.charAt(0)!=="+");
var _intlTelInputUtils$nu=intlTelInputUtils.numberFormat, NATIONAL=_intlTelInputUtils$nu.NATIONAL, INTERNATIONAL=_intlTelInputUtils$nu.INTERNATIONAL;
var format=useNational ? NATIONAL:INTERNATIONAL;
number=intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
}
number=this._beforeSetNumber(number);
this.telInput.value=number;
}}, {
key: "_updateFlagFromNumber",
value: function _updateFlagFromNumber(originalNumber){
var number=originalNumber;
var isNanp=this.selectedCountryData.dialCode==="1";
if(number&&this.options.nationalMode&&isNanp&&number.charAt(0)!=="+"){
if(number.charAt(0)!=="1") number="1".concat(number);
number="+".concat(number);
}
var dialCode=this._getDialCode(number);
var numeric=this._getNumeric(number);
var countryCode=null;
if(dialCode){
var countryCodes=this.countryCodes[this._getNumeric(dialCode)];
var alreadySelected=countryCodes.indexOf(this.selectedCountryData.iso2)!==-1;
var isNanpAreaCode=dialCode==="+1"&&numeric.length >=4;
var isRegionlessNanpNumber=this.selectedCountryData.dialCode==="1"&&this._isRegionlessNanp(numeric);
if(!isRegionlessNanpNumber&&(!alreadySelected||isNanpAreaCode)){
for (var j=0; j < countryCodes.length; j++){
if(countryCodes[j]){
countryCode=countryCodes[j];
break;
}}
}}else if(number.charAt(0)==="+"&&numeric.length){
countryCode="";
}else if(!number||number==="+"){
countryCode=this.defaultCountry;
}
if(countryCode!==null){
return this._setFlag(countryCode);
}
return false;
}}, {
key: "_isRegionlessNanp",
value: function _isRegionlessNanp(number){
var numeric=this._getNumeric(number);
if(numeric.charAt(0)==="1"){
var areaCode=numeric.substr(1, 3);
return regionlessNanpNumbers.indexOf(areaCode)!==-1;
}
return false;
}}, {
key: "_highlightListItem",
value: function _highlightListItem(listItem){
var prevItem=this.highlightedItem;
if(prevItem) prevItem.classList.remove("highlight");
this.highlightedItem=listItem;
this.highlightedItem.classList.add("highlight");
}}, {
key: "_getCountryData",
value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail){
var countryList=ignoreOnlyCountriesOption ? allCountries:this.countries;
for (var i=0; i < countryList.length; i++){
if(countryList[i].iso2===countryCode){
return countryList[i];
}}
if(allowFail){
return null;
}
throw new Error("No country data for '".concat(countryCode, "'"));
}}, {
key: "_setFlag",
value: function _setFlag(countryCode){
var prevCountry=this.selectedCountryData.iso2 ? this.selectedCountryData:{};
this.selectedCountryData=countryCode ? this._getCountryData(countryCode, false, false):{};
if(this.selectedCountryData.iso2){
this.defaultCountry=this.selectedCountryData.iso2;
}
this.selectedFlagInner.setAttribute("class", "iti-flag ".concat(countryCode));
var title=countryCode ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode):"Unknown";
this.selectedFlag.setAttribute("title", title);
if(this.options.separateDialCode){
var dialCode=this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode):"";
this.selectedDialCode.innerHTML=dialCode;
this.telInput.style.paddingLeft="".concat(this.selectedFlag.offsetWidth + 6, "px");
}
this._updatePlaceholder();
if(this.options.allowDropdown){
var prevItem=this.activeItem;
if(prevItem){
prevItem.classList.remove("active");
prevItem.setAttribute("aria-selected", "false");
}
if(countryCode){
var nextItem=this.countryList.querySelector("#iti-item-".concat(countryCode));
nextItem.setAttribute("aria-selected", "true");
nextItem.classList.add("active");
this.activeItem=nextItem;
this.countryList.setAttribute("aria-activedescendant", nextItem.getAttribute("id"));
}}
return prevCountry.iso2!==countryCode;
}}, {
key: "_updatePlaceholder",
value: function _updatePlaceholder(){
var shouldSetPlaceholder=this.options.autoPlaceholder==="aggressive"||!this.hadInitialPlaceholder&&this.options.autoPlaceholder==="polite";
if(window.intlTelInputUtils&&shouldSetPlaceholder){
var numberType=intlTelInputUtils.numberType[this.options.placeholderNumberType];
var placeholder=this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType):"";
placeholder=this._beforeSetNumber(placeholder);
if(typeof this.options.customPlaceholder==="function"){
placeholder=this.options.customPlaceholder(placeholder, this.selectedCountryData);
}
this.telInput.setAttribute("placeholder", placeholder);
}}
}, {
key: "_selectListItem",
value: function _selectListItem(listItem){
var flagChanged=this._setFlag(listItem.getAttribute("data-country-code"));
this._closeDropdown();
this._updateDialCode(listItem.getAttribute("data-dial-code"), true);
this.telInput.focus();
var len=this.telInput.value.length;
this.telInput.setSelectionRange(len, len);
if(flagChanged){
this._triggerCountryChange();
}}
}, {
key: "_closeDropdown",
value: function _closeDropdown(){
this.countryList.classList.add("hide");
this.countryList.setAttribute("aria-expanded", "false");
this.dropdownArrow.classList.remove("up");
document.removeEventListener("keydown", this._handleKeydownOnDropdown);
document.documentElement.removeEventListener("click", this._handleClickOffToClose);
this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
this.countryList.removeEventListener("click", this._handleClickCountryList);
if(this.options.dropdownContainer){
if(!this.isMobile) window.removeEventListener("scroll", this._handleWindowScroll);
if(this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
}
this._trigger("close:countrydropdown");
}}, {
key: "_scrollTo",
value: function _scrollTo(element, middle){
var container=this.countryList;
var windowTop=window.pageYOffset||document.documentElement.scrollTop;
var containerHeight=container.offsetHeight;
var containerTop=container.getBoundingClientRect().top + windowTop;
var containerBottom=containerTop + containerHeight;
var elementHeight=element.offsetHeight;
var elementTop=element.getBoundingClientRect().top + windowTop;
var elementBottom=elementTop + elementHeight;
var newScrollTop=elementTop - containerTop + container.scrollTop;
var middleOffset=containerHeight / 2 - elementHeight / 2;
if(elementTop < containerTop){
if(middle) newScrollTop -=middleOffset;
container.scrollTop=newScrollTop;
}else if(elementBottom > containerBottom){
if(middle) newScrollTop +=middleOffset;
var heightDifference=containerHeight - elementHeight;
container.scrollTop=newScrollTop - heightDifference;
}}
}, {
key: "_updateDialCode",
value: function _updateDialCode(newDialCodeBare, hasSelectedListItem){
var inputVal=this.telInput.value;
var newDialCode="+".concat(newDialCodeBare);
var newNumber;
if(inputVal.charAt(0)==="+"){
var prevDialCode=this._getDialCode(inputVal);
if(prevDialCode){
newNumber=inputVal.replace(prevDialCode, newDialCode);
}else{
newNumber=newDialCode;
}}else if(this.options.nationalMode||this.options.separateDialCode){
return;
}else{
if(inputVal){
newNumber=newDialCode + inputVal;
}else if(hasSelectedListItem||!this.options.autoHideDialCode){
newNumber=newDialCode;
}else{
return;
}}
this.telInput.value=newNumber;
}}, {
key: "_getDialCode",
value: function _getDialCode(number){
var dialCode="";
if(number.charAt(0)==="+"){
var numericChars="";
for (var i=0; i < number.length; i++){
var c=number.charAt(i);
if(!isNaN(parseInt(c, 10))){
numericChars +=c;
if(this.countryCodes[numericChars]){
dialCode=number.substr(0, i + 1);
}
if(numericChars.length===4){
break;
}}
}}
return dialCode;
}}, {
key: "_getFullNumber",
value: function _getFullNumber(){
var val=this.telInput.value.trim();
var dialCode=this.selectedCountryData.dialCode;
var prefix;
var numericVal=this._getNumeric(val);
var normalizedVal=numericVal.charAt(0)==="1" ? numericVal:"1".concat(numericVal);
if(this.options.separateDialCode&&val.charAt(0)!=="+"){
prefix="+".concat(dialCode);
}else if(val&&val.charAt(0)!=="+"&&val.charAt(0)!=="1"&&dialCode&&dialCode.charAt(0)==="1"&&dialCode.length===4&&dialCode!==normalizedVal.substr(0, 4)){
prefix=dialCode.substr(1);
}else{
prefix="";
}
return prefix + val;
}}, {
key: "_beforeSetNumber",
value: function _beforeSetNumber(originalNumber){
var number=originalNumber;
if(this.options.separateDialCode){
var dialCode=this._getDialCode(number);
if(dialCode){
if(this.selectedCountryData.areaCodes!==null){
dialCode="+".concat(this.selectedCountryData.dialCode);
}
var start=number[dialCode.length]===" "||number[dialCode.length]==="-" ? dialCode.length + 1:dialCode.length;
number=number.substr(start);
}}
return this._cap(number);
}}, {
key: "_triggerCountryChange",
value: function _triggerCountryChange(){
this._trigger("countrychange");
}}, {
key: "handleAutoCountry",
value: function handleAutoCountry(){
if(this.options.initialCountry==="auto"){
this.defaultCountry=window.intlTelInputGlobals.autoCountry;
if(!this.telInput.value){
this.setCountry(this.defaultCountry);
}
this.resolveAutoCountryPromise();
}}
}, {
key: "handleUtils",
value: function handleUtils(){
if(window.intlTelInputUtils){
if(this.telInput.value){
this._updateValFromNumber(this.telInput.value);
}
this._updatePlaceholder();
}
this.resolveUtilsScriptPromise();
}}, {
key: "destroy",
value: function destroy(){
var form=this.telInput.form;
if(this.options.allowDropdown){
this._closeDropdown();
this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
var label=this._getClosestLabel();
if(label) label.removeEventListener("click", this._handleLabelClick);
}
if(this.hiddenInput&&form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
if(this.options.autoHideDialCode){
if(form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
}
this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
this.telInput.removeEventListener("cut", this._handleClipboardEvent);
this.telInput.removeEventListener("paste", this._handleClipboardEvent);
this.telInput.removeAttribute("data-intl-tel-input-id");
var wrapper=this.telInput.parentNode;
wrapper.parentNode.insertBefore(this.telInput, wrapper);
wrapper.parentNode.removeChild(wrapper);
delete window.intlTelInputGlobals.instances[this.id];
}}, {
key: "getExtension",
value: function getExtension(){
if(window.intlTelInputUtils){
return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
}
return "";
}}, {
key: "getNumber",
value: function getNumber(format){
if(window.intlTelInputUtils){
var iso2=this.selectedCountryData.iso2;
return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
}
return "";
}}, {
key: "getNumberType",
value: function getNumberType(){
if(window.intlTelInputUtils){
return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
}
return -99;
}}, {
key: "getSelectedCountryData",
value: function getSelectedCountryData(){
return this.selectedCountryData;
}}, {
key: "getValidationError",
value: function getValidationError(){
if(window.intlTelInputUtils){
var iso2=this.selectedCountryData.iso2;
return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
}
return -99;
}}, {
key: "isValidNumber",
value: function isValidNumber(){
var val=this._getFullNumber().trim();
var countryCode=this.options.nationalMode ? this.selectedCountryData.iso2:"";
return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode):null;
}}, {
key: "setCountry",
value: function setCountry(originalCountryCode){
var countryCode=originalCountryCode.toLowerCase();
if(!this.selectedFlagInner.classList.contains(countryCode)){
this._setFlag(countryCode);
this._updateDialCode(this.selectedCountryData.dialCode, false);
this._triggerCountryChange();
}}
}, {
key: "setNumber",
value: function setNumber(number){
var flagChanged=this._updateFlagFromNumber(number);
this._updateValFromNumber(number);
if(flagChanged){
this._triggerCountryChange();
}}
}, {
key: "setPlaceholderNumberType",
value: function setPlaceholderNumberType(type){
this.options.placeholderNumberType=type;
this._updatePlaceholder();
}} ]);
return Iti;
}();
window.intlTelInputGlobals.getCountryData=function(){
return allCountries;
};
var injectScript=function injectScript(path, handleSuccess, handleFailure){
var script=document.createElement("script");
script.onload=function(){
forEachInstance("handleUtils");
if(handleSuccess) handleSuccess();
};
script.onerror=function(){
forEachInstance("rejectUtilsScriptPromise");
if(handleFailure) handleFailure();
};
script.className="iti-load-utils";
script.async=true;
script.src=path;
document.body.appendChild(script);
};
window.intlTelInputGlobals.loadUtils=function(path){
if(!window.intlTelInputUtils&&!window.intlTelInputGlobals.startedLoadingUtilsScript){
window.intlTelInputGlobals.startedLoadingUtilsScript=true;
if(typeof Promise!=="undefined"){
return new Promise(function(resolve, reject){
return injectScript(path, resolve, reject);
});
}
injectScript(path);
}
return null;
};
window.intlTelInputGlobals.defaults=defaults;
window.intlTelInputGlobals.version="15.0.2";
return function(input, options){
var iti=new Iti(input, options);
iti._init();
input.setAttribute("data-intl-tel-input-id", iti.id);
window.intlTelInputGlobals.instances[iti.id]=iti;
return iti;
};}();
});