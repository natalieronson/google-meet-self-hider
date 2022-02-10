document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('toggle');
  toggle.addEventListener('click', function() {

    const checkedValue = document.getElementById('toggle-checkbox').checked;

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    const activeTab = tabs[0];

    chrome.tabs.sendMessage(activeTab.id, {
      "action" : "toggleView",
      "payload": {
         checkedValue,
      }
    })});
  }, false);
}, false);
