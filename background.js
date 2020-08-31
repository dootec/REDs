chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
	
	    //Usage 101
		if(details.url.indexOf("testName1.com")>-1){
			return {redirectUrl: "https://www.google.com/"};
		
		//Usage 102
		}else if(details.url.indexOf("testName3.io")>-1){
		    var newUrl = "https://www.google.com";
		    newUrl = newUrl.replace("google","youtube");
			return {redirectUrl: newUrl};
		}
		
		//Usage 103
		}else if(details.url.indexOf("testName2.net")>-1){
		    var newUrl = details.url;
		    newUrl += "/hello-world1";
			return {redirectUrl: newUrl};
	},
	{urls: ["<all_urls>"]},
	["blocking"]
);