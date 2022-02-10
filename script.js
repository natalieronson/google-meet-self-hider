chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if(message.action === "toggleView"){
    const self = document.getElementsByClassName("aGWPv")[0];
    if (message.payload.checkedValue) {
      self.style.visibility = "hidden";
    } else {
      self.style.visibility = "visible";
    }
  }
});
