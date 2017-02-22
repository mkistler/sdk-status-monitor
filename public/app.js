(function($){
	$(document).ready(init);

	var $buttonBuild;
	var $buttonQuality;
	var $buttonReleases;
	var $buttonDownloads;

	var $buttonCore;
	var $buttonAppId;
	var $buttonAnalytics;
	var $buttonPush;
	var $buttonMCA;
	var $buttonMisc;

	var SDK_STATUS_MONITOR_BUTTON_PREFIX = "SDK_STATUS_MONITOR_BUTTON";
	var SDK_STATUS_MONITOR_BUTTON_BUILD = "SDK_STATUS_MONITOR_BUTTON.build";
	var SDK_STATUS_MONITOR_BUTTON_QUALITY = "SDK_STATUS_MONITOR_BUTTON.quality";
	var SDK_STATUS_MONITOR_BUTTON_RELEASES = "SDK_STATUS_MONITOR_BUTTON.release";
	var SDK_STATUS_MONITOR_BUTTON_DOWNLOADS = "SDK_STATUS_MONITOR_BUTTON.downloads";

	var SDK_STATUS_MONITOR_BUTTON_CORE = "SDK_STATUS_MONITOR_BUTTON.core";
	var SDK_STATUS_MONITOR_BUTTON_APP_ID = "SDK_STATUS_MONITOR_BUTTON.appid";
	var SDK_STATUS_MONITOR_BUTTON_ANALYTICS = "SDK_STATUS_MONITOR_BUTTON.analytics";
	var SDK_STATUS_MONITOR_BUTTON_PUSH = "SDK_STATUS_MONITOR_BUTTON.push";
	var SDK_STATUS_MONITOR_BUTTON_MCA = "SDK_STATUS_MONITOR_BUTTON.mca";
	var SDK_STATUS_MONITOR_BUTTON_MISC = "SDK_STATUS_MONITOR_BUTTON.misc";

	function init(){
		console.log("init");
		$buttonBuild = $("#ButtonBuild");
		$buttonQuality = $("#ButtonQuality");
		$buttonReleases = $("#ButtonReleases");
		$buttonDownloads = $("#ButtonDownloads");

		$buttonCore = $("#ButtonCore");
		$buttonAppId = $("#ButtonAppId");
		$buttonAnalytics = $("#ButtonAnalytics");
		$buttonPush = $("#ButtonPush");
		$buttonMCA = $("#ButtonMCA");
		$buttonMisc = $("#ButtonMisc");

		$(".btn").click(onButtonClicked);

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_BUILD) != "false")
			$buttonBuild.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_QUALITY) != "false")
			$buttonQuality.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_RELEASES) != "false")
			$buttonReleases.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_DOWNLOADS) != "false")
			$buttonDownloads.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_CORE) != "false")
			$buttonCore.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_APP_ID) != "false")
			$buttonAppId.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_ANALYTICS) != "false")
			$buttonAnalytics.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_PUSH) != "false")
			$buttonPush.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_MCA) != "false")
			$buttonMCA.click();

		if (localStorage && localStorage.getItem(SDK_STATUS_MONITOR_BUTTON_MISC) != "false")
			$buttonMisc.click();


		function onButtonClicked(){
			var $button = $(this);
			$button.blur();

			var sectionClass;
			var buttonId = $button.attr("id");
			switch (buttonId){
				case "ButtonBuild": sectionClass = ".build"; break;
				case "ButtonQuality": sectionClass = ".quality"; break;
				case "ButtonReleases": sectionClass = ".release"; break;
				case "ButtonDownloads": sectionClass = ".downloads"; break;
				case "ButtonCore": sectionClass = ".core"; break;
				case "ButtonAppId": sectionClass = ".appid"; break;
				case "ButtonAnalytics": sectionClass = ".analytics"; break;
				case "ButtonPush": sectionClass = ".push"; break;
				case "ButtonMCA": sectionClass = ".mca"; break;
				case "ButtonMisc": sectionClass = ".misc"; break;
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