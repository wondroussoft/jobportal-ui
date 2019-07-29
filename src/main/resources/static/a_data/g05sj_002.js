window.wp=window.wp||{},function(a){wp.passwordStrength={meter:function(b,c,d){if(a.isArray(c)||(c=[c.toString()]),b!=d&&d&&d.length>0)return 5;if("undefined"==typeof window.zxcvbn)return-1;var e=zxcvbn(b,c);return e.score},userInputBlacklist:function(){var b,c,d,e,f=[],g=[],h=["user_login","first_name","last_name","nickname","display_name","email","url","description","weblog_title","admin_email"];for(f.push(document.title),f.push(document.URL),c=h.length,b=0;b<c;b++)e=a("#"+h[b]),0!==e.length&&(f.push(e[0].defaultValue),f.push(e.val()));for(d=f.length,b=0;b<d;b++)f[b]&&(g=g.concat(f[b].replace(/\W/g," ").split(" ")));return g=a.grep(g,function(b,c){return!(""===b||4>b.length)&&a.inArray(b,g)===c})}},window.passwordStrength=wp.passwordStrength.meter}(jQuery);
var $=jQuery;
$(document).ready(function (){
if(jQuery('.fancybox').length > 0){
jQuery(".fancybox").fancybox({
openEffect: 'elastic',
closeEffect: 'elastic',
});
}
if(jQuery('.fancybox-video').length > 0){
jQuery('.fancybox-video').fancybox({
maxWidth: 800,
maxHeight: 600,
fitToView: false,
width: '70%',
height: '70%',
autoSize: false,
closeClick: false,
openEffect: 'none',
closeEffect: 'none'
});
}
if(jQuery('.jobsearch_progressbar1').length > 0){
jQuery('.jobsearch_progressbar1').progressBar({
percentage: false,
backgroundColor: "#dbdbdb",
barColor: jobsearch_plugin_vars.careerfy_theme_color,
animation: true,
height: "6",
});
}
jQuery('.selectize-select').selectize({
plugins: ['remove_button'],
});
jQuery('.sort-records-per-page').selectize({
allowEmptyOption: true,
});
});
(function ($){
$.fn.jobsearch_seliz_req_field_loop=function (callback, thisArg){
var me=this;
return this.each(function (index, element){
return callback.call(thisArg||element, element, index, me);
});
};})(jQuery);
function jobsearch_validate_seliz_req_form(that){
var req_class='selectize-req-field',
_this_form=jQuery(that),
form_validity='valid';
var errors_counter=1;
_this_form.find('select.' + req_class).jobsearch_seliz_req_field_loop(function (element, index, set){
var ret_err='0';
if(jQuery(element).val()==''){
form_validity='invalid';
ret_err='1';
}else{
jQuery(element).parents('.jobsearch-profile-select').css({"border": "none"});
}
if(ret_err=='1'){
jQuery(element).parents('.jobsearch-profile-select').css({"border": "1px solid #ff0000"});
var animate_to=jQuery(element).parents('.jobsearch-profile-select');
if(errors_counter==1){
jQuery('html, body').animate({scrollTop: animate_to.offset().top - 70}, 1000);
}
errors_counter++;
}});
if(form_validity=='valid'){
return true;
}else{
return false;
}}
function jobsearch_validate_cprofile_req_form(that){
var req_class='jobsearch-cpreq-field',
_this_form=jQuery(that),
form_validity='valid';
var errors_counter=1;
_this_form.find('.' + req_class).jobsearch_seliz_req_field_loop(function (element, index, set){
var ret_err='0';
if(jQuery(element).val()==''){
form_validity='invalid';
ret_err='1';
}else{
jQuery(element).css({"border": "1px solid #eceeef"});
}
if(ret_err=='1'){
jQuery(element).css({"border": "1px solid #ff0000"});
var animate_to=jQuery(element);
if(errors_counter==1){
jQuery('html, body').animate({scrollTop: animate_to.offset().top - 70}, 1000);
}
errors_counter++;
}});
if(form_validity=='valid'){
return true;
}else{
return false;
}}
function jobsearch_cusfield_validate_attach_field(con_form){
var att_error=0;
var attach_file=con_form.find('input[type="file"]');
jQuery(attach_file).each(function (elem, index){
var _this_file=jQuery(this);
if(_this_file.val()==''&&_this_file.hasClass('jobsearch-cusfieldatt-req')){
att_error=1;
_this_file.parent('.jobsearch-fileUpload').css({"border": "1px solid #ff0000"});
}else{
_this_file.parent('.jobsearch-fileUpload').css({"border": "none"});
}
if(att_error==1){
jQuery('html, body').animate({scrollTop: _this_file.parent('.jobsearch-fileUpload').offset().top - 130}, 1000);
return false;
}});
if(att_error==0){
return true;
}else{
return false;
}}
var jobsearch_custm_getJSON=function (url, callback){
var xhr=new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType='json';
xhr.onload=function (){
var status=xhr.status;
if(status===200){
callback(null, xhr.response);
}else{
callback(status, xhr.response);
}};
xhr.send();
};
jQuery(document).on('submit', 'form#employer-profilesetings-form', function (){
var phone_field=jQuery(this).find('input[name="user_phone"]');
if(phone_field.hasClass('phone-input-error')){
jQuery('html, body').animate({scrollTop: phone_field.offset().top - 130}, 1000);
return false;
}
var $uplod_file_ret=jobsearch_cusfield_validate_attach_field(jQuery(this));
if($uplod_file_ret==false){
return false;
}
var fields_1=jobsearch_validate_cprofile_req_form(jQuery(this));
if(!fields_1){
return false;
}
var fields_2=jobsearch_validate_seliz_req_form(jQuery(this));
if(!fields_2){
return false;
}});
jQuery(document).on('submit', 'form#candidate-profilesetings-form', function (){
var phone_field=jQuery(this).find('input[name="user_phone"]');
if(phone_field.hasClass('phone-input-error')){
jQuery('html, body').animate({scrollTop: phone_field.offset().top - 130}, 1000);
return false;
}
var $uplod_file_ret=jobsearch_cusfield_validate_attach_field(jQuery(this));
if($uplod_file_ret==false){
return false;
}
var fields_1=jobsearch_validate_cprofile_req_form(jQuery(this));
if(!fields_1){
return false;
}
var fields_2=jobsearch_validate_seliz_req_form(jQuery(this));
if(!fields_2){
return false;
}});
jQuery(function (){
if(jQuery('.jobsearch-tooltipcon').length > 0){
jQuery('.jobsearch-tooltipcon').tooltip();
}});
jQuery(document).on('click', '.jobsearch-activcode-popupbtn', function (){
jQuery('.jobsearch-modal').removeClass('fade-in').addClass('fade');
jQuery('body').removeClass('jobsearch-modal-active');
jobsearch_modal_popup_open('JobSearchModalAccountActivationForm');
});
jQuery(document).on('click', '.user-activeacc-submit-btn', function (e){
e.preventDefault();
var this_form=jQuery('#jobsearch_uaccont_aprov_form');
var this_loader=this_form.find('.loader-box');
var this_msg_con=this_form.find('.message-opbox');
var activ_code=this_form.find('input[name="activ_code"]');
var user_email=this_form.find('input[name="user_email"]');
var error=0;
if(activ_code.val()==''){
error=1;
activ_code.css({"border": "1px solid #ff0000"});
}else{
activ_code.css({"border": "1px solid #d3dade"});
}
if(error==0){
this_msg_con.hide();
this_loader.html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
active_code: activ_code.val(),
user_email: user_email.val(),
action: 'jobsearch_activememb_accont_by_activation_url',
},
dataType: "json"
});
request.done(function (response){
var msg_before='';
var msg_after='';
if(typeof response.error!=='undefined'){
if(response.error=='1'){
msg_before='<div class="alert alert-danger"><i class="fa fa-times"></i> ';
msg_after='</div>';
}else if(response.error=='0'){
msg_before='<div class="alert alert-success"><i class="fa fa-check"></i> ';
msg_after='</div>';
}}
if(typeof response.msg!=='undefined'){
this_msg_con.html(msg_before + response.msg + msg_after);
this_msg_con.slideDown();
if(typeof response.error!=='undefined'&&response.error=='0'){
this_form.find('ul.email-fields-list').slideUp();
}}else{
this_msg_con.html(jobsearch_plugin_vars.error_msg);
}
this_loader.html('');
});
request.fail(function (jqXHR, textStatus){
this_loader.html(jobsearch_plugin_vars.error_msg);
});
}});
jQuery(document).on('click', '.jobsearch-candidatesh-opopupbtn', function (){
var _this_id=jQuery(this).attr('data-id');
jobsearch_modal_popup_open('JobSearchModalCandShPopup' + _this_id);
});
jQuery(document).on('click', '.div-to-scroll', function (){
var trag_todiv=jQuery(this).attr('data-target');
jQuery('html, body').animate({
scrollTop: jQuery('#' + trag_todiv).offset().top - 200
}, 1000);
});
var location_box=jQuery('input.srch_autogeo_location');
function JobsearchGetClientLocation(){
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(JobsearchShowClientPosition);
}else{
console.log("Geolocation is not supported by this browser.");
}}
function JobsearchShowClientPosition(position){
var lat=position.coords.latitude;
var lng=position.coords.longitude;
if(lat!=''&&lng!=''){
var location_ajax_box=jQuery('.jobsearch_searchloc_div .jobsearch_search_location_field');
var pos={
lat: lat,
lng: lng
};
var dataString="lat=" + pos.lat + "&lng=" + pos.lng + "&action=jobsearch_get_location_with_latlng";
jQuery.ajax({
type: "POST",
url: jobsearch_plugin_vars.ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(location_box.length > 0){
location_box.val(response.address);
}
if(location_ajax_box.length > 0){
location_ajax_box.val(response.address);
}}
});
}}
jQuery(document).ready(function (){
if(location_box.length > 0){
JobsearchGetClientLocation();
}});
jQuery(document).on('submit', 'form', function (er){
var this_form=jQuery(this);
if(this_form.find('input[type="checkbox"][name="terms_cond_check"]').length > 0){
var checkbox=this_form.find('input[type="checkbox"][name="terms_cond_check"]');
if(!checkbox.is(":checked")){
er.preventDefault();
alert(jobsearch_plugin_vars.accpt_terms_cond);
return false;
}}
});
function jobsearch_accept_terms_cond_pop(this_form){
if(this_form.find('input[type="checkbox"][name="terms_cond_check"]').length > 0){
var checkbox=this_form.find('input[type="checkbox"][name="terms_cond_check"]');
if(!checkbox.is(":checked")){
alert(jobsearch_plugin_vars.accpt_terms_cond);
return 'no';
}}
return 'yes';
}
jQuery('#user-sector').find('option').first().val('');
jQuery('#user-sector').attr('placeholder', jobsearch_plugin_vars.select_sector);
jQuery('#job-sector').attr('placeholder', jobsearch_plugin_vars.select_sector);
$(window).on('load', function (){
});
jQuery(document).on('click', '.show-toggle-filter-list', function (){
var _this=jQuery(this);
var more_txt=jobsearch_plugin_vars.see_more_txt;
var less_txt=jobsearch_plugin_vars.see_less_txt;
if(_this.hasClass('jobsearch-loadmore-locations')){
var this_loader=_this.find('.loc-filter-loder');
var this_appender=_this.parent('.jobsearch-checkbox-toggle').find('>ul');
var this_pnm=parseInt(_this.attr('data-pnum'));
var this_tpgs=parseInt(_this.attr('data-tpgs'));
var this_ptye=_this.attr('data-ptype');
var this_rid=_this.attr('data-rid');
var this_cousw=_this.attr('data-cousw');
var q_args_json=jQuery('input[name="loc_count_qargs_' + this_rid + '"]').val();
var to_action='jobsearch_load_more_filter_locs_to_list';
if(typeof this_ptye!=='undefined'&&this_ptye=='employer'){
to_action='jobsearch_load_more_filter_emp_locs_to_list';
}
this_loader.html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
page_num: this_pnm,
t_pgs: this_tpgs,
param_rid: this_rid,
q_agrs: q_args_json,
param_cousw: this_cousw,
action: to_action,
},
dataType: "json"
});
request.done(function (response){
if(typeof response.list!=='undefined'&&response.list!=''){
this_appender.append(response.list);
if(this_pnm < this_tpgs){
_this.attr('data-pnum', (this_pnm + 1));
}else{
_this.remove();
}}
this_loader.html('');
});
request.fail(function (jqXHR, textStatus){
this_loader.html('');
});
return false;
}
var etarget=_this.prev('ul').find('li.filter-more-fields');
if(etarget.hasClass('f_showing')){
etarget.hide();
_this.html(more_txt);
etarget.removeClass('f_showing');
}else{
etarget.show();
_this.html(less_txt);
etarget.addClass('f_showing');
}});
function jobsearch_modal_popup_open(target){
jQuery('#' + target).removeClass('fade').addClass('fade-in');
jQuery('body').addClass('jobsearch-modal-active');
}
jQuery(document).on('click', '.jobsearch-modal .modal-close', function (){
jQuery('.jobsearch-modal').removeClass('fade-in').addClass('fade');
jQuery('body').removeClass('jobsearch-modal-active');
});
jQuery('.modal-content-area').on('click', function (e){
if(e.target!==e.currentTarget)
return;
jQuery('.jobsearch-modal').removeClass('fade-in').addClass('fade');
jQuery('body').removeClass('jobsearch-modal-active');
});
jQuery(document).on('click', '.jobsearch-open-signin-tab', function (){
var _this=jQuery(this);
jobsearch_modal_popup_open('JobSearchModalLogin');
jQuery('.reg-tologin-btn').trigger('click');
var login_form=jQuery('#JobSearchModalLogin').find('form[id^="login-form-"]');
if(_this.hasClass('jobsearch-wredirct-url')){
var wredirct_url=_this.attr('data-wredircto');
var redrct_hiden_field=login_form.find('input[name="jobsearch_wredirct_url"]');
if(redrct_hiden_field.length > 0){
redrct_hiden_field.remove();
}
login_form.append('<input type="hidden" name="jobsearch_wredirct_url" value="' + wredirct_url + '">');
}else{
var redrct_hiden_field=login_form.find('input[name="jobsearch_wredirct_url"]');
if(redrct_hiden_field.length > 0){
redrct_hiden_field.remove();
}}
if(_this.hasClass('jobsearch-pkg-bouybtn')){
var extra_login_info=[];
var this_pkg_id=_this.attr('data-id');
extra_login_info.push('buying_pkg');
extra_login_info.push(this_pkg_id);
if(typeof _this.attr('data-pinfo')!=='undefined'&&_this.attr('data-pinfo')!=''){
extra_login_info.push(_this.attr('data-pinfo'));
}
extra_login_info=extra_login_info.join('|');
var pkginfo_hiden_field=login_form.find('input[name="extra_login_params"]');
if(pkginfo_hiden_field.length > 0){
pkginfo_hiden_field.remove();
}
login_form.append('<input type="hidden" name="extra_login_params" value="' + extra_login_info + '">');
}else{
var pkginfo_hiden_field=login_form.find('input[name="extra_login_params"]');
if(pkginfo_hiden_field.length > 0){
pkginfo_hiden_field.remove();
}}
});
jQuery(document).on('click', '.jobsearch-open-register-tab', function (){
var _this=jQuery(this);
jobsearch_modal_popup_open('JobSearchModalLogin');
jQuery('.register-form').trigger('click');
var login_form=jQuery('#JobSearchModalLogin').find('form[id^="login-form-"]');
var redrct_hiden_field=login_form.find('input[name="jobsearch_wredirct_url"]');
if(redrct_hiden_field.length > 0){
redrct_hiden_field.remove();
}
var pkginfo_hiden_field=login_form.find('input[name="extra_login_params"]');
if(pkginfo_hiden_field.length > 0){
pkginfo_hiden_field.remove();
}});
jQuery(document).on('click', '.jobsearch-send-email-popup-btn', function (){
jobsearch_modal_popup_open('JobSearchSendEmailModal');
});
jQuery(document).on('click', '.jobsearch-add-resume-to-list', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var download_cv=_this.attr('data-download');
var this_loader=jQuery(this).next('.resume-loding-msg');
this_loader.html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
candidate_id: this_id,
download_cv: download_cv,
action: 'jobsearch_add_employer_resume_to_list',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.error!=='undefined'&&response.error=='1'){
this_loader.html(response.msg);
return false;
}
if(typeof response.dbn!=='undefined'&&response.dbn!=''){
_this.hide();
_this.parent('.shortlisting-user-btn').hide();
_this.parent('.shortlisting-user-btn').html(response.dbn).slideDown();
return false;
}
if(typeof response.msg!=='undefined'&&response.msg!=''){
this_loader.html(response.msg);
_this.html('<i class="jobsearch-icon jobsearch-add-list"></i> ' + jobsearch_plugin_vars.shortlisted_str);
_this.removeClass('jobsearch-add-resume-to-list');
}});
request.fail(function (jqXHR, textStatus){
this_loader.html(jobsearch_plugin_vars.error_msg);
});
});
jQuery(document).on('click', '.jobsearch-svcand-withtyp-tolist', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var this_loader=jQuery(this).next('.resume-loding-msg');
var type_selected=_this.parents('#usercand-shrtlistsecs-' + this_id).find('select[name^="shrtlist_type"]').val();
this_loader.html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
candidate_id: this_id,
type_selected: type_selected,
action: 'jobsearch_add_employer_resume_to_list',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.error!=='undefined'&&response.error=='1'){
this_loader.html(response.msg);
return false;
}
if(typeof response.msg!=='undefined'&&response.msg!=''){
this_loader.html(response.msg);
_this.html('<i class="jobsearch-icon jobsearch-add-list"></i> ' + jobsearch_plugin_vars.shortlisted_str);
_this.removeClass('jobsearch-svcand-withtyp-tolist');
window.location.reload(true);
}});
request.fail(function (jqXHR, textStatus){
this_loader.html(jobsearch_plugin_vars.error_msg);
});
});
$(document).on('click', '.jobsearch-candidate-ct-form', function (e){
e.preventDefault();
var this_id=$(this).data('id'),
msg_form=$('#ct-form-' + this_id),
ajax_url=jobsearch_plugin_vars.ajax_url,
msg_con=msg_form.find('.jobsearch-ct-msg'),
msg_name=msg_form.find('input[name="u_name"]'),
msg_email=msg_form.find('input[name="u_email"]'),
msg_phone=msg_form.find('input[name="u_number"]'),
msg_txt=msg_form.find('textarea[name="u_msg"]'),
user_id=msg_form.attr('data-uid'),
error=0;
var cand_ser_form=$('#ct-form-' + this_id)[0];
var get_terr_val=jobsearch_accept_terms_cond_pop(msg_form);
if(get_terr_val!='yes'){
return false;
}
if(msg_form.find('.jobsearch-open-signin-tab').length > 0){
msg_form.find('.jobsearch-open-signin-tab').trigger('click');
return false;
}
var email_pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/i);
if(msg_name.val()==''){
error=1;
msg_name.css({"border": "1px solid #ff0000"});
}else{
msg_name.css({"border": "1px solid #efefef"});
}
if(msg_email.val()==''){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
if(!email_pattern.test(msg_email.val())){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
msg_email.css({"border": "1px solid #efefef"});
}}
if(msg_txt.val()==''){
error=1;
msg_txt.css({"border": "1px solid #ff0000"});
}else{
msg_txt.css({"border": "1px solid #efefef"});
}
if(error==0){
var formData=new FormData(cand_ser_form);
formData.append("u_candidate_id", user_id);
formData.append("action", 'jobsearch_candidate_contact_form_submit');
msg_con.html('<em class="fa fa-refresh fa-spin"></em>');
msg_con.show();
var request=$.ajax({
url: ajax_url,
method: "POST",
processData: false,
contentType: false,
data: formData,
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'){
msg_name.val('');
msg_email.val('');
msg_phone.val('');
msg_txt.val('');
msg_con.html(response.msg);
}else{
msg_con.html(jobsearch_plugin_vars.error_msg);
}});
request.fail(function (jqXHR, textStatus){
msg_con.html(jobsearch_plugin_vars.error_msg);
});
}
return false;
});
$(document).on('click', '.jobsearch-employer-ct-form', function (e){
e.preventDefault();
var this_id=$(this).data('id'),
msg_form=$('#ct-form-' + this_id),
ajax_url=jobsearch_plugin_vars.ajax_url,
msg_con=msg_form.find('.jobsearch-ct-msg'),
msg_name=msg_form.find('input[name="u_name"]'),
msg_email=msg_form.find('input[name="u_email"]'),
msg_phone=msg_form.find('input[name="u_number"]'),
msg_txt=msg_form.find('textarea[name="u_msg"]'),
user_id=msg_form.attr('data-uid'),
error=0;
var emp_ser_form=$('#ct-form-' + this_id)[0];
var get_terr_val=jobsearch_accept_terms_cond_pop(msg_form);
if(get_terr_val!='yes'){
return false;
}
if(msg_form.find('.jobsearch-open-signin-tab').length > 0){
msg_form.find('.jobsearch-open-signin-tab').trigger('click');
return false;
}
var email_pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/i);
if(msg_name.val()==''){
error=1;
msg_name.css({"border": "1px solid #ff0000"});
}else{
msg_name.css({"border": "1px solid #efefef"});
}
if(msg_email.val()==''){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
if(!email_pattern.test(msg_email.val())){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
msg_email.css({"border": "1px solid #efefef"});
}}
if(msg_txt.val()==''){
error=1;
msg_txt.css({"border": "1px solid #ff0000"});
}else{
msg_txt.css({"border": "1px solid #efefef"});
}
if(error==0){
var formData=new FormData(emp_ser_form);
formData.append("u_employer_id", user_id);
formData.append("action", 'jobsearch_employer_contact_form_submit');
msg_con.html('<em class="fa fa-refresh fa-spin"></em>');
msg_con.show();
var request=$.ajax({
url: ajax_url,
method: "POST",
processData: false,
contentType: false,
data: formData,
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'){
msg_name.val('');
msg_email.val('');
msg_phone.val('');
msg_txt.val('');
msg_con.html(response.msg);
}else{
msg_con.html(jobsearch_plugin_vars.error_msg);
}});
request.fail(function (jqXHR, textStatus){
msg_con.html(jobsearch_plugin_vars.error_msg);
});
}
return false;
});
jQuery(document).on('click', '.send-job-email-btn', function (){
jQuery('form#jobsearch_send_to_email_form').submit();
});
jQuery('form#jobsearch_send_to_email_form').on('submit', function (e){
e.preventDefault();
var _form=jQuery(this);
var submit_btn=_form.find('.send-job-email-btn');
var msg_con=_form.find('.send-email-msg-box');
var loader_con=_form.find('.send-email-loader-box');
var uemail=_form.find('input[name="send_email_to"]');
var usubject=_form.find('input[name="send_email_subject"]');
var msg=_form.find('textarea[name="send_email_content"]');
var form_data=_form.serialize();
var get_terr_val=jobsearch_accept_terms_cond_pop(_form);
if(get_terr_val!='yes'){
return false;
}
var email_pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/i);
var e_error=0;
if(msg.val()==''){
msg.css({"border": "1px solid #ff0000"});
e_error=1;
}
if(uemail.val()==''||!email_pattern.test(uemail.val())){
uemail.css({"border": "1px solid #ff0000"});
e_error=1;
}
if(usubject.val()==''){
usubject.css({"border": "1px solid #ff0000"});
e_error=1;
}
if(e_error==1){
return false;
}
if(!submit_btn.hasClass('jobsearch-loading')){
msg.css({"border": "1px solid #eceeef"});
uemail.css({"border": "1px solid #eceeef"});
usubject.css({"border": "1px solid #eceeef"});
submit_btn.addClass('jobsearch-loading');
msg_con.hide();
loader_con.show();
loader_con.html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: form_data,
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.msg&&response.msg!=''){
msg_con.html(response.msg);
msg_con.slideDown();
}
if('undefined'!==typeof response.error&&response.error=='1'){
msg_con.removeClass('alert-success').addClass('alert-danger');
}else{
msg_con.removeClass('alert-danger').addClass('alert-success');
}
submit_btn.removeClass('jobsearch-loading');
loader_con.hide();
loader_con.html('');
});
request.fail(function (jqXHR, textStatus){
submit_btn.removeClass('jobsearch-loading');
loader_con.hide();
loader_con.html('');
});
}
return false;
});
function jobsearchReplaceAll(str, find, replace){
return str.replace(new RegExp(find, 'g'), replace);
}
jQuery(document).on('click', '.jobsearch-applyjob-fb-btn', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var this_loader=_this.find('i');
var this_msg_con=_this.parents('ul').next('.apply-msg');
this_loader.attr('class', 'fa fa-refresh fa-spin');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
job_id: this_id,
action: 'jobsearch_applying_job_with_facebook',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'&&response.msg!=''){
this_loader.attr('class', 'jobsearch-icon jobsearch-facebook-logo-1');
this_msg_con.html(response.msg);
this_msg_con.show();
return false;
}
if(typeof response.redirect_url!=='undefined'&&response.redirect_url!=''){
var red_url=jobsearchReplaceAll(response.redirect_url, '#038;', '');
window.location.href=red_url;
}else{
this_loader.attr('class', 'jobsearch-icon jobsearch-facebook-logo-1');
}});
request.fail(function (jqXHR, textStatus){
this_loader.attr('class', 'jobsearch-icon jobsearch-facebook-logo-1');
});
});
jQuery(document).on('click', '.jobsearch-applyjob-linkedin-btn', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var this_loader=_this.find('i');
var this_msg_con=_this.parents('ul').next('.apply-msg');
this_loader.attr('class', 'fa fa-refresh fa-spin');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
job_id: this_id,
action: 'jobsearch_applying_job_with_linkedin',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'&&response.msg!=''){
this_loader.attr('class', 'jobsearch-icon jobsearch-linkedin-logo');
this_msg_con.html(response.msg);
this_msg_con.show();
return false;
}
if(typeof response.redirect_url!=='undefined'&&response.redirect_url!=''){
var red_url=jobsearchReplaceAll(response.redirect_url, '#038;', '');
window.location.href=red_url;
}else{
this_loader.attr('class', 'jobsearch-icon jobsearch-linkedin-logo');
}});
request.fail(function (jqXHR, textStatus){
this_loader.attr('class', 'jobsearch-icon jobsearch-linkedin-logo');
});
});
jQuery(document).on('click', '.jobsearch-applyjob-google-btn', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var this_loader=_this.find('i');
var this_msg_con=_this.parents('ul').next('.apply-msg');
this_loader.attr('class', 'fa fa-refresh fa-spin');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
job_id: this_id,
action: 'jobsearch_applying_job_with_google',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'&&response.msg!=''){
this_loader.attr('class', 'fa fa-google-plus');
this_msg_con.html(response.msg);
this_msg_con.show();
return false;
}
if(typeof response.redirect_url!=='undefined'&&response.redirect_url!=''){
var red_url=jobsearchReplaceAll(response.redirect_url, '#038;', '');
window.location.href=red_url;
}else{
this_loader.attr('class', 'fa fa-google-plus');
}});
request.fail(function (jqXHR, textStatus){
this_loader.attr('class', 'fa fa-google-plus');
});
});
jQuery(document).on('click', '.employer-access-btn', function (){
jQuery('.employer-access-msg').slideDown();
});
jQuery(document).on('click', '.jobsearch-open-dloadres-popup', function (){
jobsearch_modal_popup_open('JobSearchDLoadResModal');
});
jQuery(window).on('load', function (){
if(jQuery('.grid').length > 0&&jQuery('.grid-item').length > 0){
jQuery('.grid').isotope({
itemSelector: '.grid-item',
percentPosition: true,
masonry: {
fitWidth: false
}});
}});
jQuery('.location_location1').on('change', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
nextfieldelement=jQuery(this).data('nextfieldelement'),
nextfieldval=jQuery(this).data('nextfieldval'),
ajax_url=jobsearch_plugin_vars.ajax_url,
location_location1=jQuery('#location_location1_' + this_id),
location_location2=jQuery('#location_location2_' + this_id);
jQuery('.location_location2_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
location_location: location_location1.val(),
nextfieldelement: nextfieldelement,
nextfieldval: nextfieldval,
action: 'jobsearch_location_load_location2_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
location_location2.html(response.html);
jQuery('.location_location2_' + this_id).html('');
if(nextfieldval!=''){
jQuery('.location_location2').trigger('change');
}}
});
request.fail(function (jqXHR, textStatus){
});
return false;
});
jQuery('.location_location2').on('change', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
nextfieldelement=jQuery(this).data('nextfieldelement'),
nextfieldval=jQuery(this).data('nextfieldval'),
ajax_url=jobsearch_plugin_vars.ajax_url,
location_location2=jQuery('#location_location2_' + this_id),
location_location3=jQuery('#location_location3_' + this_id);
jQuery('.location_location3_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
location_location: location_location2.val(),
nextfieldelement: nextfieldelement,
nextfieldval: nextfieldval,
action: 'jobsearch_location_load_location2_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
location_location3.html(response.html);
jQuery('.location_location3_' + this_id).html('');
if(nextfieldval!=''){
jQuery('.location_location3').trigger('change');
}}
});
request.fail(function (jqXHR, textStatus){
});
return false;
});
jQuery('.location_location3').on('change', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
nextfieldelement=jQuery(this).data('nextfieldelement'),
nextfieldval=jQuery(this).data('nextfieldval'),
ajax_url=jobsearch_plugin_vars.ajax_url,
location_location3=jQuery('#location_location3_' + this_id),
location_location4=jQuery('#location_location4_' + this_id);
jQuery('.location_location4_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
location_location: location_location3.val(),
nextfieldelement: nextfieldelement,
nextfieldval: nextfieldval,
action: 'jobsearch_location_load_location2_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
location_location4.html(response.html);
jQuery('.location_location4_' + this_id).html('');
}});
request.fail(function (jqXHR, textStatus){
});
return false;
});
jQuery('.location_location1_ccus').on('change', function (e){
e.preventDefault();
var this_id=jQuery(this).attr('data-randid'),
nextfieldelement=jQuery(this).attr('data-nextfieldelement'),
nextfieldval=jQuery(this).attr('data-nextfieldval'),
ajax_url=jobsearch_plugin_vars.ajax_url,
location_location1=jQuery('#location_location1_' + this_id),
location_location2=jQuery('#location_location2_cus_' + this_id);
jQuery('.location_location2_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
randid: this_id,
location_location: location_location1.val(),
nextfieldelement: nextfieldelement,
nextfieldval: nextfieldval,
action: 'jobsearch_location_load_cusloc2_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
location_location2.html(response.html);
location_location2.find('select').selectize();
jQuery('.location_location2_' + this_id).html('');
if(nextfieldval!=''){
jQuery('.location_location2').trigger('change');
}}
});
request.fail(function (jqXHR, textStatus){
});
return false;
});
if(jQuery('.jobsearch-employer-list .jobsearch-table-layer').length > 0){
jQuery(document).on('click', '.jobsearch-employer-list .jobsearch-table-layer', function (event){
var _this=jQuery(this);
var this_target=jQuery(event.target);
if(this_target.is('a')||this_target.parent('a').length > 0){
}else{
var dest_go_to=_this.find('h2 > a');
window.location.replace(dest_go_to.attr('href'));
}});
}
if(jQuery('.careerfy-employer-grid .careerfy-employer-grid-wrap').length > 0){
jQuery(document).on('click', '.careerfy-employer-grid .careerfy-employer-grid-wrap', function (event){
var _this=jQuery(this);
var this_target=jQuery(event.target);
if(this_target.is('a')||this_target.parent('a').length > 0){
}else{
var dest_go_to=_this.find('h2 > a');
window.location.replace(dest_go_to.attr('href'));
}});
}
$(document).ready(function (){
if(window.location.hash!=='undefined'&&window.location.hash=='#_=_'){
window.location.hash='';
history.pushState('', document.title, window.location.pathname);
e.preventDefault();
}});
$(document).on('keyup', '.jobsearch_chk_passfield', function (){
var _this=jQuery(this);
var parent_form=_this.parents('form');
var _this_classes='jobsearch_chk_passfield';
var chk_msg_con=_this.next('.passlenth-chk-msg');
var chkmsg_con_classes='passlenth-chk-msg';
var pass_val=_this.val();
var short_pass_msg=jobsearch_plugin_vars.pass_length_short;
var bad_pass_msg=jobsearch_plugin_vars.pass_length_med;
var good_pass_msg=jobsearch_plugin_vars.pass_length_good;
var strong_pass_msg=jobsearch_plugin_vars.pass_length_strng;
if(pass_val==''){
chk_msg_con.css({display: 'none'});
chk_msg_con.attr('class', chkmsg_con_classes);
chk_msg_con.html('');
_this.attr('class', _this_classes);
if(!parent_form.find('.jobsearch-regpass-frmbtn').hasClass('jobsearch-disable-btn')){
parent_form.find('.jobsearch-regpass-frmbtn').addClass('jobsearch-disable-btn');
}
parent_form.find('.jobsearch-regpass-frmbtn').prop('disabled', true);
return false;
}
var pass_strength=wp.passwordStrength.meter(pass_val, wp.passwordStrength.userInputBlacklist());
switch (pass_strength){
case 0 :
chk_msg_con.css({display: 'inline-block'});
chk_msg_con.attr('class', chkmsg_con_classes + ' jobsearch-vweakpass');
_this.attr('class', _this_classes + ' jobsearch-vweakpass');
chk_msg_con.html(short_pass_msg);
if(!parent_form.find('.jobsearch-regpass-frmbtn').hasClass('jobsearch-disable-btn')){
parent_form.find('.jobsearch-regpass-frmbtn').addClass('jobsearch-disable-btn');
}
parent_form.find('.jobsearch-regpass-frmbtn').prop('disabled', true);
break;
case 1 :
chk_msg_con.css({display: 'inline-block'});
chk_msg_con.attr('class', chkmsg_con_classes + ' jobsearch-weakpass');
_this.attr('class', _this_classes + ' jobsearch-weakpass');
chk_msg_con.html(bad_pass_msg);
if(!parent_form.find('.jobsearch-regpass-frmbtn').hasClass('jobsearch-disable-btn')){
parent_form.find('.jobsearch-regpass-frmbtn').addClass('jobsearch-disable-btn');
}
parent_form.find('.jobsearch-regpass-frmbtn').prop('disabled', true);
break;
case 2 :
chk_msg_con.css({display: 'inline-block'});
chk_msg_con.attr('class', chkmsg_con_classes + ' jobsearch-weakpass');
_this.attr('class', _this_classes + ' jobsearch-weakpass');
chk_msg_con.html(bad_pass_msg);
if(!parent_form.find('.jobsearch-regpass-frmbtn').hasClass('jobsearch-disable-btn')){
parent_form.find('.jobsearch-regpass-frmbtn').addClass('jobsearch-disable-btn');
}
parent_form.find('.jobsearch-regpass-frmbtn').prop('disabled', true);
break;
case 3 :
chk_msg_con.css({display: 'inline-block'});
chk_msg_con.attr('class', chkmsg_con_classes + ' jobsearch-mediumpass');
_this.attr('class', _this_classes + ' jobsearch-mediumpass');
chk_msg_con.html(good_pass_msg);
parent_form.find('.jobsearch-regpass-frmbtn').removeClass('jobsearch-disable-btn');
parent_form.find('.jobsearch-regpass-frmbtn').removeAttr('disabled');
break;
case 4 :
chk_msg_con.css({display: 'inline-block'});
chk_msg_con.attr('class', chkmsg_con_classes + ' jobsearch-strongpass');
_this.attr('class', _this_classes + ' jobsearch-strongpass');
chk_msg_con.html(strong_pass_msg);
parent_form.find('.jobsearch-regpass-frmbtn').removeClass('jobsearch-disable-btn');
parent_form.find('.jobsearch-regpass-frmbtn').removeAttr('disabled');
break;
case 5 :
chk_msg_con.css({display: 'inline-block'});
chk_msg_con.attr('class', chkmsg_con_classes + ' jobsearch-shortpass');
_this.attr('class', _this_classes + ' jobsearch-shortpass');
chk_msg_con.html(short_pass_msg);
if(!parent_form.find('.jobsearch-regpass-frmbtn').hasClass('jobsearch-disable-btn')){
parent_form.find('.jobsearch-regpass-frmbtn').addClass('jobsearch-disable-btn');
}
parent_form.find('.jobsearch-regpass-frmbtn').prop('disabled', true);
break;
}});
var $=jQuery;
$(document).ready(function (){
'use strict';
jQuery('.user_field').on('click', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
loaded=jQuery(this).data('loaded'),
role=jQuery(this).data('role'),
user_field=jQuery('#user_field_' + this_id),
ajax_url=jobsearch_plugin_vars.ajax_url,
force_std=jQuery(this).data('forcestd');
if(loaded!=true){
jQuery('.user_loader_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
force_std: force_std,
role: role,
action: 'jobsearch_load_all_users_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
user_field.html(response.html);
jQuery('.user_loader_' + this_id).html('');
user_field.data('loaded', true);
}});
request.fail(function (jqXHR, textStatus){
});
}
return false;
});
jQuery('.custom_post_field').on('click', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
loaded=jQuery(this).data('loaded'),
posttype=jQuery(this).data('posttype'),
custom_field=jQuery('#custom_post_field_' + this_id),
ajax_url=jobsearch_plugin_vars.ajax_url,
force_std=jQuery(this).data('forcestd');
if(loaded!=true){
jQuery('.custom_post_loader_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
force_std: force_std,
posttype: posttype,
action: 'jobsearch_load_all_custom_post_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
custom_field.html(response.html);
jQuery('.custom_post_loader_' + this_id).html('');
custom_field.data('loaded', true);
}});
request.fail(function (jqXHR, textStatus){
});
}
return false;
});
});
jQuery(document).on('click', '.load_users_field', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
loaded=jQuery(this).data('loaded'),
custom_field=jQuery('#load_users_field_' + this_id),
ajax_url=jobsearch_plugin_vars.ajax_url,
force_std=jQuery(this).data('forcestd');
if(loaded!=true){
jQuery('.load_users_loader_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
force_std: force_std,
action: 'jobsearch_load_all_users_list_opts',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
custom_field.html(response.html);
jQuery('.load_users_loader_' + this_id).html('');
custom_field.data('loaded', true);
}});
request.fail(function (jqXHR, textStatus){
});
}
return false;
});
function jobsearch_multicap_all_functions(){
var all_elements=jQuery(".g-recaptcha");
for (var i=0; i < all_elements.length; i++){
var id=all_elements[i].getAttribute('id');
var site_key=all_elements[i].getAttribute('data-sitekey');
if(null!=id){
grecaptcha.render(id, {
'sitekey': site_key
});
}}
}
function jobsearch_captcha_reload(admin_url, captcha_id){
"use strict";
var dataString='&action=jobsearch_captcha_reload&captcha_id=' + captcha_id;
jQuery.ajax({
type: "POST",
url: admin_url,
data: dataString,
dataType: 'html',
success: function (data){
jQuery("#" + captcha_id + "_div").html(data);
}});
}
window.djangoReCaptcha={
list: [],
setup: function (){
$('.g-recaptcha').each(function (){
var $container=$(this);
var config=$container.data();
alert($container.attr('class'));
djangoReCaptcha.init($container, config);
});
$(window).on('resize orientationchange', function (){
$(djangoReCaptcha.list).each(function (idx, el){
djangoReCaptcha.resize.apply(null, el);
});
});
},
init: function ($container, config){
grecaptcha.render($container.get(0), config);
alert(3434);
var captchaSize, scaleFactor;
var $iframe=$container.find('iframe').eq(0);
$iframe.on('load', function (){
$container.addClass('g-recaptcha-initted');
captchaSize=captchaSize||{w: $iframe.width() - 2, h: $iframe.height()};
djangoReCaptcha.resize($container, captchaSize);
djangoReCaptcha.list.push([$container, captchaSize]);
});
},
};
window.djangoReCaptchaSetup=window.djangoReCaptcha.setup;
jQuery(document).on('click', '.load-more-team', function (){
var _this=jQuery(this),
total_pages=_this.attr('data-pages'),
cur_page=_this.attr('data-page'),
this_rand=_this.attr('data-rand'),
this_view=_this.attr('data-view'),
employer_id=_this.attr('data-id'),
class_pref=_this.attr('data-pref'),
ajax_url=jobsearch_plugin_vars.ajax_url;
var team_view='default';
if('undefined'!==typeof this_view&&this_view!=''){
team_view=this_view;
}
var members_holder=jQuery('#members-holder-' + this_rand);
var this_html=_this.html();
if(!_this.hasClass('jobsearch-loading')){
_this.addClass('jobsearch-loading');
_this.html('<i class="fa fa-refresh fa-spin"></i> ' + jobsearch_plugin_vars.loading);
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
total_pages: total_pages,
cur_page: cur_page,
employer_id: employer_id,
class_pref: class_pref,
team_style: team_view,
action: 'jobsearch_load_employer_team_next_page',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html&&response.html!=''){
members_holder.append(response.html);
members_holder.find('.new-entries').slideDown().removeClass('new-entries');
var current_page=parseInt(cur_page) + 1;
_this.attr('data-page', current_page);
if(current_page==total_pages){
_this.hide();
}}
_this.html(this_html);
_this.removeClass('jobsearch-loading');
});
request.fail(function (jqXHR, textStatus){
_this.html(this_html);
_this.removeClass('jobsearch-loading');
});
}
return false;
});
jQuery(document).on('click', ".jobsearch-click-btn", function (){
var t_tihs=jQuery(this);
var filtr_cname=t_tihs.attr('data-cname');
var filtr_cval=t_tihs.attr('data-cval');
if(filtr_cval=='close'){
filtr_cval='open';
}else{
filtr_cval='close';
}
t_tihs.parents('.jobsearch-search-filter-toggle').find('.jobsearch-checkbox-toggle').slideToggle("slow", function (){
var c_date=new Date();
c_date.setTime(c_date.getTime() + (60 * 60 * 1000));
var c_expires="; c_expires=" + c_date.toGMTString();
document.cookie=filtr_cname + "=" + filtr_cval + c_expires + "; path=/";
});
t_tihs.parents('.jobsearch-search-filter-toggle').toggleClass("jobsearch-remove-padding");
return false;
});
jQuery(document).ready(function (){
if(jQuery('.jobsearch-mobile-btn').length > 0){
jQuery('.jobsearch-mobile-btn').click(function (){
jQuery('.jobsearch-mobile-section').slideToggle(1000);
jQuery(this).toggleClass("open");
});
}});
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:5,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
!function(a,b){"function"==typeof define&&define.amd?define("sifter",b):"object"==typeof exports?module.exports=b():a.Sifter=b()}(this,function(){var a=function(a,b){this.items=a,this.settings=b||{diacritics:!0}};a.prototype.tokenize=function(a){if(a=e(String(a||"").toLowerCase()),!a||!a.length)return[];var b,c,d,g,i=[],j=a.split(/ +/);for(b=0,c=j.length;b<c;b++){if(d=f(j[b]),this.settings.diacritics)for(g in h)h.hasOwnProperty(g)&&(d=d.replace(new RegExp(g,"g"),h[g]));i.push({string:j[b],regex:new RegExp(d,"i")})}return i},a.prototype.iterator=function(a,b){var c;c=g(a)?Array.prototype.forEach||function(a){for(var b=0,c=this.length;b<c;b++)a(this[b],b,this)}:function(a){for(var b in this)this.hasOwnProperty(b)&&a(this[b],b,this)},c.apply(a,[b])},a.prototype.getScoreFunction=function(a,b){var c,e,f,g,h;c=this,a=c.prepareSearch(a,b),f=a.tokens,e=a.options.fields,g=f.length,h=a.options.nesting;var i=function(a,b){var c,d;return a?(a=String(a||""),d=a.search(b.regex),d===-1?0:(c=b.string.length/a.length,0===d&&(c+=.5),c)):0},j=function(){var a=e.length;return a?1===a?function(a,b){return i(d(b,e[0],h),a)}:function(b,c){for(var f=0,g=0;f<a;f++)g+=i(d(c,e[f],h),b);return g/a}:function(){return 0}}();return g?1===g?function(a){return j(f[0],a)}:"and"===a.options.conjunction?function(a){for(var b,c=0,d=0;c<g;c++){if(b=j(f[c],a),b<=0)return 0;d+=b}return d/g}:function(a){for(var b=0,c=0;b<g;b++)c+=j(f[b],a);return c/g}:function(){return 0}},a.prototype.getSortFunction=function(a,c){var e,f,g,h,i,j,k,l,m,n,o;if(g=this,a=g.prepareSearch(a,c),o=!a.query&&c.sort_empty||c.sort,m=function(a,b){return"$score"===a?b.score:d(g.items[b.id],a,c.nesting)},i=[],o)for(e=0,f=o.length;e<f;e++)(a.query||"$score"!==o[e].field)&&i.push(o[e]);if(a.query){for(n=!0,e=0,f=i.length;e<f;e++)if("$score"===i[e].field){n=!1;break}n&&i.unshift({field:"$score",direction:"desc"})}else for(e=0,f=i.length;e<f;e++)if("$score"===i[e].field){i.splice(e,1);break}for(l=[],e=0,f=i.length;e<f;e++)l.push("desc"===i[e].direction?-1:1);return j=i.length,j?1===j?(h=i[0].field,k=l[0],function(a,c){return k*b(m(h,a),m(h,c))}):function(a,c){var d,e,f;for(d=0;d<j;d++)if(f=i[d].field,e=l[d]*b(m(f,a),m(f,c)))return e;return 0}:null},a.prototype.prepareSearch=function(a,b){if("object"==typeof a)return a;b=c({},b);var d=b.fields,e=b.sort,f=b.sort_empty;return d&&!g(d)&&(b.fields=[d]),e&&!g(e)&&(b.sort=[e]),f&&!g(f)&&(b.sort_empty=[f]),{options:b,query:String(a||"").toLowerCase(),tokens:this.tokenize(a),total:0,items:[]}},a.prototype.search=function(a,b){var c,d,e,f,g=this;return d=this.prepareSearch(a,b),b=d.options,a=d.query,f=b.score||g.getScoreFunction(d),a.length?g.iterator(g.items,function(a,e){c=f(a),(b.filter===!1||c>0)&&d.items.push({score:c,id:e})}):g.iterator(g.items,function(a,b){d.items.push({score:1,id:b})}),e=g.getSortFunction(d,b),e&&d.items.sort(e),d.total=d.items.length,"number"==typeof b.limit&&(d.items=d.items.slice(0,b.limit)),d};var b=function(a,b){return"number"==typeof a&&"number"==typeof b?a>b?1:a<b?-1:0:(a=i(String(a||"")),b=i(String(b||"")),a>b?1:b>a?-1:0)},c=function(a,b){var c,d,e,f;for(c=1,d=arguments.length;c<d;c++)if(f=arguments[c])for(e in f)f.hasOwnProperty(e)&&(a[e]=f[e]);return a},d=function(a,b,c){if(a&&b){if(!c)return a[b];for(var d=b.split(".");d.length&&(a=a[d.shift()]););return a}},e=function(a){return(a+"").replace(/^\s+|\s+$|/g,"")},f=function(a){return(a+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},g=Array.isArray||"undefined"!=typeof $&&$.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},h={a:"[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",b:"[b␢βΒB฿𐌁ᛒ]",c:"[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",d:"[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",e:"[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",f:"[fƑƒḞḟ]",g:"[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",h:"[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",i:"[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",j:"[jȷĴĵɈɉʝɟʲ]",k:"[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",l:"[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",n:"[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",o:"[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",p:"[pṔṕṖṗⱣᵽƤƥᵱ]",q:"[qꝖꝗʠɊɋꝘꝙq̃]",r:"[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",s:"[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",t:"[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",u:"[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",v:"[vṼṽṾṿƲʋꝞꝟⱱʋ]",w:"[wẂẃẀẁŴŵẄẅẆẇẈẉ]",x:"[xẌẍẊẋχ]",y:"[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",z:"[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"},i=function(){var a,b,c,d,e="",f={};for(c in h)if(h.hasOwnProperty(c))for(d=h[c].substring(2,h[c].length-1),e+=d,a=0,b=d.length;a<b;a++)f[d.charAt(a)]=c;var g=new RegExp("["+e+"]","g");return function(a){return a.replace(g,function(a){return f[a]}).toLowerCase()}}();return a}),function(a,b){"function"==typeof define&&define.amd?define("microplugin",b):"object"==typeof exports?module.exports=b():a.MicroPlugin=b()}(this,function(){var a={};a.mixin=function(a){a.plugins={},a.prototype.initializePlugins=function(a){var c,d,e,f=this,g=[];if(f.plugins={names:[],settings:{},requested:{},loaded:{}},b.isArray(a))for(c=0,d=a.length;c<d;c++)"string"==typeof a[c]?g.push(a[c]):(f.plugins.settings[a[c].name]=a[c].options,g.push(a[c].name));else if(a)for(e in a)a.hasOwnProperty(e)&&(f.plugins.settings[e]=a[e],g.push(e));for(;g.length;)f.require(g.shift())},a.prototype.loadPlugin=function(b){var c=this,d=c.plugins,e=a.plugins[b];if(!a.plugins.hasOwnProperty(b))throw new Error('Unable to find "'+b+'" plugin');d.requested[b]=!0,d.loaded[b]=e.fn.apply(c,[c.plugins.settings[b]||{}]),d.names.push(b)},a.prototype.require=function(a){var b=this,c=b.plugins;if(!b.plugins.loaded.hasOwnProperty(a)){if(c.requested[a])throw new Error('Plugin has circular dependency ("'+a+'")');b.loadPlugin(a)}return c.loaded[a]},a.define=function(b,c){a.plugins[b]={name:b,fn:c}}};var b={isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}};return a}),function(a,b){"function"==typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],b):"object"==typeof exports?module.exports=b(require("jquery"),require("sifter"),require("microplugin")):a.Selectize=b(a.jQuery,a.Sifter,a.MicroPlugin)}(this,function(a,b,c){"use strict";var d=function(a,b){if("string"!=typeof b||b.length){var c="string"==typeof b?new RegExp(b,"i"):b,d=function(a){var b=0;if(3===a.nodeType){var e=a.data.search(c);if(e>=0&&a.data.length>0){var f=a.data.match(c),g=document.createElement("span");g.className="highlight";var h=a.splitText(e),i=(h.splitText(f[0].length),h.cloneNode(!0));g.appendChild(i),h.parentNode.replaceChild(g,h),b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName))for(var j=0;j<a.childNodes.length;++j)j+=d(a.childNodes[j]);return b};return a.each(function(){d(this)})}};a.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var a=this.parentNode;a.replaceChild(this.firstChild,this),a.normalize()}).end()};var e=function(){};e.prototype={on:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},off:function(a,b){var c=arguments.length;return 0===c?delete this._events:1===c?delete this._events[a]:(this._events=this._events||{},void(a in this._events!=!1&&this._events[a].splice(this._events[a].indexOf(b),1)))},trigger:function(a){if(this._events=this._events||{},a in this._events!=!1)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}},e.mixin=function(a){for(var b=["on","off","trigger"],c=0;c<b.length;c++)a.prototype[b[c]]=e.prototype[b[c]]};var f=/Mac/.test(navigator.userAgent),g=65,h=13,i=27,j=37,k=38,l=80,m=39,n=40,o=78,p=8,q=46,r=16,s=f?91:17,t=f?18:17,u=9,v=1,w=2,x=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity,y=function(a){return"undefined"!=typeof a},z=function(a){return"undefined"==typeof a||null===a?null:"boolean"==typeof a?a?"1":"0":a+""},A=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},B={};B.before=function(a,b,c){var d=a[b];a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}},B.after=function(a,b,c){var d=a[b];a[b]=function(){var b=d.apply(a,arguments);return c.apply(a,arguments),b}};var C=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},D=function(a,b){var c;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}},E=function(a,b,c){var d,e=a.trigger,f={};a.trigger=function(){var c=arguments[0];return b.indexOf(c)===-1?e.apply(a,arguments):void(f[c]=arguments)},c.apply(a,[]),a.trigger=e;for(d in f)f.hasOwnProperty(d)&&e.apply(a,f[d])},F=function(a,b,c,d){a.on(b,c,function(b){for(var c=b.target;c&&c.parentNode!==a[0];)c=c.parentNode;return b.currentTarget=c,d.apply(this,[b])})},G=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var c=document.selection.createRange(),d=document.selection.createRange().text.length;c.moveStart("character",-a.value.length),b.start=c.text.length-d,b.length=d}return b},H=function(a,b,c){var d,e,f={};if(c)for(d=0,e=c.length;d<e;d++)f[c[d]]=a.css(c[d]);else f=a.css();b.css(f)},I=function(b,c){if(!b)return 0;var d=a("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).text(b).appendTo("body");H(c,d,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);var e=d.width();return d.remove(),e},J=function(a){var b=null,c=function(c,d){var e,f,g,h,i,j,k,l;c=c||window.event||{},d=d||{},c.metaKey||c.altKey||(d.force||a.data("grow")!==!1)&&(e=a.val(),c.type&&"keydown"===c.type.toLowerCase()&&(f=c.keyCode,g=f>=97&&f<=122||f>=65&&f<=90||f>=48&&f<=57||32===f,f===q||f===p?(l=G(a[0]),l.length?e=e.substring(0,l.start)+e.substring(l.start+l.length):f===p&&l.start?e=e.substring(0,l.start-1)+e.substring(l.start+1):f===q&&"undefined"!=typeof l.start&&(e=e.substring(0,l.start)+e.substring(l.start+1))):g&&(j=c.shiftKey,k=String.fromCharCode(c.keyCode),k=j?k.toUpperCase():k.toLowerCase(),e+=k)),h=a.attr("placeholder"),!e&&h&&(e=h),i=I(e,a)+4,i!==b&&(b=i,a.width(i),a.triggerHandler("resize")))};a.on("keydown keyup update blur",c),c()},K=function(a){var b=document.createElement("div");return b.appendChild(a.cloneNode(!0)),b.innerHTML},L=function(a,b){b||(b={});var c="Selectize";console.error(c+": "+a),b.explanation&&(console.group&&console.group(),console.error(b.explanation),console.group&&console.groupEnd())},M=function(c,d){var e,f,g,h,i=this;h=c[0],h.selectize=i;var j=window.getComputedStyle&&window.getComputedStyle(h,null);if(g=j?j.getPropertyValue("direction"):h.currentStyle&&h.currentStyle.direction,g=g||c.parents("[dir]:first").attr("dir")||"",a.extend(i,{order:0,settings:d,$input:c,tabIndex:c.attr("tabindex")||"",tagType:"select"===h.tagName.toLowerCase()?v:w,rtl:/rtl/i.test(g),eventNS:".selectize"+ ++M.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isRequired:c.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===d.loadThrottle?i.onSearchChange:D(i.onSearchChange,d.loadThrottle)}),i.sifter=new b(this.options,{diacritics:d.diacritics}),i.settings.options){for(e=0,f=i.settings.options.length;e<f;e++)i.registerOption(i.settings.options[e]);delete i.settings.options}if(i.settings.optgroups){for(e=0,f=i.settings.optgroups.length;e<f;e++)i.registerOptionGroup(i.settings.optgroups[e]);delete i.settings.optgroups}i.settings.mode=i.settings.mode||(1===i.settings.maxItems?"single":"multi"),"boolean"!=typeof i.settings.hideSelected&&(i.settings.hideSelected="multi"===i.settings.mode),i.initializePlugins(i.settings.plugins),i.setupCallbacks(),i.setupTemplates(),i.setup()};return e.mixin(M),"undefined"!=typeof c?c.mixin(M):L("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'}),a.extend(M.prototype,{setup:function(){var b,c,d,e,g,h,i,j,k,l,m=this,n=m.settings,o=m.eventNS,p=a(window),q=a(document),u=m.$input;if(i=m.settings.mode,j=u.attr("class")||"",b=a("<div>").addClass(n.wrapperClass).addClass(j).addClass(i),c=a("<div>").addClass(n.inputClass).addClass("items").appendTo(b),d=a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex",u.is(":disabled")?"-1":m.tabIndex),h=a(n.dropdownParent||b),e=a("<div>").addClass(n.dropdownClass).addClass(i).hide().appendTo(h),g=a("<div>").addClass(n.dropdownContentClass).appendTo(e),(l=u.attr("id"))&&(d.attr("id",l+"-selectized"),a("label[for='"+l+"']").attr("for",l+"-selectized")),m.settings.copyClassesToDropdown&&e.addClass(j),b.css({width:u[0].style.width}),m.plugins.names.length&&(k="plugin-"+m.plugins.names.join(" plugin-"),b.addClass(k),e.addClass(k)),(null===n.maxItems||n.maxItems>1)&&m.tagType===v&&u.attr("multiple","multiple"),m.settings.placeholder&&d.attr("placeholder",n.placeholder),!m.settings.splitOn&&m.settings.delimiter){var w=m.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");m.settings.splitOn=new RegExp("\\s*"+w+"+\\s*")}u.attr("autocorrect")&&d.attr("autocorrect",u.attr("autocorrect")),u.attr("autocapitalize")&&d.attr("autocapitalize",u.attr("autocapitalize")),m.$wrapper=b,m.$control=c,m.$control_input=d,m.$dropdown=e,m.$dropdown_content=g,e.on("mouseenter","[data-selectable]",function(){return m.onOptionHover.apply(m,arguments)}),e.on("mousedown click","[data-selectable]",function(){return m.onOptionSelect.apply(m,arguments)}),F(c,"mousedown","*:not(input)",function(){return m.onItemSelect.apply(m,arguments)}),J(d),c.on({mousedown:function(){return m.onMouseDown.apply(m,arguments)},click:function(){return m.onClick.apply(m,arguments)}}),d.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return m.onKeyDown.apply(m,arguments)},keyup:function(){return m.onKeyUp.apply(m,arguments)},keypress:function(){return m.onKeyPress.apply(m,arguments)},resize:function(){m.positionDropdown.apply(m,[])},blur:function(){return m.onBlur.apply(m,arguments)},focus:function(){return m.ignoreBlur=!1,m.onFocus.apply(m,arguments)},paste:function(){return m.onPaste.apply(m,arguments)}}),q.on("keydown"+o,function(a){m.isCmdDown=a[f?"metaKey":"ctrlKey"],m.isCtrlDown=a[f?"altKey":"ctrlKey"],m.isShiftDown=a.shiftKey}),q.on("keyup"+o,function(a){a.keyCode===t&&(m.isCtrlDown=!1),a.keyCode===r&&(m.isShiftDown=!1),a.keyCode===s&&(m.isCmdDown=!1)}),q.on("mousedown"+o,function(a){if(m.isFocused){if(a.target===m.$dropdown[0]||a.target.parentNode===m.$dropdown[0])return!1;m.$control.has(a.target).length||a.target===m.$control[0]||m.blur(a.target)}}),p.on(["scroll"+o,"resize"+o].join(" "),function(){m.isOpen&&m.positionDropdown.apply(m,arguments)}),p.on("mousemove"+o,function(){m.ignoreHover=!1}),this.revertSettings={$children:u.children().detach(),tabindex:u.attr("tabindex")},u.attr("tabindex",-1).hide().after(m.$wrapper),a.isArray(n.items)&&(m.setValue(n.items),delete n.items),x&&u.on("invalid"+o,function(a){a.preventDefault(),m.isInvalid=!0,m.refreshState()}),m.updateOriginalInput(),m.refreshItems(),m.refreshState(),m.updatePlaceholder(),m.isSetup=!0,u.is(":disabled")&&m.disable(),m.on("change",this.onChange),u.data("selectize",m),u.addClass("selectized"),m.trigger("initialize"),n.preload===!0&&m.onSearchChange("")},setupTemplates:function(){var b=this,c=b.settings.labelField,d=b.settings.optgroupLabelField,e={optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,b){return'<div class="optgroup-header">'+b(a[d])+"</div>"},option:function(a,b){return'<div class="option">'+b(a[c])+"</div>"},item:function(a,b){return'<div class="item">'+b(a[c])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}};b.settings.render=a.extend({},e,b.settings.render)},setupCallbacks:function(){var a,b,c={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(a in c)c.hasOwnProperty(a)&&(b=this.settings[c[a]],b&&this.on(a,b))},onClick:function(a){var b=this;b.isFocused||(b.focus(),a.preventDefault())},onMouseDown:function(b){var c=this,d=b.isDefaultPrevented();a(b.target);if(c.isFocused){if(b.target!==c.$control_input[0])return"single"===c.settings.mode?c.isOpen?c.close():c.open():d||c.setActiveItem(null),!1}else d||window.setTimeout(function(){c.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(b){var c=this;return c.isFull()||c.isInputHidden||c.isLocked?void b.preventDefault():void(c.settings.splitOn&&setTimeout(function(){var b=c.$control_input.val();if(b.match(c.settings.splitOn))for(var d=a.trim(b).split(c.settings.splitOn),e=0,f=d.length;e<f;e++)c.createItem(d[e])},0))},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||a.which);return this.settings.create&&"multi"===this.settings.mode&&b===this.settings.delimiter?(this.createItem(),a.preventDefault(),!1):void 0},onKeyDown:function(a){var b=(a.target===this.$control_input[0],this);if(b.isLocked)return void(a.keyCode!==u&&a.preventDefault());switch(a.keyCode){case g:if(b.isCmdDown)return void b.selectAll();break;case i:return void(b.isOpen&&(a.preventDefault(),a.stopPropagation(),b.close()));case o:if(!a.ctrlKey||a.altKey)break;case n:if(!b.isOpen&&b.hasOptions)b.open();else if(b.$activeOption){b.ignoreHover=!0;var c=b.getAdjacentOption(b.$activeOption,1);c.length&&b.setActiveOption(c,!0,!0)}return void a.preventDefault();case l:if(!a.ctrlKey||a.altKey)break;case k:if(b.$activeOption){b.ignoreHover=!0;var d=b.getAdjacentOption(b.$activeOption,-1);d.length&&b.setActiveOption(d,!0,!0)}return void a.preventDefault();case h:return void(b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),a.preventDefault()));case j:return void b.advanceSelection(-1,a);case m:return void b.advanceSelection(1,a);case u:return b.settings.selectOnTab&&b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),b.isFull()||a.preventDefault()),void(b.settings.create&&b.createItem()&&a.preventDefault());case p:case q:return void b.deleteSelection(a)}return!b.isFull()&&!b.isInputHidden||(f?a.metaKey:a.ctrlKey)?void 0:void a.preventDefault()},onKeyUp:function(a){var b=this;if(b.isLocked)return a&&a.preventDefault();var c=b.$control_input.val()||"";b.lastValue!==c&&(b.lastValue=c,b.onSearchChange(c),b.refreshOptions(),b.trigger("type",c))},onSearchChange:function(a){var b=this,c=b.settings.load;c&&(b.loadedSearches.hasOwnProperty(a)||(b.loadedSearches[a]=!0,b.load(function(d){c.apply(b,[a,d])})))},onFocus:function(a){var b=this,c=b.isFocused;return b.isDisabled?(b.blur(),a&&a.preventDefault(),!1):void(b.ignoreFocus||(b.isFocused=!0,"focus"===b.settings.preload&&b.onSearchChange(""),c||b.trigger("focus"),b.$activeItems.length||(b.showInput(),b.setActiveItem(null),b.refreshOptions(!!b.settings.openOnFocus)),b.refreshState()))},onBlur:function(a,b){var c=this;if(c.isFocused&&(c.isFocused=!1,!c.ignoreFocus)){if(!c.ignoreBlur&&document.activeElement===c.$dropdown_content[0])return c.ignoreBlur=!0,void c.onFocus(a);var d=function(){c.close(),c.setTextboxValue(""),c.setActiveItem(null),c.setActiveOption(null),c.setCaret(c.items.length),c.refreshState(),b&&b.focus&&b.focus(),c.ignoreFocus=!1,c.trigger("blur")};c.ignoreFocus=!0,c.settings.create&&c.settings.createOnBlur?c.createItem(null,!1,d):d()}},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(b){var c,d,e=this;b.preventDefault&&(b.preventDefault(),b.stopPropagation()),d=a(b.currentTarget),d.hasClass("create")?e.createItem(null,function(){e.settings.closeAfterSelect&&e.close()}):(c=d.attr("data-value"),"undefined"!=typeof c&&(e.lastQuery=null,e.setTextboxValue(""),e.addItem(c),e.settings.closeAfterSelect?e.close():!e.settings.hideSelected&&b.type&&/mouse/.test(b.type)&&e.setActiveOption(e.getOption(c))))},onItemSelect:function(a){var b=this;b.isLocked||"multi"===b.settings.mode&&(a.preventDefault(),b.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass(b.settings.loadingClass);b.loading++,a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0),a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden)),b.loading||c.removeClass(b.settings.loadingClass),b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input,c=b.val()!==a;c&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return this.tagType===v&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a,b){var c=b?[]:["change"];E(this,c,function(){this.clear(b),this.addItems(a,b)})},setActiveItem:function(b,c){var d,e,f,g,h,i,j,k,l=this;if("single"!==l.settings.mode){if(b=a(b),!b.length)return a(l.$activeItems).removeClass("active"),l.$activeItems=[],void(l.isFocused&&l.showInput());if(d=c&&c.type.toLowerCase(),"mousedown"===d&&l.isShiftDown&&l.$activeItems.length){for(k=l.$control.children(".active:last"),g=Array.prototype.indexOf.apply(l.$control[0].childNodes,[k[0]]),h=Array.prototype.indexOf.apply(l.$control[0].childNodes,[b[0]]),g>h&&(j=g,g=h,h=j),e=g;e<=h;e++)i=l.$control[0].childNodes[e],l.$activeItems.indexOf(i)===-1&&(a(i).addClass("active"),l.$activeItems.push(i));c.preventDefault()}else"mousedown"===d&&l.isCtrlDown||"keydown"===d&&this.isShiftDown?b.hasClass("active")?(f=l.$activeItems.indexOf(b[0]),l.$activeItems.splice(f,1),b.removeClass("active")):l.$activeItems.push(b.addClass("active")[0]):(a(l.$activeItems).removeClass("active"),l.$activeItems=[b.addClass("active")[0]]);l.hideInput(),this.isFocused||l.focus()}},setActiveOption:function(b,c,d){var e,f,g,h,i,j=this;j.$activeOption&&j.$activeOption.removeClass("active"),j.$activeOption=null,b=a(b),b.length&&(j.$activeOption=b.addClass("active"),!c&&y(c)||(e=j.$dropdown_content.height(),f=j.$activeOption.outerHeight(!0),c=j.$dropdown_content.scrollTop()||0,g=j.$activeOption.offset().top-j.$dropdown_content.offset().top+c,h=g,i=g-e+f,g+f>e+c?j.$dropdown_content.stop().animate({scrollTop:i},d?j.settings.scrollDuration:0):g<c&&j.$dropdown_content.stop().animate({scrollTop:h},d?j.settings.scrollDuration:0)))},selectAll:function(){var a=this;"single"!==a.settings.mode&&(a.$activeItems=Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")),a.$activeItems.length&&(a.hideInput(),a.close()),a.focus())},hideInput:function(){var a=this;a.setTextboxValue(""),a.$control_input.css({opacity:0,position:"absolute",left:a.rtl?1e4:-1e4}),a.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1,a.onFocus()},0))},blur:function(a){this.$control_input[0].blur(),this.onBlur(null,a)},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;return"string"==typeof b&&(b=[{field:b}]),{fields:a.searchField,conjunction:a.searchConjunction,sort:b}},search:function(b){var c,d,e,f=this,g=f.settings,h=this.getSearchOptions();if(g.score&&(e=f.settings.score.apply(this,[b]),"function"!=typeof e))throw new Error('Selectize "score" setting must be a function that returns a function');if(b!==f.lastQuery?(f.lastQuery=b,d=f.sifter.search(b,a.extend(h,{score:e})),f.currentResults=d):d=a.extend(!0,{},f.currentResults),g.hideSelected)for(c=d.items.length-1;c>=0;c--)f.items.indexOf(z(d.items[c].id))!==-1&&d.items.splice(c,1);return d},refreshOptions:function(b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;"undefined"==typeof b&&(b=!0);var t=this,u=a.trim(t.$control_input.val()),v=t.search(u),w=t.$dropdown_content,x=t.$activeOption&&z(t.$activeOption.attr("data-value"));for(g=v.items.length,"number"==typeof t.settings.maxOptions&&(g=Math.min(g,t.settings.maxOptions)),h={},i=[],c=0;c<g;c++)for(j=t.options[v.items[c].id],k=t.render("option",j),l=j[t.settings.optgroupField]||"",m=a.isArray(l)?l:[l],e=0,f=m&&m.length;e<f;e++)l=m[e],t.optgroups.hasOwnProperty(l)||(l=""),h.hasOwnProperty(l)||(h[l]=document.createDocumentFragment(),i.push(l)),h[l].appendChild(k);for(this.settings.lockOptgroupOrder&&i.sort(function(a,b){var c=t.optgroups[a].$order||0,d=t.optgroups[b].$order||0;return c-d}),n=document.createDocumentFragment(),c=0,g=i.length;c<g;c++)l=i[c],t.optgroups.hasOwnProperty(l)&&h[l].childNodes.length?(o=document.createDocumentFragment(),o.appendChild(t.render("optgroup_header",t.optgroups[l])),o.appendChild(h[l]),n.appendChild(t.render("optgroup",a.extend({},t.optgroups[l],{html:K(o),dom:o})))):n.appendChild(h[l]);if(w.html(n),t.settings.highlight&&v.query.length&&v.tokens.length)for(w.removeHighlight(),c=0,g=v.tokens.length;c<g;c++)d(w,v.tokens[c].regex);if(!t.settings.hideSelected)for(c=0,g=t.items.length;c<g;c++)t.getOption(t.items[c]).addClass("selected");p=t.canCreate(u),p&&(w.prepend(t.render("option_create",{input:u})),s=a(w[0].childNodes[0])),t.hasOptions=v.items.length>0||p,t.hasOptions?(v.items.length>0?(r=x&&t.getOption(x),r&&r.length?q=r:"single"===t.settings.mode&&t.items.length&&(q=t.getOption(t.items[0])),q&&q.length||(q=s&&!t.settings.addPrecedence?t.getAdjacentOption(s,1):w.find("[data-selectable]:first"))):q=s,t.setActiveOption(q),b&&!t.isOpen&&t.open()):(t.setActiveOption(null),b&&t.isOpen&&t.close())},addOption:function(b){var c,d,e,f=this;if(a.isArray(b))for(c=0,d=b.length;c<d;c++)f.addOption(b[c]);else(e=f.registerOption(b))&&(f.userOptions[e]=!0,f.lastQuery=null,f.trigger("option_add",e,b))},registerOption:function(a){var b=z(a[this.settings.valueField]);return"undefined"!=typeof b&&null!==b&&!this.options.hasOwnProperty(b)&&(a.$order=a.$order||++this.order,this.options[b]=a,b)},registerOptionGroup:function(a){var b=z(a[this.settings.optgroupValueField]);return!!b&&(a.$order=a.$order||++this.order,this.optgroups[b]=a,b)},addOptionGroup:function(a,b){b[this.settings.optgroupValueField]=a,(a=this.registerOptionGroup(b))&&this.trigger("optgroup_add",a,b)},removeOptionGroup:function(a){this.optgroups.hasOwnProperty(a)&&(delete this.optgroups[a],this.renderCache={},this.trigger("optgroup_remove",a))},clearOptionGroups:function(){this.optgroups={},this.renderCache={},this.trigger("optgroup_clear")},updateOption:function(b,c){var d,e,f,g,h,i,j,k=this;if(b=z(b),f=z(c[k.settings.valueField]),null!==b&&k.options.hasOwnProperty(b)){if("string"!=typeof f)throw new Error("Value must be set in option data");j=k.options[b].$order,f!==b&&(delete k.options[b],g=k.items.indexOf(b),g!==-1&&k.items.splice(g,1,f)),c.$order=c.$order||j,k.options[f]=c,h=k.renderCache.item,i=k.renderCache.option,h&&(delete h[b],delete h[f]),i&&(delete i[b],delete i[f]),k.items.indexOf(f)!==-1&&(d=k.getItem(b),e=a(k.render("item",c)),d.hasClass("active")&&e.addClass("active"),d.replaceWith(e)),k.lastQuery=null,k.isOpen&&k.refreshOptions(!1)}},removeOption:function(a,b){var c=this;a=z(a);var d=c.renderCache.item,e=c.renderCache.option;d&&delete d[a],e&&delete e[a],delete c.userOptions[a],delete c.options[a],c.lastQuery=null,c.trigger("option_remove",a),c.removeItem(a,b)},clearOptions:function(){var a=this;a.loadedSearches={},a.userOptions={},a.renderCache={},a.options=a.sifter.items={},a.lastQuery=null,a.trigger("option_clear"),a.clear()},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(b,c){var d=this.$dropdown.find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},getElementWithValue:function(b,c){if(b=z(b),"undefined"!=typeof b&&null!==b)for(var d=0,e=c.length;d<e;d++)if(c[d].getAttribute("data-value")===b)return a(c[d]);return a()},getItem:function(a){return this.getElementWithValue(a,this.$control.children())},addItems:function(b,c){for(var d=a.isArray(b)?b:[b],e=0,f=d.length;e<f;e++)this.isPending=e<f-1,this.addItem(d[e],c)},addItem:function(b,c){var d=c?[]:["change"];E(this,d,function(){var d,e,f,g,h,i=this,j=i.settings.mode;return b=z(b),i.items.indexOf(b)!==-1?void("single"===j&&i.close()):void(i.options.hasOwnProperty(b)&&("single"===j&&i.clear(c),"multi"===j&&i.isFull()||(d=a(i.render("item",i.options[b])),h=i.isFull(),i.items.splice(i.caretPos,0,b),i.insertAtCaret(d),(!i.isPending||!h&&i.isFull())&&i.refreshState(),i.isSetup&&(f=i.$dropdown_content.find("[data-selectable]"),i.isPending||(e=i.getOption(b),g=i.getAdjacentOption(e,1).attr("data-value"),i.refreshOptions(i.isFocused&&"single"!==j),g&&i.setActiveOption(i.getOption(g))),!f.length||i.isFull()?i.close():i.positionDropdown(),i.updatePlaceholder(),i.trigger("item_add",b,d),i.updateOriginalInput({silent:c})))))})},removeItem:function(b,c){var d,e,f,g=this;d=b instanceof a?b:g.getItem(b),b=z(d.attr("data-value")),e=g.items.indexOf(b),e!==-1&&(d.remove(),d.hasClass("active")&&(f=g.$activeItems.indexOf(d[0]),g.$activeItems.splice(f,1)),g.items.splice(e,1),g.lastQuery=null,!g.settings.persist&&g.userOptions.hasOwnProperty(b)&&g.removeOption(b,c),e<g.caretPos&&g.setCaret(g.caretPos-1),g.refreshState(),g.updatePlaceholder(),g.updateOriginalInput({silent:c}),g.positionDropdown(),g.trigger("item_remove",b,d))},createItem:function(b,c){var d=this,e=d.caretPos;b=b||a.trim(d.$control_input.val()||"");var f=arguments[arguments.length-1];if("function"!=typeof f&&(f=function(){}),"boolean"!=typeof c&&(c=!0),!d.canCreate(b))return f(),!1;d.lock();var g="function"==typeof d.settings.create?this.settings.create:function(a){var b={};return b[d.settings.labelField]=a,b[d.settings.valueField]=a,b},h=C(function(a){if(d.unlock(),!a||"object"!=typeof a)return f();var b=z(a[d.settings.valueField]);return"string"!=typeof b?f():(d.setTextboxValue(""),d.addOption(a),d.setCaret(e),d.addItem(b),d.refreshOptions(c&&"single"!==d.settings.mode),void f(a))}),i=g.apply(this,[b,h]);return"undefined"!=typeof i&&h(i),!0},refreshItems:function(){this.lastQuery=null,this.isSetup&&this.addItem(this.items),this.refreshState(),this.updateOriginalInput()},refreshState:function(){this.refreshValidityState(),this.refreshClasses()},refreshValidityState:function(){if(!this.isRequired)return!1;var a=!this.items.length;this.isInvalid=a,this.$control_input.prop("required",a),this.$input.prop("required",!a)},refreshClasses:function(){var b=this,c=b.isFull(),d=b.isLocked;b.$wrapper.toggleClass("rtl",b.rtl),b.$control.toggleClass("focus",b.isFocused).toggleClass("disabled",b.isDisabled).toggleClass("required",b.isRequired).toggleClass("invalid",b.isInvalid).toggleClass("locked",d).toggleClass("full",c).toggleClass("not-full",!c).toggleClass("input-active",b.isFocused&&!b.isInputHidden).toggleClass("dropdown-active",b.isOpen).toggleClass("has-options",!a.isEmptyObject(b.options)).toggleClass("has-items",b.items.length>0),b.$control_input.data("grow",!c&&!d)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(a){var b,c,d,e,f=this;if(a=a||{},f.tagType===v){for(d=[],b=0,c=f.items.length;b<c;b++)e=f.options[f.items[b]][f.settings.labelField]||"",d.push('<option value="'+A(f.items[b])+'" selected="selected">'+A(e)+"</option>");d.length||this.$input.attr("multiple")||d.push('<option value="" selected="selected"></option>'),
f.$input.html(d.join(""))}else f.$input.val(f.getValue()),f.$input.attr("value",f.$input.val());f.isSetup&&(a.silent||f.trigger("change",f.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var a=this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder),a.triggerHandler("update",{force:!0})}},open:function(){var a=this;a.isLocked||a.isOpen||"multi"===a.settings.mode&&a.isFull()||(a.focus(),a.isOpen=!0,a.refreshState(),a.$dropdown.css({visibility:"hidden",display:"block"}),a.positionDropdown(),a.$dropdown.css({visibility:"visible"}),a.trigger("dropdown_open",a.$dropdown))},close:function(){var a=this,b=a.isOpen;"single"===a.settings.mode&&a.items.length&&(a.hideInput(),a.$control_input.blur()),a.isOpen=!1,a.$dropdown.hide(),a.setActiveOption(null),a.refreshState(),b&&a.trigger("dropdown_close",a.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0),this.$dropdown.css({width:a.outerWidth(),top:b.top,left:b.left})},clear:function(a){var b=this;b.items.length&&(b.$control.children(":not(input)").remove(),b.items=[],b.lastQuery=null,b.setCaret(0),b.setActiveItem(null),b.updatePlaceholder(),b.updateOriginalInput({silent:a}),b.refreshState(),b.showInput(),b.trigger("clear"))},insertAtCaret:function(b){var c=Math.min(this.caretPos,this.items.length);0===c?this.$control.prepend(b):a(this.$control[0].childNodes[c]).before(b),this.setCaret(c+1)},deleteSelection:function(b){var c,d,e,f,g,h,i,j,k,l=this;if(e=b&&b.keyCode===p?-1:1,f=G(l.$control_input[0]),l.$activeOption&&!l.settings.hideSelected&&(i=l.getAdjacentOption(l.$activeOption,-1).attr("data-value")),g=[],l.$activeItems.length){for(k=l.$control.children(".active:"+(e>0?"last":"first")),h=l.$control.children(":not(input)").index(k),e>0&&h++,c=0,d=l.$activeItems.length;c<d;c++)g.push(a(l.$activeItems[c]).attr("data-value"));b&&(b.preventDefault(),b.stopPropagation())}else(l.isFocused||"single"===l.settings.mode)&&l.items.length&&(e<0&&0===f.start&&0===f.length?g.push(l.items[l.caretPos-1]):e>0&&f.start===l.$control_input.val().length&&g.push(l.items[l.caretPos]));if(!g.length||"function"==typeof l.settings.onDelete&&l.settings.onDelete.apply(l,[g])===!1)return!1;for("undefined"!=typeof h&&l.setCaret(h);g.length;)l.removeItem(g.pop());return l.showInput(),l.positionDropdown(),l.refreshOptions(!0),i&&(j=l.getOption(i),j.length&&l.setActiveOption(j)),!0},advanceSelection:function(a,b){var c,d,e,f,g,h,i=this;0!==a&&(i.rtl&&(a*=-1),c=a>0?"last":"first",d=G(i.$control_input[0]),i.isFocused&&!i.isInputHidden?(f=i.$control_input.val().length,g=a<0?0===d.start&&0===d.length:d.start===f,g&&!f&&i.advanceCaret(a,b)):(h=i.$control.children(".active:"+c),h.length&&(e=i.$control.children(":not(input)").index(h),i.setActiveItem(null),i.setCaret(a>0?e+1:e))))},advanceCaret:function(a,b){var c,d,e=this;0!==a&&(c=a>0?"next":"prev",e.isShiftDown?(d=e.$control_input[c](),d.length&&(e.hideInput(),e.setActiveItem(d),b&&b.preventDefault())):e.setCaret(e.caretPos+a))},setCaret:function(b){var c=this;if(b="single"===c.settings.mode?c.items.length:Math.max(0,Math.min(c.items.length,b)),!c.isPending){var d,e,f,g;for(f=c.$control.children(":not(input)"),d=0,e=f.length;d<e;d++)g=a(f[d]).detach(),d<b?c.$control_input.before(g):c.$control.append(g)}c.caretPos=b},lock:function(){this.close(),this.isLocked=!0,this.refreshState()},unlock:function(){this.isLocked=!1,this.refreshState()},disable:function(){var a=this;a.$input.prop("disabled",!0),a.$control_input.prop("disabled",!0).prop("tabindex",-1),a.isDisabled=!0,a.lock()},enable:function(){var a=this;a.$input.prop("disabled",!1),a.$control_input.prop("disabled",!1).prop("tabindex",a.tabIndex),a.isDisabled=!1,a.unlock()},destroy:function(){var b=this,c=b.eventNS,d=b.revertSettings;b.trigger("destroy"),b.off(),b.$wrapper.remove(),b.$dropdown.remove(),b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:d.tabindex}).show(),b.$control_input.removeData("grow"),b.$input.removeData("selectize"),a(window).off(c),a(document).off(c),a(document.body).off(c),delete b.$input[0].selectize},render:function(b,c){var d,e,f="",g=!1,h=this;return"option"!==b&&"item"!==b||(d=z(c[h.settings.valueField]),g=!!d),g&&(y(h.renderCache[b])||(h.renderCache[b]={}),h.renderCache[b].hasOwnProperty(d))?h.renderCache[b][d]:(f=a(h.settings.render[b].apply(this,[c,A])),"option"===b||"option_create"===b?f.attr("data-selectable",""):"optgroup"===b&&(e=c[h.settings.optgroupValueField]||"",f.attr("data-group",e)),"option"!==b&&"item"!==b||f.attr("data-value",d||""),g&&(h.renderCache[b][d]=f[0]),f[0])},clearCache:function(a){var b=this;"undefined"==typeof a?b.renderCache={}:delete b.renderCache[a]},canCreate:function(a){var b=this;if(!b.settings.create)return!1;var c=b.settings.createFilter;return a.length&&("function"!=typeof c||c.apply(b,[a]))&&("string"!=typeof c||new RegExp(c).test(a))&&(!(c instanceof RegExp)||c.test(a))}}),M.count=0,M.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},a.fn.selectize=function(b){var c=a.fn.selectize.defaults,d=a.extend({},c,b),e=d.dataAttr,f=d.labelField,g=d.valueField,h=d.optgroupField,i=d.optgroupLabelField,j=d.optgroupValueField,k=function(b,c){var h,i,j,k,l=b.attr(e);if(l)for(c.options=JSON.parse(l),h=0,i=c.options.length;h<i;h++)c.items.push(c.options[h][g]);else{var m=a.trim(b.val()||"");if(!d.allowEmptyOption&&!m.length)return;for(j=m.split(d.delimiter),h=0,i=j.length;h<i;h++)k={},k[f]=j[h],k[g]=j[h],c.options.push(k);c.items=j}},l=function(b,c){var k,l,m,n,o=c.options,p={},q=function(a){var b=e&&a.attr(e);return"string"==typeof b&&b.length?JSON.parse(b):null},r=function(b,e){b=a(b);var i=z(b.val());if(i||d.allowEmptyOption)if(p.hasOwnProperty(i)){if(e){var j=p[i][h];j?a.isArray(j)?j.push(e):p[i][h]=[j,e]:p[i][h]=e}}else{var k=q(b)||{};k[f]=k[f]||b.text(),k[g]=k[g]||i,k[h]=k[h]||e,p[i]=k,o.push(k),b.is(":selected")&&c.items.push(i)}},s=function(b){var d,e,f,g,h;for(b=a(b),f=b.attr("label"),f&&(g=q(b)||{},g[i]=f,g[j]=f,c.optgroups.push(g)),h=a("option",b),d=0,e=h.length;d<e;d++)r(h[d],f)};for(c.maxItems=b.attr("multiple")?null:1,n=b.children(),k=0,l=n.length;k<l;k++)m=n[k].tagName.toLowerCase(),"optgroup"===m?s(n[k]):"option"===m&&r(n[k])};return this.each(function(){if(!this.selectize){var e,f=a(this),g=this.tagName.toLowerCase(),h=f.attr("placeholder")||f.attr("data-placeholder");h||d.allowEmptyOption||(h=f.children('option[value=""]').text());var i={placeholder:h,options:[],optgroups:[],items:[]};"select"===g?l(f,i):k(f,i),e=new M(f,a.extend(!0,{},c,i,b))}})},a.fn.selectize.defaults=M.defaults,a.fn.selectize.support={validity:x},M.define("drag_drop",function(b){if(!a.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var c=this;c.lock=function(){var a=c.lock;return function(){var b=c.$control.data("sortable");return b&&b.disable(),a.apply(c,arguments)}}(),c.unlock=function(){var a=c.unlock;return function(){var b=c.$control.data("sortable");return b&&b.enable(),a.apply(c,arguments)}}(),c.setup=function(){var b=c.setup;return function(){b.apply(this,arguments);var d=c.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:c.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width")),d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var b=c.$activeItems?c.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(a(this).attr("data-value"))}),c.setValue(e),c.setActiveItem(b)}})}}()}}),M.define("dropdown_header",function(b){var c=this;b=a.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},b),c.setup=function(){var d=c.setup;return function(){d.apply(c,arguments),c.$dropdown_header=a(b.html(b)),c.$dropdown.prepend(c.$dropdown_header)}}()}),M.define("optgroup_columns",function(b){var c=this;b=a.extend({equalizeWidth:!0,equalizeHeight:!0},b),this.getAdjacentOption=function(b,c){var d=b.closest("[data-group]").find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},this.onKeyDown=function(){var a=c.onKeyDown;return function(b){var d,e,f,g;return!this.isOpen||b.keyCode!==j&&b.keyCode!==m?a.apply(this,arguments):(c.ignoreHover=!0,g=this.$activeOption.closest("[data-group]"),d=g.find("[data-selectable]").index(this.$activeOption),g=b.keyCode===j?g.prev("[data-group]"):g.next("[data-group]"),f=g.find("[data-selectable]"),e=f.eq(Math.min(f.length-1,d)),void(e.length&&this.setActiveOption(e)))}}();var d=function(){var a,b=d.width,c=document;return"undefined"==typeof b&&(a=c.createElement("div"),a.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',a=a.firstChild,c.body.appendChild(a),b=d.width=a.offsetWidth-a.clientWidth,c.body.removeChild(a)),b},e=function(){var e,f,g,h,i,j,k;if(k=a("[data-group]",c.$dropdown_content),f=k.length,f&&c.$dropdown_content.width()){if(b.equalizeHeight){for(g=0,e=0;e<f;e++)g=Math.max(g,k.eq(e).height());k.css({height:g})}b.equalizeWidth&&(j=c.$dropdown_content.innerWidth()-d(),h=Math.round(j/f),k.css({width:h}),f>1&&(i=j-h*(f-1),k.eq(f-1).css({width:i})))}};(b.equalizeHeight||b.equalizeWidth)&&(B.after(this,"positionDropdown",e),B.after(this,"refreshOptions",e))}),M.define("remove_button",function(b){b=a.extend({label:"&times;",title:"Remove",className:"remove",append:!0},b);var c=function(b,c){c.className="remove-single";var d=b,e='<a href="javascript:void(0)" class="'+c.className+'" tabindex="-1" title="'+A(c.title)+'">'+c.label+"</a>",f=function(a,b){return a+b};b.setup=function(){var g=d.setup;return function(){if(c.append){var h=a(d.$input.context).attr("id"),i=(a("#"+h),d.settings.render.item);d.settings.render.item=function(a){return f(i.apply(b,arguments),e)}}g.apply(b,arguments),b.$control.on("click","."+c.className,function(a){a.preventDefault(),d.isLocked||d.clear()})}}()},d=function(b,c){var d=b,e='<a href="javascript:void(0)" class="'+c.className+'" tabindex="-1" title="'+A(c.title)+'">'+c.label+"</a>",f=function(a,b){var c=a.search(/(<\/[^>]+>\s*)$/);return a.substring(0,c)+b+a.substring(c)};b.setup=function(){var g=d.setup;return function(){if(c.append){var h=d.settings.render.item;d.settings.render.item=function(a){return f(h.apply(b,arguments),e)}}g.apply(b,arguments),b.$control.on("click","."+c.className,function(b){if(b.preventDefault(),!d.isLocked){var c=a(b.currentTarget).parent();d.setActiveItem(c),d.deleteSelection()&&d.setCaret(d.items.length)}})}}()};return"single"===this.settings.mode?void c(this,b):void d(this,b)}),M.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]},this.onKeyDown=function(){var c=b.onKeyDown;return function(b){var d,e;return b.keyCode===p&&""===this.$control_input.val()&&!this.$activeItems.length&&(d=this.caretPos-1,d>=0&&d<this.items.length)?(e=this.options[this.items[d]],this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[e])),this.refreshOptions(!0)),void b.preventDefault()):c.apply(this,arguments)}}()}),M});
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;g>e;e++){var i=a[e];t[i]=0}return t}function r(t){var e=getComputedStyle(t);return e||h("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!u){u=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=r(e);n.isBoxSizeOuter=d=200==t(o.width),i.removeChild(e)}}function n(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var n=r(e);if("none"==n.display)return i();var h={};h.width=e.offsetWidth,h.height=e.offsetHeight;for(var u=h.isBorderBox="border-box"==n.boxSizing,p=0;g>p;p++){var f=a[p],m=n[f],s=parseFloat(m);h[f]=isNaN(s)?0:s}var c=h.paddingLeft+h.paddingRight,l=h.paddingTop+h.paddingBottom,b=h.marginLeft+h.marginRight,x=h.marginTop+h.marginBottom,y=h.borderLeftWidth+h.borderRightWidth,v=h.borderTopWidth+h.borderBottomWidth,W=u&&d,w=t(n.width);w!==!1&&(h.width=w+(W?0:c+y));var B=t(n.height);return B!==!1&&(h.height=B+(W?0:l+v)),h.innerWidth=h.width-(c+y),h.innerHeight=h.height-(l+v),h.outerWidth=h.width+b,h.outerHeight=h.height+x,h}}var d,h="undefined"==typeof console?e:function(t){console.error(t)},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],g=a.length,u=!1;return n});
!function(e,t){"use strict";"function"==typeof define&&define.amd?define(t):"object"==typeof module&&module.exports?module.exports=t():e.matchesSelector=t()}(window,function(){"use strict";var e=function(){var e=Element.prototype;if(e.matches)return"matches";if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],r=0;r<t.length;r++){var o=t[r],n=o+"MatchesSelector";if(e[n])return n}}();return function(t,r){return t[e](r)}});
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},i=n[t]=n[t]||[];return-1==i.indexOf(e)&&i.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{},i=n[t]=n[t]||{};return i[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var i=n.indexOf(e);return-1!=i&&n.splice(i,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var i=0,s=n[i];e=e||[];for(var o=this._onceEvents&&this._onceEvents[t];s;){var f=o&&o[s];f&&(this.off(t,s),delete o[s]),s.apply(this,e),i+=f?0:1,s=n[i]}return this}},t});
!function(e,t){"function"==typeof define&&define.amd?define(["desandro-matches-selector/matches-selector"],function(r){return t(e,r)}):"object"==typeof module&&module.exports?module.exports=t(e,require("desandro-matches-selector")):e.fizzyUIUtils=t(e,e.matchesSelector)}(window,function(e,t){"use strict";var r={};r.extend=function(e,t){for(var r in t)e[r]=t[r];return e},r.modulo=function(e,t){return(e%t+t)%t},r.makeArray=function(e){var t=[];if(Array.isArray(e))t=e;else if(e&&"number"==typeof e.length)for(var r=0;r<e.length;r++)t.push(e[r]);else t.push(e);return t},r.removeFrom=function(e,t){var r=e.indexOf(t);-1!=r&&e.splice(r,1)},r.getParent=function(e,r){for(;e!=document.body;)if(e=e.parentNode,t(e,r))return e},r.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e},r.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.filterFindElements=function(e,n){e=r.makeArray(e);var o=[];return e.forEach(function(e){if(e instanceof HTMLElement){if(!n)return void o.push(e);t(e,n)&&o.push(e);for(var r=e.querySelectorAll(n),u=0;u<r.length;u++)o.push(r[u])}}),o},r.debounceMethod=function(e,t,r){var n=e.prototype[t],o=t+"Timeout";e.prototype[t]=function(){var e=this[o];e&&clearTimeout(e);var t=arguments,u=this;this[o]=setTimeout(function(){n.apply(u,t),delete u[o]},r||100)}},r.docReady=function(e){var t=document.readyState;"complete"==t||"interactive"==t?e():document.addEventListener("DOMContentLoaded",e)},r.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,r){return t+"-"+r}).toLowerCase()};var n=e.console;return r.htmlInit=function(t,o){r.docReady(function(){var u=r.toDashed(o),a="data-"+u,i=document.querySelectorAll("["+a+"]"),c=document.querySelectorAll(".js-"+u),f=r.makeArray(i).concat(r.makeArray(c)),d=a+"-options",s=e.jQuery;f.forEach(function(e){var r,u=e.getAttribute(a)||e.getAttribute(d);try{r=u&&JSON.parse(u)}catch(i){return void(n&&n.error("Error parsing "+a+" on "+e.className+": "+i))}var c=new t(e,r);s&&s.data(e,o,c)})})},r});
!function(t,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(i){n(t,i)}):"object"==typeof module&&module.exports?module.exports=n(t,require("jquery")):t.jQueryBridget=n(t,t.jQuery)}(window,function(t,n){"use strict";function i(i,r,a){function f(t,n,e){var o,r="$()."+i+'("'+n+'")';return t.each(function(t,f){var c=a.data(f,i);if(!c)return void u(i+" not initialized. Cannot call methods, i.e. "+r);var d=c[n];if(!d||"_"==n.charAt(0))return void u(r+" is not a valid method");var p=d.apply(c,e);o=void 0===o?p:o}),void 0!==o?o:t}function c(t,n){t.each(function(t,e){var o=a.data(e,i);o?(o.option(n),o._init()):(o=new r(e,n),a.data(e,i,o))})}a=a||n||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var n=o.call(arguments,1);return f(this,t,n)}return c(this,t),this},e(a))}function e(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,u="undefined"==typeof r?function(){}:function(t){r.error(t)};return e(n||t.jQuery),i});
!function(t,i){"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter","get-size/get-size"],i):"object"==typeof module&&module.exports?module.exports=i(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=i(t.EvEmitter,t.getSize))}(window,function(t,i){"use strict";function n(t){for(var i in t)return!1;return i=null,!0}function o(t,i){t&&(this.element=t,this.layout=i,this.position={x:0,y:0},this._create())}function e(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],l={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},u=o.prototype=Object.create(t.prototype);u.constructor=o,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},u.getSize=function(){this.size=i(this.element)},u.css=function(t){var i=this.element.style;for(var n in t){var o=l[n]||n;i[o]=t[n]}},u.getPosition=function(){var t=getComputedStyle(this.element),i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=t[i?"left":"right"],e=t[n?"top":"bottom"],s=this.layout.size,r=-1!=o.indexOf("%")?parseFloat(o)/100*s.width:parseInt(o,10),a=-1!=e.indexOf("%")?parseFloat(e)/100*s.height:parseInt(e,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=i?s.paddingLeft:s.paddingRight,a-=n?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},u.layoutPosition=function(){var t=this.layout.size,i={},n=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),e=n?"paddingLeft":"paddingRight",s=n?"left":"right",r=n?"right":"left",a=this.position.x+t[e];i[s]=this.getXValue(a),i[r]="";var h=o?"paddingTop":"paddingBottom",l=o?"top":"bottom",u=o?"bottom":"top",d=this.position.y+t[h];i[l]=this.getYValue(d),i[u]="",this.css(i),this.emitEvent("layout",[this])},u.getXValue=function(t){var i=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!i?t/this.layout.size.width*100+"%":t+"px"},u.getYValue=function(t){var i=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&i?t/this.layout.size.height*100+"%":t+"px"},u._transitionTo=function(t,i){this.getPosition();var n=this.position.x,o=this.position.y,e=parseInt(t,10),s=parseInt(i,10),r=e===this.position.x&&s===this.position.y;if(this.setPosition(t,i),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-n,h=i-o,l={};l.transform=this.getTranslate(a,h),this.transition({to:l,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},u.getTranslate=function(t,i){var n=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=n?t:-t,i=o?i:-i,"translate3d("+t+"px, "+i+"px, 0)"},u.goTo=function(t,i){this.setPosition(t,i),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(t,i){this.position.x=parseInt(t,10),this.position.y=parseInt(i,10)},u._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var i in t.onTransitionEnd)t.onTransitionEnd[i].call(this)},u.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var i=this._transn;for(var n in t.onTransitionEnd)i.onEnd[n]=t.onTransitionEnd[n];for(n in t.to)i.ingProperties[n]=!0,t.isCleaning&&(i.clean[n]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var d="opacity,"+e(a);u.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:d,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},u.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},u.onotransitionend=function(t){this.ontransitionend(t)};var p={"-webkit-transform":"transform"};u.ontransitionend=function(t){if(t.target===this.element){var i=this._transn,o=p[t.propertyName]||t.propertyName;if(delete i.ingProperties[o],n(i.ingProperties)&&this.disableTransition(),o in i.clean&&(this.element.style[t.propertyName]="",delete i.clean[o]),o in i.onEnd){var e=i.onEnd[o];e.call(this),delete i.onEnd[o]}this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},u._removeStyles=function(t){var i={};for(var n in t)i[n]="";this.css(i)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(f)},u.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,i={},n=this.getHideRevealTransitionEndProperty("visibleStyle");i[n]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:i})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(t){var i=this.layout.options[t];if(i.opacity)return"opacity";for(var n in i)return n},u.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,i={},n=this.getHideRevealTransitionEndProperty("hiddenStyle");i[n]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:i})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o});
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,s,o){return e(t,i,n,s,o)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,s){"use strict";function o(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var s=++c;this.element.outlayerGUID=s,f[s]=this,this._create();var o=this._getOption("initLayout");o&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var s=d[n]||1;return i*s}var h=t.console,u=t.jQuery,m=function(){},c=0,f={};o.namespace="outlayer",o.Item=s,o.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var l=o.prototype;n.extend(l,e.prototype),l.option=function(t){n.extend(this.options,t)},l._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},o.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},l._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},l.reloadItems=function(){this.items=this._itemize(this.element.children)},l._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],s=0;s<e.length;s++){var o=e[s],r=new i(o,this);n.push(r)}return n},l._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},l.getItemElements=function(){return this.items.map(function(t){return t.element})},l.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},l._init=l.layout,l._resetLayout=function(){this.getSize()},l.getSize=function(){this.size=i(this.element)},l._getMeasurement=function(t,e){var n,s=this.options[t];s?("string"==typeof s?n=this.element.querySelector(s):s instanceof HTMLElement&&(n=s),this[t]=n?i(n)[e]:s):this[t]=0},l.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},l._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},l._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},l._getItemLayoutPosition=function(){return{x:0,y:0}},l._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},l.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},l._positionItem=function(t,e,i,n,s){n?t.goTo(e,i):(t.stagger(s*this.stagger),t.moveTo(e,i))},l._postLayout=function(){this.resizeContainer()},l.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},l._getContainerSize=m,l._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},l._emitCompleteOnItems=function(t,e){function i(){s.dispatchEvent(t+"Complete",null,[e])}function n(){r++,r==o&&i()}var s=this,o=e.length;if(!e||!o)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},l.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var s=u.Event(e);s.type=t,this.$element.trigger(s,i)}else this.$element.trigger(t,i)},l.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},l.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},l.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},l.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},l._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},l._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},l._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},l._manageStamp=m,l._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,s=i(t),o={left:e.left-n.left-s.marginLeft,top:e.top-n.top-s.marginTop,right:n.right-e.right-s.marginRight,bottom:n.bottom-e.bottom-s.marginBottom};return o},l.handleEvent=n.handleEvent,l.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},l.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},l.onresize=function(){this.resize()},n.debounceMethod(o,"onresize",100),l.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},l.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},l.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},l.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},l.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},l.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},l.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},l.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},l.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},l.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},l.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},l.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},l.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},o.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},o.create=function(t,e){var i=r(o);return i.defaults=n.extend({},o.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},o.compatOptions),i.namespace=t,i.data=o.data,i.Item=r(s),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var d={ms:1,s:1e3};return o.Item=s,o});
!function(e,t){"function"==typeof define&&define.amd?define(["get-size/get-size","outlayer/outlayer"],t):"object"==typeof module&&module.exports?module.exports=t(require("get-size"),require("outlayer")):(e.Isotope=e.Isotope||{},e.Isotope.LayoutMode=t(e.getSize,e.Outlayer))}(window,function(e,t){"use strict";function i(e){this.isotope=e,e&&(this.options=e.options[this.namespace],this.element=e.element,this.items=e.filteredItems,this.size=e.size)}var o=i.prototype,s=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return s.forEach(function(e){o[e]=function(){return t.prototype[e].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var t=e(this.isotope.element),i=this.isotope.size&&t;return i&&t.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(e,t){var i=e+t,o="outer"+t;if(this._getMeasurement(i,o),!this[i]){var s=this.getFirstItemSize();this[i]=s&&s[o]||this.isotope.size["inner"+t]}},o.getFirstItemSize=function(){var t=this.isotope.filteredItems[0];return t&&t.element&&e(t.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(e,t){function s(){i.apply(this,arguments)}return s.prototype=Object.create(o),s.prototype.constructor=s,t&&(s.options=t),s.prototype.namespace=e,i.modes[e]=s,s},i});
!function(t,o){"function"==typeof define&&define.amd?define(["outlayer/outlayer"],o):"object"==typeof module&&module.exports?module.exports=o(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=o(t.Outlayer))}(window,function(t){"use strict";function o(){t.Item.apply(this,arguments)}var e=o.prototype=Object.create(t.Item.prototype),i=e._create;e._create=function(){this.id=this.layout.itemGUID++,i.call(this),this.sortData={}},e.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,o=this.layout._sorters;for(var e in t){var i=o[e];this.sortData[e]=i(this.element,this)}}};var a=e.destroy;return e.destroy=function(){a.apply(this,arguments),this.css({display:""})},o});
!function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","./item","./layout-mode","./layout-modes/masonry","./layout-modes/fit-rows","./layout-modes/vertical"],function(i,r,o,s,n,a){return e(t,i,r,o,s,n,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,r,o,s,n){"use strict";function a(t,e){return function(i,r){for(var o=0;o<t.length;o++){var s=t[o],n=i.sortData[s],a=r.sortData[s];if(n>a||a>n){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(n>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},l=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});l.Item=s,l.LayoutMode=n;var d=l.prototype;d._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in n.modes)this._initLayoutMode(t)},d.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},d._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var r=t[i];r.id=this.itemGUID++}return this._updateItemsSortData(t),t},d._initLayoutMode=function(t){var e=n.modes[t],i=this.options[t]||{};this.options[t]=e.options?o.extend(e.options,i):i,this.modes[t]=new e(this)},d.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},d._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},d._init=d.arrange,d._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},d._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},d._bindArrangeComplete=function(){function t(){e&&i&&r&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}var e,i,r,o=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){r=!0,t()})},d._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],r=[],o=[],s=this._getFilterTest(e),n=0;n<t.length;n++){var a=t[n];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?r.push(a):u||a.isHidden||o.push(a)}}return{matches:i,needReveal:r,needHide:o}},d._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},d.updateSortData=function(t){var e;t?(t=o.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},d._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=m(i)}},d._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var r=t[i];r.updateSortData()}};var m=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),r=i[0],o=r.match(/^\[(.+)\]$/),s=o&&o[1],n=e(s,r),a=l.sortDataParsers[i[1]];return t=a?function(t){return t&&a(n(t))}:function(t){return t&&n(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();l.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},d._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},d._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},d._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d._manageStamp=function(t){this._mode()._manageStamp(t)},d._getContainerSize=function(){return this._mode()._getContainerSize()},d.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},d.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},d._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},d.insert=function(t){var e=this.addItems(t);if(e.length){var i,r,o=e.length;for(i=0;o>i;i++)r=e[i],this.element.appendChild(r.element);var s=this._filter(e).matches;for(i=0;o>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;o>i;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var f=d.remove;return d.remove=function(t){t=o.makeArray(t);var e=this.getItems(t);f.call(this,t);for(var i=e&&e.length,r=0;i&&i>r;r++){var s=e[r];o.removeFrom(this.filteredItems,s)}},d.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var r=t.apply(this,e);return this.options.transitionDuration=i,r},d.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},l});
!function(t,e){"function"==typeof define&&define.amd?define(["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e});
!function(t,e){"function"==typeof define&&define.amd?define(["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),o=e.prototype;return o._resetLayout=function(){this.y=0},o._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,o=this.y;return this.y+=t.size.outerHeight,{x:e,y:o}},o._getContainerSize=function(){return{height:this.y}},e});
!function(t,i){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],i):"object"==typeof module&&module.exports?module.exports=i(require("outlayer"),require("get-size")):t.Masonry=i(t.Outlayer,t.getSize)}(window,function(t,i){"use strict";var e=t.create("masonry");return e.compatOptions.fitWidth="isFitWidth",e.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},e.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],e=t&&t.element;this.columnWidth=e&&i(e).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,h=this.containerWidth+this.gutter,s=h/o,n=o-h%o,r=n&&1>n?"round":"floor";s=Math[r](s),this.cols=Math.max(s,1)},e.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),e=t?this.element.parentNode:this.element,o=i(e);this.containerWidth=o&&o.innerWidth},e.prototype._getItemLayoutPosition=function(t){t.getSize();var i=t.size.outerWidth%this.columnWidth,e=i&&1>i?"round":"ceil",o=Math[e](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var h=this._getColGroup(o),s=Math.min.apply(Math,h),n=h.indexOf(s),r={x:this.columnWidth*n,y:s},a=s+t.size.outerHeight,u=this.cols+1-h.length,l=0;u>l;l++)this.colYs[n+l]=a;return r},e.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var i=[],e=this.cols+1-t,o=0;e>o;o++){var h=this.colYs.slice(o,o+t);i[o]=Math.max.apply(Math,h)}return i},e.prototype._manageStamp=function(t){var e=i(t),o=this._getElementOffset(t),h=this._getOption("originLeft"),s=h?o.left:o.right,n=s+e.outerWidth,r=Math.floor(s/this.columnWidth);r=Math.max(0,r);var a=Math.floor(n/this.columnWidth);a-=n%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=this._getOption("originTop"),l=(u?o.top:o.bottom)+e.outerHeight,c=r;a>=c;c++)this.colYs[c]=Math.max(l,this.colYs[c])},e.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},e.prototype._getContainerFitWidth=function(){for(var t=0,i=this.cols;--i&&0===this.colYs[i];)t++;return(this.cols-t)*this.columnWidth-this.gutter},e.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},e});
!function(t,o){"function"==typeof define&&define.amd?define(["../layout-mode","masonry/masonry"],o):"object"==typeof module&&module.exports?module.exports=o(require("../layout-mode"),require("masonry-layout")):o(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,o){"use strict";var e=t.create("masonry"),i=e.prototype,s={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var n in o.prototype)s[n]||(i[n]=o.prototype[n]);var r=i.measureColumns;i.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var u=i._getOption;return i._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:u.apply(this.isotope,arguments)},e});
!function(t,e){"function"==typeof define&&define.amd?define(["isotope/js/layout-mode"],e):"object"==typeof exports?module.exports=e(require("isotope-layout/js/layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("cellsByColumn"),i=e.prototype;return i._resetLayout=function(){this.itemIndex=0,this.getColumnWidth(),this.getRowHeight(),this.rows=Math.floor(this.isotope.size.innerHeight/this.rowHeight),this.rows=Math.max(this.rows,1)},i._getItemLayoutPosition=function(t){t.getSize();var e=Math.floor(this.itemIndex/this.rows),i=this.itemIndex%this.rows,o=(e+.5)*this.columnWidth-t.size.outerWidth/2,s=(i+.5)*this.rowHeight-t.size.outerHeight/2;return this.itemIndex++,{x:o,y:s}},i._getContainerSize=function(){return{width:Math.ceil(this.itemIndex/this.rows)*this.columnWidth}},i.needsResizeLayout=function(){return this.needsVerticalResizeLayout()},e});
!function(t,e){"function"==typeof define&&define.amd?define(["isotope/js/layout-mode"],e):"object"==typeof exports?module.exports=e(require("isotope-layout/js/layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("cellsByRow"),i=e.prototype;return i._resetLayout=function(){this.itemIndex=0,this.getColumnWidth(),this.getRowHeight(),this.cols=Math.floor(this.isotope.size.innerWidth/this.columnWidth),this.cols=Math.max(this.cols,1)},i._getItemLayoutPosition=function(t){t.getSize();var e=this.itemIndex%this.cols,i=Math.floor(this.itemIndex/this.cols),o=(e+.5)*this.columnWidth-t.size.outerWidth/2,s=(i+.5)*this.rowHeight-t.size.outerHeight/2;return this.itemIndex++,{x:o,y:s}},i._getContainerSize=function(){return{height:Math.ceil(this.itemIndex/this.cols)*this.rowHeight}},e});
!function(t,e){"function"==typeof define&&define.amd?define(["isotope/js/layout-mode"],e):"object"==typeof exports?module.exports=e(require("isotope-layout/js/layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitColumns"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxX=0},i._getItemLayoutPosition=function(t){t.getSize(),0!==this.y&&t.size.outerHeight+this.y>this.isotope.size.innerHeight&&(this.y=0,this.x=this.maxX);var e={x:this.x,y:this.y};return this.maxX=Math.max(this.maxX,this.x+t.size.outerWidth),this.y+=t.size.outerHeight,e},i._getContainerSize=function(){return{width:this.maxX}},i.needsResizeLayout=function(){return this.needsVerticalResizeLayout()},e});
!function(e,t){"function"==typeof define&&define.amd?define(["isotope/js/layout-mode"],t):"object"==typeof exports?module.exports=t(require("isotope-layout/js/layout-mode")):t(e.Isotope.LayoutMode)}(window,function(e){"use strict";var t=e.create("horiz",{verticalAlignment:0}),i=t.prototype;return i._resetLayout=function(){this.x=0},i._getItemLayoutPosition=function(e){e.getSize();var t=(this.isotope.size.innerHeight-e.size.outerHeight)*this.options.verticalAlignment,i=this.x;return this.x+=e.size.outerWidth,{x:i,y:t}},i._getContainerSize=function(){return{width:this.x}},i.needsResizeLayout=function(){return this.needsVerticalResizeLayout()},t});
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["get-size/get-size","isotope/js/layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("isotope-layout/js/layout-mode")):e(t.getSize,t.Isotope.LayoutMode)}(window,function(t,e){"use strict";var i=e.create("masonryHorizontal"),o=i.prototype;return o._resetLayout=function(){this.getRowHeight(),this._getMeasurement("gutter","outerHeight"),this.rowHeight+=this.gutter,this.rows=Math.floor((this.isotope.size.innerHeight+this.gutter)/this.rowHeight),this.rows=Math.max(this.rows,1);var t=this.rows;for(this.rowXs=[];t--;)this.rowXs.push(0);this.maxX=0},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerHeight%this.rowHeight,i=e&&1>e?"round":"ceil",o=Math[i](t.size.outerHeight/this.rowHeight);o=Math.min(o,this.rows);for(var r=this._getRowGroup(o),s=Math.min.apply(Math,r),h=r.indexOf(s),a={x:s,y:this.rowHeight*h},n=s+t.size.outerWidth,u=this.rows+1-r.length,g=0;u>g;g++)this.rowXs[h+g]=n;return a},o._getRowGroup=function(t){if(2>t)return this.rowXs;for(var e=[],i=this.rows+1-t,o=0;i>o;o++){var r=this.rowXs.slice(o,o+t);e[o]=Math.max.apply(Math,r)}return e},o._manageStamp=function(e){var i=t(e),o=this.isotope._getElementOffset(e),r=this._getOption("originTop")?o.top:o.bottom,s=r+i.outerHeight,h=Math.floor(r/this.rowHeight);h=Math.max(0,h);var a=Math.floor(s/this.rowHeight);a=Math.min(this.rows-1,a);for(var n=(this._getOption("originLeft")?o.left:o.right)+i.outerWidth,u=h;a>=u;u++)this.rowXs[u]=Math.max(n,this.rowXs[u])},o._getContainerSize=function(){return this.maxX=Math.max.apply(Math,this.rowXs),{width:this.maxX}},o.needsResizeLayout=function(){return this.needsVerticalResizeLayout()},i});
!function(t,h){"function"==typeof define&&define.amd?define(h):"object"==typeof module&&module.exports?module.exports=h():(t.Packery=t.Packery||{},t.Packery.Rect=h())}(window,function(){"use strict";function t(h){for(var i in t.defaults)this[i]=t.defaults[i];for(i in h)this[i]=h[i]}t.defaults={x:0,y:0,width:0,height:0};var h=t.prototype;return h.contains=function(t){var h=t.width||0,i=t.height||0;return this.x<=t.x&&this.y<=t.y&&this.x+this.width>=t.x+h&&this.y+this.height>=t.y+i},h.overlaps=function(t){var h=this.x+this.width,i=this.y+this.height,e=t.x+t.width,s=t.y+t.height;return this.x<e&&h>t.x&&this.y<s&&i>t.y},h.getMaximalFreeRects=function(h){if(!this.overlaps(h))return!1;var i,e=[],s=this.x+this.width,n=this.y+this.height,r=h.x+h.width,y=h.y+h.height;return this.y<h.y&&(i=new t({x:this.x,y:this.y,width:this.width,height:h.y-this.y}),e.push(i)),s>r&&(i=new t({x:r,y:this.y,width:s-r,height:this.height}),e.push(i)),n>y&&(i=new t({x:this.x,y:y,width:this.width,height:n-y}),e.push(i)),this.x<h.x&&(i=new t({x:this.x,y:this.y,width:h.x-this.x,height:this.height}),e.push(i)),e},h.canFit=function(t){return this.width>=t.width&&this.height>=t.height},t});
!function(t,e){if("function"==typeof define&&define.amd)define(["./rect"],e);else if("object"==typeof module&&module.exports)module.exports=e(require("./rect"));else{var i=t.Packery=t.Packery||{};i.Packer=e(i.Rect)}}(window,function(t){"use strict";function e(t,e,i){this.width=t||0,this.height=e||0,this.sortDirection=i||"downwardLeftToRight",this.reset()}var i=e.prototype;i.reset=function(){this.spaces=[];var e=new t({x:0,y:0,width:this.width,height:this.height});this.spaces.push(e),this.sorter=s[this.sortDirection]||s.downwardLeftToRight},i.pack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.canFit(t)){this.placeInSpace(t,i);break}}},i.columnPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e],s=i.x<=t.x&&i.x+i.width>=t.x+t.width&&i.height>=t.height-.01;if(s){t.y=i.y,this.placed(t);break}}},i.rowPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e],s=i.y<=t.y&&i.y+i.height>=t.y+t.height&&i.width>=t.width-.01;if(s){t.x=i.x,this.placed(t);break}}},i.placeInSpace=function(t,e){t.x=e.x,t.y=e.y,this.placed(t)},i.placed=function(t){for(var e=[],i=0;i<this.spaces.length;i++){var s=this.spaces[i],r=s.getMaximalFreeRects(t);r?e.push.apply(e,r):e.push(s)}this.spaces=e,this.mergeSortSpaces()},i.mergeSortSpaces=function(){e.mergeRects(this.spaces),this.spaces.sort(this.sorter)},i.addSpace=function(t){this.spaces.push(t),this.mergeSortSpaces()},e.mergeRects=function(t){var e=0,i=t[e];t:for(;i;){for(var s=0,r=t[e+s];r;){if(r==i)s++;else{if(r.contains(i)){t.splice(e,1),i=t[e];continue t}i.contains(r)?t.splice(e+s,1):s++}r=t[e+s]}e++,i=t[e]}return t};var s={downwardLeftToRight:function(t,e){return t.y-e.y||t.x-e.x},rightwardTopToBottom:function(t,e){return t.x-e.x||t.y-e.y}};return e});
!function(e,t){"function"==typeof define&&define.amd?define(["outlayer/outlayer","./rect"],t):"object"==typeof module&&module.exports?module.exports=t(require("outlayer"),require("./rect")):e.Packery.Item=t(e.Outlayer,e.Packery.Rect)}(window,function(e,t){"use strict";var i=document.documentElement.style,o="string"==typeof i.transform?"transform":"WebkitTransform",s=function(){e.Item.apply(this,arguments)},r=s.prototype=Object.create(e.Item.prototype),n=r._create;r._create=function(){n.call(this),this.rect=new t};var a=r.moveTo;return r.moveTo=function(e,t){var i=Math.abs(this.position.x-e),o=Math.abs(this.position.y-t),s=this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>i&&1>o;return s?void this.goTo(e,t):void a.apply(this,arguments)},r.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&o&&(this.element.style[o]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},r.disablePlacing=function(){this.isPlacing=!1},r.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},r.showDropPlaceholder=function(){var e=this.dropPlaceholder;e||(e=this.dropPlaceholder=document.createElement("div"),e.className="packery-drop-placeholder",e.style.position="absolute"),e.style.width=this.size.width+"px",e.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(e)},r.positionDropPlaceholder=function(){this.dropPlaceholder.style[o]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},r.hideDropPlaceholder=function(){var e=this.dropPlaceholder.parentNode;e&&e.removeChild(this.dropPlaceholder)},s});
!function(t,i){"function"==typeof define&&define.amd?define(["get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],i):"object"==typeof module&&module.exports?module.exports=i(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):t.Packery=i(t.getSize,t.Outlayer,t.Packery.Rect,t.Packery.Packer,t.Packery.Item)}(window,function(t,i,e,s,r){"use strict";function h(t,i){return t.position.y-i.position.y||t.position.x-i.position.x}function a(t,i){return t.position.x-i.position.x||t.position.y-i.position.y}function n(t,i){var e=i.x-t.x,s=i.y-t.y;return Math.sqrt(e*e+s*s)}e.prototype.canFit=function(t){return this.width>=t.width-1&&this.height>=t.height-1};var o=i.create("packery");o.Item=r;var g=o.prototype;g._create=function(){i.prototype._create.call(this),this.packer=new s,this.shiftPacker=new s,this.isEnabled=!0,this.dragItemCount=0;var t=this;this.handleDraggabilly={dragStart:function(){t.itemDragStart(this.element)},dragMove:function(){t.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){t.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(i,e){e&&t.itemDragStart(i.currentTarget)},drag:function(i,e){e&&t.itemDragMove(i.currentTarget,e.position.left,e.position.top)},stop:function(i,e){e&&t.itemDragEnd(i.currentTarget)}}},g._resetLayout=function(){this.getSize(),this._getMeasurements();var t,i,e;this._getOption("horizontal")?(t=1/0,i=this.size.innerHeight+this.gutter,e="rightwardTopToBottom"):(t=this.size.innerWidth+this.gutter,i=1/0,e="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=t,this.packer.height=this.shiftPacker.height=i,this.packer.sortDirection=this.shiftPacker.sortDirection=e,this.packer.reset(),this.maxY=0,this.maxX=0},g._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},g._getItemLayoutPosition=function(t){if(this._setRectSize(t.element,t.rect),this.isShifting||this.dragItemCount>0){var i=this._getPackMethod();this.packer[i](t.rect)}else this.packer.pack(t.rect);return this._setMaxXY(t.rect),t.rect},g.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},g._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},g._setMaxXY=function(t){this.maxX=Math.max(t.x+t.width,this.maxX),this.maxY=Math.max(t.y+t.height,this.maxY)},g._setRectSize=function(i,e){var s=t(i),r=s.outerWidth,h=s.outerHeight;(r||h)&&(r=this._applyGridGutter(r,this.columnWidth),h=this._applyGridGutter(h,this.rowHeight)),e.width=Math.min(r,this.packer.width),e.height=Math.min(h,this.packer.height)},g._applyGridGutter=function(t,i){if(!i)return t+this.gutter;i+=this.gutter;var e=t%i,s=e&&1>e?"round":"ceil";return t=Math[s](t/i)*i},g._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},g._manageStamp=function(t){var i,s=this.getItem(t);if(s&&s.isPlacing)i=s.rect;else{var r=this._getElementOffset(t);i=new e({x:this._getOption("originLeft")?r.left:r.right,y:this._getOption("originTop")?r.top:r.bottom})}this._setRectSize(t,i),this.packer.placed(i),this._setMaxXY(i)},g.sortItemsByPosition=function(){var t=this._getOption("horizontal")?a:h;this.items.sort(t)},g.fit=function(t,i,e){var s=this.getItem(t);s&&(this.stamp(s.element),s.enablePlacing(),this.updateShiftTargets(s),i=void 0===i?s.rect.x:i,e=void 0===e?s.rect.y:e,this.shift(s,i,e),this._bindFitEvents(s),s.moveTo(s.rect.x,s.rect.y),this.shiftLayout(),this.unstamp(s.element),this.sortItemsByPosition(),s.disablePlacing())},g._bindFitEvents=function(t){function i(){s++,2==s&&e.dispatchEvent("fitComplete",null,[t])}var e=this,s=0;t.once("layout",i),this.once("layoutComplete",i)},g.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},g.needsResizeLayout=function(){var i=t(this.element),e=this._getOption("horizontal")?"innerHeight":"innerWidth";return i[e]!=this.size[e]},g.resizeShiftPercentLayout=function(){var i=this._getItemsForLayout(this.items),e=this._getOption("horizontal"),s=e?"y":"x",r=e?"height":"width",h=e?"rowHeight":"columnWidth",a=e?"innerHeight":"innerWidth",n=this[h];if(n=n&&n+this.gutter){this._getMeasurements();var o=this[h]+this.gutter;i.forEach(function(t){var i=Math.round(t.rect[s]/n);t.rect[s]=i*o})}else{var g=t(this.element)[a]+this.gutter,c=this.packer[r];i.forEach(function(t){t.rect[s]=t.rect[s]/c*g})}this.shiftLayout()},g.itemDragStart=function(t){if(this.isEnabled){this.stamp(t);var i=this.getItem(t);i&&(i.enablePlacing(),i.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(i))}},g.updateShiftTargets=function(t){this.shiftPacker.reset(),this._getBoundingRect();var i=this._getOption("originLeft"),s=this._getOption("originTop");this.stamps.forEach(function(t){var r=this.getItem(t);if(!r||!r.isPlacing){var h=this._getElementOffset(t),a=new e({x:i?h.left:h.right,y:s?h.top:h.bottom});this._setRectSize(t,a),this.shiftPacker.placed(a)}},this);var r=this._getOption("horizontal"),h=r?"rowHeight":"columnWidth",a=r?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var n,o=this[h];if(o=o&&o+this.gutter){var g=Math.ceil(t.rect[a]/o),c=Math.floor((this.shiftPacker[a]+this.gutter)/o);n=(c-g)*o;for(var u=0;c>u;u++)this._addShiftTarget(u*o,0,n)}else n=this.shiftPacker[a]+this.gutter-t.rect[a],this._addShiftTarget(0,0,n);var d=this._getItemsForLayout(this.items),f=this._getPackMethod();d.forEach(function(t){var i=t.rect;this._setRectSize(t.element,i),this.shiftPacker[f](i),this._addShiftTarget(i.x,i.y,n);var e=r?i.x+i.width:i.x,s=r?i.y:i.y+i.height;if(this._addShiftTarget(e,s,n),o)for(var h=Math.round(i[a]/o),g=1;h>g;g++){var c=r?e:i.x+o*g,u=r?i.y+o*g:s;this._addShiftTarget(c,u,n)}},this)},g._addShiftTarget=function(t,i,e){var s=this._getOption("horizontal")?i:t;if(!(0!==s&&s>e)){var r=t+","+i,h=-1!=this.shiftTargetKeys.indexOf(r);h||(this.shiftTargetKeys.push(r),this.shiftTargets.push({x:t,y:i}))}},g.shift=function(t,i,e){var s,r=1/0,h={x:i,y:e};this.shiftTargets.forEach(function(t){var i=n(t,h);r>i&&(s=t,r=i)}),t.rect.x=s.x,t.rect.y=s.y};var c=120;g.itemDragMove=function(t,i,e){function s(){h.shift(r,i,e),r.positionDropPlaceholder(),h.layout()}var r=this.isEnabled&&this.getItem(t);if(r){i-=this.size.paddingLeft,e-=this.size.paddingTop;var h=this,a=new Date;this._itemDragTime&&a-this._itemDragTime<c?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(s,c)):(s(),this._itemDragTime=a)}},g.itemDragEnd=function(t){function i(){s++,2==s&&(e.element.classList.remove("is-positioning-post-drag"),e.hideDropPlaceholder(),r.dispatchEvent("dragItemPositioned",null,[e]))}var e=this.isEnabled&&this.getItem(t);if(e){clearTimeout(this.dragTimeout),e.element.classList.add("is-positioning-post-drag");var s=0,r=this;e.once("layout",i),this.once("layoutComplete",i),e.moveTo(e.rect.x,e.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),e.disablePlacing(),this.unstamp(e.element)}},g.bindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"on")},g.unbindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"off")},g._bindDraggabillyEvents=function(t,i){var e=this.handleDraggabilly;t[i]("dragStart",e.dragStart),t[i]("dragMove",e.dragMove),t[i]("dragEnd",e.dragEnd)},g.bindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"on")},g.unbindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"off")},g._bindUIDraggableEvents=function(t,i){var e=this.handleUIDraggable;t[i]("dragstart",e.start)[i]("drag",e.drag)[i]("dragstop",e.stop)};var u=g.destroy;return g.destroy=function(){u.apply(this,arguments),this.isEnabled=!1},o.Rect=e,o.Packer=s,o});
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["isotope/js/layout-mode","packery/js/packery"],e):"object"==typeof module&&module.exports?module.exports=e(require("isotope-layout/js/layout-mode"),require("packery")):e(t.Isotope.LayoutMode,t.Packery)}(window,function(t,e){"use strict";var o=t.create("packery"),i=o.prototype,r={_getElementOffset:!0,_getMeasurement:!0};for(var s in e.prototype)r[s]||(i[s]=e.prototype[s]);var n=i._resetLayout;i._resetLayout=function(){this.packer=this.packer||new e.Packer,this.shiftPacker=this.shiftPacker||new e.Packer,n.apply(this,arguments)};var a=i._getItemLayoutPosition;i._getItemLayoutPosition=function(t){return t.rect=t.rect||new e.Rect,a.call(this,t)};var p=i.needsResizeLayout;i.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():p.call(this)};var u=i._getOption;return i._getOption=function(t){return"horizontal"==t?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:u.apply(this.isotope,arguments)},o});
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){"use strict";function i(t,e){for(var i in e)t[i]=e[i];return t}function o(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function r(t,e,n){return this instanceof r?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=o(t),this.options=i({},this.options),"function"==typeof e?n=e:i(this.options,e),n&&this.on("always",n),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new r(t,e,n)}function n(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;r.prototype=Object.create(e.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),o=0;o<i.length;o++){var r=i[o];this.addImage(r)}if("string"==typeof this.options.background){var n=t.querySelectorAll(this.options.background);for(o=0;o<n.length;o++){var s=n[o];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return r.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,o=i.exec(e.backgroundImage);null!==o;){var r=o&&o[2];r&&this.addBackground(r,t),o=i.exec(e.backgroundImage)}},r.prototype.addImage=function(t){var e=new n(t);this.images.push(e)},r.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},r.prototype.check=function(){function t(t,i,o){setTimeout(function(){e.progress(t,i,o)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},r.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},r.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},n.prototype=Object.create(e.prototype),n.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},n.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},n.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},n.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},n.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(n.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},r.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new r(this,t,e);return i.jqDeferred.promise(h(this))})},r.makeJQueryPlugin(),r});
!function(i){"use strict";var n=i.ID={};n.modules={}}(window);
!function(e){var r="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):r&&(r.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return r.hljs}))}(function(e){function r(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function n(e,r){var t=e&&e.exec(r);return t&&0==t.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function c(e){var r,t,n,c=e.className+" ";if(c+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/i.exec(c))return E(t[1])?t[1]:"no-highlight";for(c=c.split(/\s+/),r=0,n=c.length;n>r;r++)if(E(c[r])||a(c[r]))return c[r]}function i(e,r){var t,n={};for(t in e)n[t]=e[t];if(r)for(t in r)n[t]=r[t];return n}function o(e){var r=[];return function n(e,a){for(var c=e.firstChild;c;c=c.nextSibling)3==c.nodeType?a+=c.nodeValue.length:1==c.nodeType&&(r.push({event:"start",offset:a,node:c}),a=n(c,a),t(c).match(/br|hr|img|input/)||r.push({event:"stop",offset:a,node:c}));return a}(e,0),r}function s(e,n,a){function c(){return e.length&&n.length?e[0].offset!=n[0].offset?e[0].offset<n[0].offset?e:n:"start"==n[0].event?e:n:e.length?e:n}function i(e){function n(e){return" "+e.nodeName+'="'+r(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,n).join("")+">"}function o(e){l+="</"+t(e)+">"}function s(e){("start"==e.event?i:o)(e.node)}for(var u=0,l="",f=[];e.length||n.length;){var b=c();if(l+=r(a.substr(u,b[0].offset-u)),u=b[0].offset,b==e){f.reverse().forEach(o);do s(b.splice(0,1)[0]),b=c();while(b==e&&b.length&&b[0].offset==u);f.reverse().forEach(i)}else"start"==b[0].event?f.push(b[0].node):f.pop(),s(b.splice(0,1)[0])}return l+r(a.substr(u))}function u(e){function r(e){return e&&e.source||e}function t(t,n){return new RegExp(r(t),"m"+(e.cI?"i":"")+(n?"g":""))}function n(a,c){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},s=function(r,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[r,t[1]?Number(t[1]):1]})};"string"==typeof a.k?s("keyword",a.k):Object.keys(a.k).forEach(function(e){s(e,a.k[e])}),a.k=o}a.lR=t(a.l||/\w+/,!0),c&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=r(a.e)||"",a.eW&&c.tE&&(a.tE+=(a.e?"|":"")+c.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(r){u.push(i(e,r))}):u.push("self"==e?a:e)}),a.c=u,a.c.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,c);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(r).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}n(e)}function l(e,t,a,c){function i(e,r){for(var t=0;t<r.c.length;t++)if(n(r.c[t].bR,e))return r.c[t]}function o(e,r){if(n(e.eR,r)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?o(e.parent,r):void 0}function s(e,r){return!a&&n(r.iR,e)}function b(e,r){var t=N.cI?r[0].toLowerCase():r[0];return e.k.hasOwnProperty(t)&&e.k[t]}function g(e,r,t,n){var a=n?"":w.classPrefix,c='<span class="'+a,i=t?"":"</span>";return c+=e+'">',c+r+i}function p(){if(!C.k)return r(k);var e="",t=0;C.lR.lastIndex=0;for(var n=C.lR.exec(k);n;){e+=r(k.substr(t,n.index-t));var a=b(C,n);a?(A+=a[1],e+=g(a[0],r(n[0]))):e+=r(n[0]),t=C.lR.lastIndex,n=C.lR.exec(k)}return e+r(k.substr(t))}function d(){var e="string"==typeof C.sL;if(e&&!y[C.sL])return r(k);var t=e?l(C.sL,k,!0,R[C.sL]):f(k,C.sL.length?C.sL:void 0);return C.r>0&&(A+=t.r),e&&(R[C.sL]=t.top),g(t.language,t.value,!1,!0)}function h(){x+=void 0!==C.sL?d():p(),k=""}function m(e,r){x+=e.cN?g(e.cN,"",!0):"",C=Object.create(e,{parent:{value:C}})}function v(e,r){if(k+=e,void 0===r)return h(),0;var t=i(r,C);if(t)return t.skip?k+=r:(t.eB&&(k+=r),h(),t.rB||t.eB||(k=r)),m(t,r),t.rB?0:r.length;var n=o(C,r);if(n){var a=C;a.skip?k+=r:(a.rE||a.eE||(k+=r),h(),a.eE&&(k=r));do C.cN&&(x+="</span>"),C.skip||(A+=C.r),C=C.parent;while(C!=n.parent);return n.starts&&m(n.starts,""),a.rE?0:r.length}if(s(r,C))throw new Error('Illegal lexeme "'+r+'" for mode "'+(C.cN||"<unnamed>")+'"');return k+=r,r.length||1}var N=E(e);if(!N)throw new Error('Unknown language: "'+e+'"');u(N);var M,C=c||N,R={},x="";for(M=C;M!=N;M=M.parent)M.cN&&(x=g(M.cN,"",!0)+x);var k="",A=0;try{for(var S,B,L=0;C.t.lastIndex=L,S=C.t.exec(t),S;)B=v(t.substr(L,S.index-L),S[0]),L=S.index+B;for(v(t.substr(L)),M=C;M.parent;M=M.parent)M.cN&&(x+="</span>");return{r:A,value:x,language:e,top:C}}catch(I){if(-1!=I.message.indexOf("Illegal"))return{r:0,value:r(t)};throw I}}function f(e,t){t=t||w.languages||Object.keys(y);var n={r:0,value:r(e)},a=n;return t.filter(E).forEach(function(r){var t=l(r,e,!1);t.language=r,t.r>a.r&&(a=t),t.r>n.r&&(a=n,n=t)}),a.language&&(n.second_best=a),n}function b(e){return w.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,r){return r.replace(/\t/g,w.tabReplace)})),w.useBR&&(e=e.replace(/\n/g,"<br>")),e}function g(e,r,t){var n=r?M[r]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(n)&&a.push(n),a.join(" ").trim()}function p(e){var r=c(e);if(!a(r)){var t;w.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var n=t.textContent,i=r?l(r,n,!0):f(n),u=o(t);if(u.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=i.value,i.value=s(u,o(p),n)}i.value=b(i.value),e.innerHTML=i.value,e.className=g(e.className,r,i.language),e.result={language:i.language,re:i.r},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.r})}}function d(e){w=i(w,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function m(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function v(r,t){var n=y[r]=t(e);n.aliases&&n.aliases.forEach(function(e){M[e]=r})}function N(){return Object.keys(y)}function E(e){return e=(e||"").toLowerCase(),y[e]||y[M[e]]}var w={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},y={},M={};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=b,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=m,e.registerLanguage=v,e.listLanguages=N,e.getLanguage=E,e.inherit=i,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(r,t,n){var a=e.inherit({cN:"comment",b:r,e:t,c:[]},n||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("css",function(e){var r="[a-zA-Z-][a-zA-Z0-9_-]*",t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:r,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}}),hljs.registerLanguage("javascript",function(e){return{aliases:["js","jsx"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:["self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:[e.CLCM,e.CBCM]}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),hljs.registerLanguage("json",function(e){var r={literal:"true false null"},t=[e.QSM,e.CNM],n={e:",",eW:!0,eE:!0,c:t,k:r},a={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(n,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(n)],i:"\\S"};return t.splice(t.length,0,a,c),{c:t,k:r,i:"\\S"}}),hljs.registerLanguage("xml",function(e){var r="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:r,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}});
!function(){"use strict";ID.getItemElement=function(){var t=document.createElement("div"),i=Math.random(),e=Math.random(),n=i>.8?"grid-item--width3":i>.6?"grid-item--width2":"",r=e>.8?"grid-item--height3":e>.5?"grid-item--height2":"";return t.className="grid-item "+n+" "+r,t},hljs.configure({classPrefix:""}),$.fn.displayIsotopeCode=function(t,i){i="string"==typeof i&&-1===i.indexOf("function")?"'"+i+"'":i;var e="$grid.isotope({ "+t+": "+i+" })";e=hljs.highlight("js",e).value,this.html(e)}}();
ID.modules["commercial-license-agreement"]=function(e){"use strict";function t(e){var t=o.querySelector(".is-selected");t&&t.classList.remove("is-selected"),e.classList.add("is-selected");for(var n=e.getAttribute("data-license-option"),i=r[n],a=0,s=l.length;s>a;a++){var c=l[a];c.element.textContent=i[c.property]}}var r={developer:{title:"Developer","for-official":"one (1) Licensed Developer","for-plain":"one individual Developer"},team:{title:"Team","for-official":"up to eight (8) Licensed Developer(s)","for-plain":"up to 8 Developers"},organization:{title:"Organization","for-official":"an unlimited number of Licensed Developer(s)","for-plain":"an unlimited number of Developers"}},o=e.querySelector(".button-group"),n=e.querySelector("h2"),i=n.cloneNode(!0);i.style.borderTop="none",i.style.marginTop=0,i.id="",n.textContent="",o.parentNode.insertBefore(i,o.nextSibling);for(var l=[],a=e.querySelectorAll("[data-license-property]"),s=0,c=a.length;c>s;s++){var p=a[s],d={property:p.getAttribute("data-license-property"),element:p};l.push(d)}t(o.querySelector(".button--developer")),o.addEventListener("click",function(e){matchesSelector(e.target,".button")&&t(e.target)})};
ID.modules["fizzy-bear-shirt"]=function(e){"use strict";var t=new Date(2016,5,9),r=Math.round((t-new Date)/864e5);e.querySelector(".fizzy-bear-shirt__title").textContent="Rainbow bear shirts. Only on sale for "+r+" more days."};
ID.modules["gh-button"]=function(t){function e(t){return t.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1,")}var a="metafizzy",o="isotope",n="ghButtonCallback"+Math.floor(1e4*Math.random());window[n]=function(a){var o=e(a.data.stargazers_count);t.querySelector(".gh-button__stat__text").textContent=o};var r=document.createElement("script");r.src="https://api.github.com/repos/"+a+"/"+o+"?callback="+n,document.head.appendChild(r)};
ID.modules["hero-demo"]=function(t){"use strict";var e=$(t),n=e.find(".grid").isotope({itemSelector:".element-item",layoutMode:"fitRows",transitionDuration:"0.6s",getSortData:{name:".name",symbol:".symbol",number:".number parseInt",category:"[data-category]",weight:function(t){var e=$(t).find(".weight").text();return parseFloat(e.replace(/[\(\)]/g,""))}}}),r={numberGreaterThan50:function(){var t=$(this).find(".number").text();return parseInt(t,10)>50},ium:function(){var t=$(this).find(".name").text();return t.match(/ium$/)}},i={numberGreaterThan50:"function(){\n  var number=$(this).find('.number').text();\n  return parseInt(number, 10) > 50;\n}",ium:"function(){\n  var name=$(this).find('.name').text();\n  return name.match(/ium$/);\n}"},o=e.find(".code-display code");e.find(".sort-by").on("click","button",function(){var t=$(this).attr("data-sort-by");n.isotope({sortBy:t}),o.displayIsotopeCode("sortBy",t)}),e.find(".filters").on("click","button",function(){var t=$(this).attr("data-filter"),e=r[t]||t,a=i[t]||t;n.isotope({filter:e}),o.displayIsotopeCode("filter",a)})};
ID.modules["in-use-grid"]=function(e){"use strict";var i=$(e);i.find(".in-use-grid__item").hide(),i.isotope({itemSelector:"none",masonry:{columnWidth:".grid-sizer",gutter:".gutter-sizer"}}),i.isotope("option",{itemSelector:".in-use-grid__item"}),i.imagesLoaded().progress(function(e,t){var o=$(t.img).parents(".in-use-grid__item");o.show(),i.isotope("appended",o)})};
ID.modules.notification=function(t){"use strict";function n(){var t=new Date,n=e(t.getMinutes()),i=e(t.getSeconds());return[t.getHours(),n,i].join(":")}function e(t){return 10>t?"0"+t:t}function i(){t.style[c]="opacity 1.0s",t.style.opacity="0"}var o,s=document.documentElement,c="string"==typeof s.style.transition?"transition":"WebkitTransition";ID.notify=function(e){t.textContent=e+" at "+n(),t.style[c]="none",t.style.display="block",t.style.opacity="1",clearTimeout(o),o=setTimeout(i,1e3)}};
!function(){"use strict";function t(t){this.element=t,this.originalY=this.element.getBoundingClientRect().top+window.pageYOffset,window.addEventListener("scroll",this),this.isFixed=!1,this.onscroll()}function i(t,i,e){var n=t.prototype[i],o=i+"Timeout";t.prototype[i]=function(){if(!this[o]){n.apply(this,arguments);var t=this;this[o]=setTimeout(function(){n.apply(t,arguments),delete t[o]},e||100)}}}ID.modules["page-nav"]=function(i){var e=getSize(i).outerHeight;window.innerWidth<768||e>=window.innerHeight||new t(i)},t.prototype.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},t.prototype.onscroll=function(){var t=window.pageYOffset>=this.originalY;t!==this.isFixed&&(this.element.classList.toggle("is-fixed"),this.isFixed=t)},i(t,"onscroll",50)}();
ID.modules["refactor-shirt"]=function(t){"use strict";var e=new Date(2016,1,10),r=Math.round((e-new Date)/864e5);t.querySelector(".refactor-shirt__title").textContent="Refactor shirts. Only on sale for "+r+" more days."};
ID.modules["animate-item-size"]=function(i){"use strict";var t=$(i),e=t.find(".grid").isotope({masonry:{columnWidth:60}});e.on("click",".animate-item-size-item",function(){$(this).toggleClass("is-expanded"),e.isotope("layout")})};
ID.modules["animate-item-size-responsive"]=function(t){"use strict";function i(t){var i=getSize(t);t.style[o]="none",t.style.width=i.width+"px",t.style.height=i.height+"px"}function e(t){if(o){var i=function(){t.style.width="",t.style.height="",t.removeEventListener(r,i,!1)};t.addEventListener(r,i,!1)}}function n(t,i){var e=getSize(i);t.style.width=e.width+"px",t.style.height=e.height+"px"}var s=document.documentElement.style,o="string"==typeof s.transition?"transition":"WebkitTransition",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],a=$(t),d=a.find(".grid").isotope({itemSelector:".animate-item-size-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}});d.on("click",".animate-item-size-item__content",function(){var t=this;i(t);var s=t.parentNode;s.classList.toggle("is-expanded");t.offsetWidth;t.style[o]="",e(t),n(t,s),d.isotope("layout")})};
ID.modules.appended=function(e){"use strict";var t=$(e),n=t.find(".grid").isotope({masonry:{columnWidth:50}});t.find(".append-button").on("click",function(){var e=$([ID.getItemElement(),ID.getItemElement(),ID.getItemElement()]);n.append(e).isotope("appended",e)})};
ID.modules["arrange-complete"]=function(t){"use strict";var o=$(t),n=o.find(".grid").isotope({masonry:{columnWidth:50}});n.on("arrangeComplete",function(t,o){ID.notify("Isotope arrange completed on "+o.length+" items")}),o.find(".button-group").on("click","button",function(){var t=$(this).attr("data-filter");n.isotope({filter:t})})};
ID.modules["combination-filters"]=function(t){"use strict";function o(t){var o="";for(var i in t)o+=t[i];return o}var i=$(t),r=i.find(".grid").isotope({itemSelector:".color-shape",columnWidth:80,transitionDuration:"0.6s"}),n=i.find(".code-display code"),e={};i.on("click",".button",function(){var t=$(this),i=t.parents(".button-group"),a=i.attr("data-filter-group");e[a]=t.attr("data-filter");var s=o(e);r.isotope({filter:s}),n.displayIsotopeCode("filter",s)})};
ID.modules.destroy=function(o){"use strict";var t=$(o),i={masonry:{columnWidth:50}},n=t.find(".grid").isotope(i),s=!0;t.find(".toggle-button").on("click",function(){s?n.isotope("destroy"):n.isotope(i),s=!s})};
ID.modules["filtering-demo"]=function(t){"use strict";var n=$(t),e=n.find(".grid").isotope({itemSelector:".element-item",layoutMode:"fitRows",transitionDuration:"0.6s"}),i={numberGreaterThan50:function(){var t=$(this).find(".number").text();return parseInt(t,10)>50},ium:function(){var t=$(this).find(".name").text();return t.match(/ium$/)}},r={numberGreaterThan50:"function(){\n  var number=$(this).find('.number').text();\n  return parseInt(number, 10) > 50;\n}",ium:"function(){\n  var name=$(this).find('.name').text();\n  return name.match(/ium$/);\n}"},o=n.find(".code-display code");n.find(".filter-button-group").on("click","button",function(){var t=$(this).attr("data-filter"),n=i[t]||t,u=r[t]||t;e.isotope({filter:n}),o.displayIsotopeCode("filter",u)})};
ID.modules["imagesloaded-callback"]=function(e){"use strict";var i=$(e).imagesLoaded(function(){i.isotope({itemSelector:".grid-image-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}})})};
ID.modules["imagesloaded-progress"]=function(e){"use strict";var o=$(e).isotope({itemSelector:".grid-image-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}});o.imagesLoaded().progress(function(){o.isotope("layout")})};
ID.modules.insert=function(t){"use strict";var n=$(t),r=n.find(".grid").isotope({masonry:{columnWidth:50},filter:function(){var t=$(this).find(".number").text();return parseInt(t,10)%2},sortBy:"number",getSortData:{number:".number parseInt"}});n.find(".insert-button").on("click",function(){for(var t=[],n=0;3>n;n++){var e=ID.getItemElement(),o=Math.floor(100*Math.random());$(e).append('<p class="number">'+o+"</p>"),t.push(e)}r.isotope("insert",t)})};
ID.modules["layout-complete"]=function(o){"use strict";var t=$(o),i=t.find(".grid").isotope({masonry:{columnWidth:50}});i.on("layoutComplete",function(o,t){ID.notify("Isotope layout completed on "+t.length+" items")}),i.on("click",".grid-item",function(){$(this).toggleClass("grid-item--gigante"),i.isotope("layout")})};
ID.modules["layout-demo"]=function(i){"use strict";var o=$(i),t=o.find(".grid").isotope({masonry:{columnWidth:50}});t.on("click",".grid-item",function(){$(this).toggleClass("grid-item--gigante"),t.isotope("layout")})};
ID.modules["layout-modes-demo"]=function(o){"use strict";var t=$(window),i=$(o),a=i.find(".grid").isotope({itemSelector:".grid-splash-item",layoutMode:"masonry",transitionDuration:"0.6s",masonry:{columnWidth:110},cellsByRow:{columnWidth:220,rowHeight:220},masonryHorizontal:{rowHeight:110},cellsByColumn:{columnWidth:220,rowHeight:220}}),e=!1,d=i.find(".code-display code");i.find(".button-group").on("click","button",function(){var o=$(this),i=!!o.attr("data-is-horizontal");if(e!=i){var n=i?{height:.7*t.height()}:{width:"auto"};a.css(n),e=i}var s=o.attr("data-layout-mode");a.isotope({layoutMode:s}),d.displayIsotopeCode("layoutMode",s)})};
ID.modules["multiple-sort-by"]=function(t){"use strict";function o(t){return t.split(",")}var r=$(t),i=r.find(".button-group"),e=r.find(".grid").isotope({layoutMode:"fitRows",itemSelector:".grid-multi-item",getSortData:{color:"[data-color]",number:".number parseInt"},sortBy:["color","number"]});i.on("click","button",function(){e.isotope({sortBy:o(this.getAttribute("data-sort-by"))})})};
ID.modules.prepended=function(e){"use strict";var t=$(e),n=t.find(".grid").isotope({masonry:{columnWidth:50}});t.find(".prepend-button").on("click",function(){var e=$([ID.getItemElement(),ID.getItemElement(),ID.getItemElement()]);n.prepend(e).isotope("prepended",e)})};
ID.modules.remove=function(o){"use strict";var i=$(o),t=i.find(".grid").isotope({masonry:{columnWidth:50}});t.on("click",".grid-item",function(){t.isotope("remove",this).isotope("layout")})};
ID.modules["remove-complete"]=function(o){"use strict";var e=$(o),t=e.find(".grid").isotope({masonry:{columnWidth:50}});t.on("removeComplete",function(o,e){ID.notify("Removed "+e.length+" items")}),t.on("click",".grid-item",function(){t.isotope("remove",this).isotope("layout")})};
ID.modules.shuffle=function(o){"use strict";var f=$(o),i=f.find(".grid").isotope({masonry:{columnWidth:50}});f.find(".shuffle-button").on("click",function(){i.isotope("shuffle")})};
ID.modules["sorting-demo"]=function(t){"use strict";var o=$(t),e=o.find(".sort-by-button-group"),r=o.find(".grid").isotope({itemSelector:".element-item",layoutMode:"fitRows",transitionDuration:"0.6s",getSortData:{name:".name",symbol:".symbol",number:".number parseInt",category:"[data-category]",weight:function(t){var o=$(t).find(".weight").text();return parseFloat(o.replace(/[\(\)]/g,""))}}}),i=o.find(".code-display code");e.on("click","button",function(){var t=$(this).attr("data-sort-by");r.isotope({sortBy:t}),i.displayIsotopeCode("sortBy",t)})};
ID.modules.stagger=function(t){"use strict";var o=$(t),r=o.find(".grid").isotope({layoutMode:"fitRows",stagger:30});o.find(".button-group").on("click",".button",function(t){var o=$(t.currentTarget).attr("data-filter");r.isotope({filter:o})})};
ID.modules["stamp-methods"]=function(t){"use strict";var o=$(t),i=o.find(".grid").isotope({itemSelector:".grid-item",masonry:{columnWidth:50}}),s=i.find(".stamp"),n=!1;o.find(".stamp-button").on("click",function(){n?i.isotope("unstamp",s):i.isotope("stamp",s),i.isotope("layout"),n=!n})};
ID.modules["vertical-list"]=function(t){"use strict";var e=$(t),o=e.find(".vertical-list").isotope({itemSelector:"li",layoutMode:"vertical",transitionDuration:"0.6s",getSortData:{name:".name",symbol:".symbol",number:".number parseInt",category:".category",weight:function(t){var e=$(t).find(".weight").text();return parseFloat(e.replace(/[\(\)]/g,""))}}});e.find(".button-group").on("click","button",function(){var t=$(this).attr("data-sort-by");o.isotope({sortBy:t})})};
ID.modules["visible-hidden-style"]=function(t){"use strict";var i=$(t),e=i.find(".grid").isotope({layoutMode:"fitRows",visibleStyle:{opacity:1},hiddenStyle:{opacity:0}});i.find(".button-group").on("click",".button",function(t){var i=$(t.currentTarget).attr("data-filter");e.isotope({filter:i})})};
!function(){"use strict";$("[data-js-module]").each(function(t,e){var s=e.getAttribute("data-js-module"),a=ID.modules[s];a&&a(e)}),$(".js-radio-button-group").each(function(t,e){var s=$(e);s.find(":checked").parent().addClass("is-checked"),s.on("click","input, button",function(){s.find(".is-checked").removeClass("is-checked");var t=$(this),e=t.hasClass("button")?t:t.parents(".button");e.addClass("is-checked")})})}();
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function d(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function h(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Ot(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function p(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function v(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function S(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function D(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function k(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=D(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&k(e[s])!==k(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function H(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function R(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function C(e){var t,n,s={};for(n in e)m(e,n)&&(t=R(n))&&(s[t]=e[n]);return s}var F={};function L(e,t){F[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=x(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=x(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function de(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),d(n)&&(s=function(e,t){t[n]=k(e)}),t=0;t<e.length;t++)he[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,pe=4,ve=5,we=6,Me=7,Se=8;function De(e){return ke(e)?366:365}function ke(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),H("year","y"),L("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):k(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return k(e)+(68<k(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(be(this,t,e),c.updateOffset(this,n),this):xe(this,t)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function be(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?ke(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),L("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=k(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=k(t);else if(!d(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Fe(e){return null!=e?(Ce(this,e),c.updateOffset(this,!0),this):xe(this,"Month")}var Le=ae;var Ue=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t]);for(t=0;t<24;t++)r[t]=de(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&0<=e&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return o<=0?a=De(r=e-1)+o:o>De(e)?(r=e+1,a=o-De(e)):(r=e,a=o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(De(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),L("week",5),L("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=k(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),L("day",11),L("weekday",11),L("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=k(e)});var je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e=ae;var qe=ae;var Je=ae;function Be(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ke(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),H("hour","h"),L("hour",13),ue("a",Ke),ue("A",Ke),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=k(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=k(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i))});var et,tt=Te("Hours",!0),nt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Re,week:{dow:0,doy:6},weekdays:je,weekdaysMin:ze,weekdaysShort:Ze,meridiemParse:/[ap]\.?m?\.?/i},st={},it={};function rt(e){return e?e.toLowerCase().replace("_","-"):e}function at(e){var t=null;if(!st[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=et._abbr,require("./locale/"+e),ot(t)}catch(e){}return st[e]}function ot(e,t){var n;return e&&((n=l(t)?lt(e):ut(e,t))?et=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),et._abbr}function ut(e,t){if(null!==t){var n,s=nt;if(t.abbr=e,null!=st[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])s=st[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return it[t.parentLocale]||(it[t.parentLocale]=[]),it[t.parentLocale].push({name:e,config:t}),null;s=n._config}return st[e]=new P(b(s,t)),it[e]&&it[e].forEach(function(e){ut(e.name,e.config)}),ot(e),st[e]}return delete st[e],null}function lt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return et;if(!o(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=rt(e[r]).split("-")).length,n=(n=rt(e[r+1]))?n.split("-"):null;0<t;){if(s=at(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return et}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?ge:n[pe]<0||59<n[pe]?pe:n[ve]<0||59<n[ve]?ve:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=Se),g(e).overflow=t),e}function ht(e,t,n){return null!=e?e:null!=t?t:n}function ct(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ht(t.GG,e._a[me],Ie(Tt(),1,4).year),s=ht(t.W,1),((i=ht(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(Tt(),r,a);n=ht(t.gg,e._a[me],l.year),s=ht(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ht(e._a[me],s[me]),(e._dayOfYear>De(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&0<=e&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T|)(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T|)(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function vt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(g(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),kt(e)}else e._isValid=!1}var wt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Re.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=Mt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&Ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function kt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,d=l.length,h=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),h+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(he,a)&&he[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=d-h,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ct(e),dt(e)}else Dt(e);else vt(e)}function Yt(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||lt(e._l),null===r||void 0===a&&""===r?v({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),S(r)?new M(dt(r)):(h(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],kt(t),p(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?kt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):h(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(vt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ct(t)):u(n)?function(e){if(!e._d){var t=C(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ct(e)}}(t):d(n)?t._d=new Date(n):c.createFromInputFallback(t),p(e)||(e._d=null),e))}function Ot(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Yt(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tt(e,t,n,s){return Ot(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:v()}),bt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:v()});function Pt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=C(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Wt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Wt.length;++s)if(e[Wt[s]]){if(n)return!1;parseFloat(e[Wt[s]])!==k(e[Wt[s]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=lt(),this._bubble()}function Rt(e){return e instanceof Ht}function Ct(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+U(~~(e/60),2)+n+U(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ut(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Ut(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+k(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Nt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(S(e)||h(e)?e.valueOf():Tt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):Tt(e).local()}function Gt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var Et=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:d(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=Et.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:k(a[ye])*n,h:k(a[ge])*n,m:k(a[pe])*n,s:k(a[ve])*n,ms:k(Ct(1e3*a[we]))*n}):(a=It.exec(e))?(n="-"===a[1]?-1:(a[1],1),r={y:jt(a[2],n),M:jt(a[3],n),w:jt(a[4],n),d:jt(a[5],n),h:jt(a[6],n),m:jt(a[7],n),s:jt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Nt(t,e),e.isBefore(t)?n=Zt(e,t):((n=Zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function zt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),$t(this,At(e="string"==typeof e?+e:e,t),s),this}}function $t(e,t,n,s){var i=t._milliseconds,r=Ct(t._days),a=Ct(t._months);e.isValid()&&(s=null==s||s,a&&Ce(e,xe(e,"Month")+a*n),r&&be(e,"Date",xe(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}At.fn=Ht.prototype,At.invalid=function(){return At(NaN)};var qt=zt(1,"add"),Jt=zt(-1,"subtract");function Bt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Qt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=lt(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),en("gggg","weekYear"),en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),L("weekYear",1),L("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=k(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),H("quarter","Q"),L("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(k(e)-1)}),I("D",["DD",2],"Do","date"),H("date","D"),L("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=k(e.match(B)[0])});var nn=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),L("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=k(e)}),I("m",["mm",2],0,"minute"),H("minute","m"),L("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],pe);var sn=Te("Minutes",!1);I("s",["ss",2],0,"second"),H("second","s"),L("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],ve);var rn,an=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),L("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),rn="SSSS";rn.length<=9;rn+="S")ue(rn,ne);function on(e,t){t[we]=k(1e3*("0."+e))}for(rn="S";rn.length<=9;rn+="S")ce(rn,on);var un=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var ln=M.prototype;function dn(e){return e}ln.add=qt,ln.calendar=function(e,t){var n=e||Tt(),s=Nt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(x(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,Tt(n)))},ln.clone=function(){return new M(this)},ln.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Nt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=R(t)){case"year":r=Bt(this,s)/12;break;case"month":r=Bt(this,s);break;case"quarter":r=Bt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:D(r)},ln.endOf=function(e){return void 0===(e=R(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},ln.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},ln.from=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.fromNow=function(e){return this.from(Tt(),e)},ln.to=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.toNow=function(e){return this.to(Tt(),e)},ln.get=function(e){return x(this[e=R(e)])?this[e]():this},ln.invalidAt=function(){return g(this).overflow},ln.isAfter=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},ln.isBefore=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},ln.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},ln.isSame=function(e,t){var n,s=S(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=R(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},ln.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},ln.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},ln.isValid=function(){return p(this)},ln.lang=Xt,ln.locale=Qt,ln.localeData=Kt,ln.max=bt,ln.min=xt,ln.parsingFlags=function(){return _({},g(this))},ln.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(x(this[e=R(e)]))return this[e](t);return this},ln.startOf=function(e){switch(e=R(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},ln.subtract=Jt,ln.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},ln.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},ln.toDate=function(){return new Date(this.valueOf())},ln.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},ln.inspect=function(){if(!this.isValid())return"moment.invalid()";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},ln.toJSON=function(){return this.isValid()?this.toISOString():null},ln.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},ln.unix=function(){return Math.floor(this.valueOf()/1e3)},ln.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},ln.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},ln.year=Oe,ln.isLeapYear=function(){return ke(this.year())},ln.weekYear=function(e){return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},ln.isoWeekYear=function(e){return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},ln.quarter=ln.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},ln.month=Fe,ln.daysInMonth=function(){return Pe(this.year(),this.month())},ln.week=ln.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},ln.isoWeek=ln.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},ln.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},ln.isoWeeksInYear=function(){return Ae(this.year(),1,4)},ln.date=nn,ln.day=ln.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},ln.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},ln.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=(n=e,s=this.localeData(),"string"==typeof n?s.weekdaysParse(n)%7||7:isNaN(n)?null:n);return this.day(this.day()%7?t:t-7)}return this.day()||7;var n,s},ln.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},ln.hour=ln.hours=tt,ln.minute=ln.minutes=sn,ln.second=ln.seconds=an,ln.millisecond=ln.milliseconds=un,ln.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ut(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Gt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?$t(this,At(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:Gt(this)},ln.utc=function(e){return this.utcOffset(0,e)},ln.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Gt(this),"m")),this},ln.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ut(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},ln.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},ln.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},ln.isLocal=function(){return!!this.isValid()&&!this._isUTC},ln.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},ln.isUtc=Vt,ln.isUTC=Vt,ln.zoneAbbr=function(){return this._isUTC?"UTC":""},ln.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},ln.dates=n("dates accessor is deprecated. Use date instead.",nn),ln.months=n("months accessor is deprecated. Use month instead",Fe),ln.years=n("years accessor is deprecated. Use year instead",Oe),ln.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),ln.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Yt(e))._a){var t=e._isUTC?y(e._a):Tt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var hn=P.prototype;function cn(e,t,n,s){var i=lt(),r=y().set(s,t);return i[n](r,e)}function fn(e,t,n){if(d(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=cn(e,s,n,"month");return i}function mn(e,t,n,s){"boolean"==typeof e?d(t)&&(n=t,t=void 0):(t=e,e=!1,d(n=t)&&(n=t,t=void 0)),t=t||"";var i,r=lt(),a=e?r._week.dow:0;if(null!=n)return cn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=cn(t,(i+a)%7,s,"day");return o}hn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return x(s)?s.call(t,n):s},hn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},hn.invalidDate=function(){return this._invalidDate},hn.ordinal=function(e){return this._ordinal.replace("%d",e)},hn.preparse=dn,hn.postformat=dn,hn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return x(i)?i(e,t,n,s):i.replace(/%d/i,e)},hn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)},hn.set=function(e){var t,n;for(n in e)x(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},hn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},hn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},hn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},hn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Ue),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},hn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Le),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},hn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},hn.firstDayOfYear=function(){return this._week.doy},hn.firstDayOfWeek=function(){return this._week.dow},hn.weekdays=function(e,t){return e?o(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:o(this._weekdays)?this._weekdays:this._weekdays.standalone},hn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},hn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},hn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},hn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=$e),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},hn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},hn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},hn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},hn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ot("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===k(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ot),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",lt);var _n=Math.abs;function yn(e,t,n,s){var i=At(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}function vn(e){return 146097*e/4800}function wn(e){return function(){return this.as(e)}}var Mn=wn("ms"),Sn=wn("s"),Dn=wn("m"),kn=wn("h"),Yn=wn("d"),On=wn("w"),Tn=wn("M"),xn=wn("y");function bn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Pn=bn("milliseconds"),Wn=bn("seconds"),Hn=bn("minutes"),Rn=bn("hours"),Cn=bn("days"),Fn=bn("months"),Ln=bn("years");var Un=Math.round,Nn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Vn(e){return(0<e)-(e<0)||+e}function En(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Gn(this._milliseconds)/1e3,s=Gn(this._days),i=Gn(this._months);t=D((e=D(n/60))/60),n%=60,e%=60;var r=D(i/12),a=i%=12,o=s,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Vn(this._months)!==Vn(h)?"-":"",m=Vn(this._days)!==Vn(h)?"-":"",_=Vn(this._milliseconds)!==Vn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||d?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(d?_+d+"S":"")}var In=Ht.prototype;return In.isValid=function(){return this._isValid},In.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},In.add=function(e,t){return yn(this,e,t,1)},In.subtract=function(e,t){return yn(this,e,t,-1)},In.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=R(e))||"year"===e)return t=this._days+s/864e5,n=this._months+pn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(vn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},In.asMilliseconds=Mn,In.asSeconds=Sn,In.asMinutes=Dn,In.asHours=kn,In.asDays=Yn,In.asWeeks=On,In.asMonths=Tn,In.asYears=xn,In.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*k(this._months/12):NaN},In._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*gn(vn(o)+a),o=a=0),u.milliseconds=r%1e3,e=D(r/1e3),u.seconds=e%60,t=D(e/60),u.minutes=t%60,n=D(t/60),u.hours=n%24,o+=i=D(pn(a+=D(n/24))),a-=gn(vn(i)),s=D(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},In.clone=function(){return At(this)},In.get=function(e){return e=R(e),this.isValid()?this[e+"s"]():NaN},In.milliseconds=Pn,In.seconds=Wn,In.minutes=Hn,In.hours=Rn,In.days=Cn,In.weeks=function(){return D(this.days()/7)},In.months=Fn,In.years=Ln,In.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,d,h,c=this.localeData(),f=(n=!e,s=c,i=At(t=this).abs(),r=Un(i.as("s")),a=Un(i.as("m")),o=Un(i.as("h")),u=Un(i.as("d")),l=Un(i.as("M")),d=Un(i.as("y")),(h=r<=Nn.ss&&["s",r]||r<Nn.s&&["ss",r]||a<=1&&["m"]||a<Nn.m&&["mm",a]||o<=1&&["h"]||o<Nn.h&&["hh",o]||u<=1&&["d"]||u<Nn.d&&["dd",u]||l<=1&&["M"]||l<Nn.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=n,h[3]=0<+t,h[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,h));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},In.toISOString=En,In.toString=En,In.toJSON=En,In.locale=Qt,In.localeData=Kt,In.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",En),In.lang=Xt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(k(e))}),c.version="2.22.2",e=Tt,c.fn=ln,c.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return Tt(1e3*e)},c.months=function(e,t){return fn(e,t,"months")},c.isDate=h,c.locale=ot,c.invalid=v,c.duration=At,c.isMoment=S,c.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},c.parseZone=function(){return Tt.apply(null,arguments).parseZone()},c.localeData=lt,c.isDuration=Rt,c.monthsShort=function(e,t){return fn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},c.defineLocale=ut,c.updateLocale=function(e,t){if(null!=t){var n,s,i=nt;null!=(s=at(e))&&(i=s._config),(n=new P(t=b(i,t))).parentLocale=st[e],st[e]=n,ot(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},c.locales=function(){return s(st)},c.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},c.normalizeUnits=R,c.relativeTimeRounding=function(e){return void 0===e?Un:"function"==typeof e&&(Un=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==Nn[e]&&(void 0===t?Nn[e]:(Nn[e]=t,"s"===e&&(Nn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=ln,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},c});