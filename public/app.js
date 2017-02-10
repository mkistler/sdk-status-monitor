(function($){
	$(document).ready(init);

	var $buttonBuild;
	var $buttonCoverage;
	var $buttonReleases;
	var $buttonDownloads;

	var SDK_STATUS_MONITOR_BUTTON_PREFIX = "SDK_STATUS_MONITOR_BUTTON";
	var SDK_STATUS_MONITOR_BUTTON_BUILD = "SDK_STATUS_MONITOR_BUTTON.build";
	var SDK_STATUS_MONITOR_BUTTON_COVERAGE = "SDK_STATUS_MONITOR_BUTTON.coverage";
	var SDK_STATUS_MONITOR_BUTTON_RELEASES = "SDK_STATUS_MONITOR_BUTTON.release";
	var SDK_STATUS_MONITOR_BUTTON_DOWNLOADS = "SDK_STATUS_MONITOR_BUTTON.downloads";

	function init(){
		console.log("init");
		$buttonBuild = $("#ButtonBuild");
		$buttonCoverage = $("#ButtonCoverage");
		$buttonReleases = $("#ButtonReleases");
		$buttonDownloads = $("#ButtonDownloads");

		$(".btn").click(onButtonClicked);

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_BUILD) != "false")
			$buttonBuild.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_COVERAGE) != "false")
			$buttonCoverage.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_RELEASES) != "false")
			$buttonReleases.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_DOWNLOADS) != "false")
			$buttonDownloads.click();

		function onButtonClicked(){
			var $button = $(this);
			$button.blur();

			var sectionClass;
			var buttonId = $button.attr("id");
			switch (buttonId){
				case "ButtonBuild": sectionClass = ".build"; break;
				case "ButtonCoverage": sectionClass = ".coverage"; break;
				case "ButtonReleases": sectionClass = ".release"; break;
				case "ButtonDownloads": sectionClass = ".downloads"; break;
			}

			if ($button.hasClass("btn-default")){
				$button.removeClass("btn-default");
				$button.addClass("btn-primary");
				$(sectionClass).show();
				localStorage.removeItem(SDK_STATUS_MONITOR_BUTTON_PREFIX + sectionClass);
			} else {
				$button.removeClass("btn-primary");
				$button.addClass("btn-default");
				$(sectionClass).hide();
				localStorage.setItem(SDK_STATUS_MONITOR_BUTTON_PREFIX + sectionClass, false);
			}


		}
	}

}(jQuery));