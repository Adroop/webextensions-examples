/*
beastify():
* removes every node in the document.body,
* then inserts the chosen beast
* then removes itself as a listener 
*/
function beastify(request, sender, sendResponse) {
  removeEverything();
  insertBeast(request.beastURL);
  chrome.runtime.onMessage.removeListener(beastify);
}

/*
Remove every node under document.body
*/
function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

/*
Given a URL to a beast image, create and style an IMG node pointing to
that image, then insert the node into the document.
*/
function insertBeast(beastURL) {
  var beastImages = document.createElement("img");
  beastImages.setAttribute("src", beastURL);
  beastImages.setAttribute("style", "width: 100vw");
  beastImages.setAttribute("style", "height: 100vh");
  document.body.appendChild(beastImages);
}

/*
Assign beastify() as a listener for messages from the extension.
*/
chrome.runtime.onMessage.addListener(beastify);
