chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // Modify the request URL here
      if (details.url.startsWith("https://cdn.jsdelivr.net")) {
        const modifiedUrl = details.url.replace(
          "https://cdn.jsdelivr.net",
          "https://cdn.jsdelivr.xyz"
        );
        return { redirectUrl: modifiedUrl };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
