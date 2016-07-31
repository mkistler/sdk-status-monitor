(function($){
	$(document).ready(init);

	var table;

	function init(){
		table = $("#maintable");
		retrieveConfig();
	}

	function retrieveConfig(){
		$.getJSON("/api/config")
			.done(function(json){
				console.log(json);
			})
			.fail(function(err){
				alert(err);
			});
	}
}(jQuery));