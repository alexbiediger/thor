// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
	//Active Tooltip on all element with attribute data-toggle="tooltip
    $('[data-toggle="tooltip"]').tooltip();
    $('[type="url"]').on({
    	blur: function() {
    		var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
    		if(!urlPattern.test(this.value) && this.value!="") {
    			$(this).parents('.form-group').addClass('has-error');
    		} else {
    			$(this).parents('.form-group').removeClass('has-error');
    		}
    	}
    });
    $('.color-picker').minicolors({
    	theme: 'bootstrap'
    });
});