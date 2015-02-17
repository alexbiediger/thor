$(document).ready(function() {
	var param = {
		previewFileType: "image",
		browseIcon: '<span class="glyphicon glyphicon-picture"></span> ',
		showUpload: false,
		previewSettings: {
			image: {width: "40px", height: "40px"},
		}
	}
	if($('#project_logo_preview').css('display', 'none').length>0) {
		var src = $('#project_logo_preview').attr('src');
		var name = src.split('/').pop().split('?').shift();
		param.initialPreview = [
			'<img src="' + src + '" style="width:40px;height:40px;" class="file-preview-image" alt="' + name + '" title="' + name + '">'
			];
	}
	$("#project_logo").fileinput(param);
});