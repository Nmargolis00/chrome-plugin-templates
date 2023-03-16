chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "storeValue") {
      chrome.storage.local.set({ "customValue": request.value });
    } else if (request.action === "getStoredValue") {
      chrome.storage.local.get("customValue", function(data) {
        sendResponse(data.customValue);
      });
      return true;
    }
  });