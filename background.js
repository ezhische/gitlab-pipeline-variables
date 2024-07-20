chrome.runtime.onInstalled.addListener(() => {
  console.log("GitLab Pipeline Variables extension installed.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "fetchVariables") {
    fetch(message.url)
      .then(response => response.json())
      .then(data => sendResponse({ success: true, data }))
      .catch(error => sendResponse({ success: false, error: error.toString() }));
    return true;  // Indicates that the response will be sent asynchronously
  }
});
