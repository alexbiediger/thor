$(document).ready(function() {  
    //Create "TreeView" for projects
	$('#my-project').on({
		click: function() {
			var $mnuMyProjectTree = $('#my-project-tree')
			var $mnuMyProject = $(this);

			if(!$mnuMyProject.hasClass('open')) {
				$mnuMyProjectTree.html('<div class="list-group-item"><img src="/assets/images/loading.gif" alt"Please Wait"/> Loading...</div>');
				$mnuMyProject.find('.glyphicon-folder-close').removeClass('glyphicon-folder-close').addClass('glyphicon-folder-open');
				$mnuMyProject.addClass('open');
				$mnuMyProject.tooltip('disable');
				$.ajax({
					url: $mnuMyProjectTree.data('source'),
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: function(projects) {
						var html = '<ul class="list-unstyled list-group-item">';
						for(var i=0; i<projects.length; i++) {
							var project = projects[i];
							html += "" +
								'<li class="menu-project" id="project-' + project.id + '">' +
									'<img src="' + project.logo + '" alt="Logo ' + project.name + '" style="width:16px;"/> ' +
									'<span>' + project.name + '</span>'+
									'<span class="glyphicon glyphicon-chevron-right left"></span>'+
								'</li>';
						}
						html += '<ul>'
						$mnuMyProjectTree.html(html);
						$mnuMyProjectTree.find('li.menu-project').on({
							click: function() {
								expandProject(this.id.replace(/project-/, ''));
							},
							/*
							mouseenter: function() {
								viewTestsResume(this.id.replace(/project-/, ''));
							},
							mouseleave: function() {
								$('.project-info', this).remove();
							}
							*/
						});

					},
					error: function() {
					}
				});
			} else {
				$("#my-project-tree ul").remove();
				$(this).removeClass('open');
				$(this).tooltip('enable')
				$('.glyphicon-folder-open', this).removeClass('glyphicon-folder-open').addClass('glyphicon-folder-close');
			}
		}
	})
});
/*
function viewTestsResume(id) {
	$('#project-'+id).append(
		'<div class="project-info">' +
			'<div class="label label-default"><span class="glyphicon glyphicon-info-sign"></span> 16</div>' +
			'<div class="label label-success"><span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span> 12</div>' +
			'<div class="label label-warning"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> 2</div>' +
			'<div class="label label-danger"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> 2</div>' +
		'</div>'
	);
}
*/

function expandProject(id) {
}