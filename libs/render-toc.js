export const renderToc = (body) => {
  var tempElement = document.createElement("div");
  tempElement.innerHTML = body;
  var headings = tempElement.querySelectorAll("h1, h2, h3");
  var toc = [];
  for (var i = 0; i < headings.length; i++) {
    var heading = headings[i];
    var headingInfo = {
      id: heading.id,
      text: heading.textContent,
      name: heading.tagName.toLowerCase(),
    };
    toc.push(headingInfo);
  }
  return toc;
};
