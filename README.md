# REDs - Redirect Skipper

## What Is REDs?
There is no finished product its like a How-to based repo. Basicly, REDs is an unfinished/raw extension, which have to configured by yourself, for chromium browsers. If you configure, the REDs prevents unpleasure redirect for advertisement in your favourite websites where doesn't work adblocks.

### Manifest.json
Change website with base url. Btw,don't forget to put star(*) at the end of line.
```json
{
  "name": "REDs",
  "description": "REDs - Redirect Skipper by Dootec",
  "version": "1.0",
  "manifest_version": 2,
  "background": {"scripts":["background.js"]},
  "permissions": [
    "webRequest",
	"webRequestBlocking",
	"https://testName1.com/*",
	"https://testName2.net/*",
	"https://testName3.io/*"
  ]
}
```

### Background.js
Just keep reading, its so easy to use.
```Javasciprt
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
```

### How to Use This Beauty?
* Go to [Chrome extension tab](chrome://extensions).
* Be sure to Developer mode switched on.
* Browse REDs folder after clicking Load Unpacked button.
* That's it.

