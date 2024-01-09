document.addEventListener("DOMContentLoaded", function () {
  var cachedPreviews = {};

  function showPreview(link, linkElement) {
    if (cachedPreviews[link]) {
      var topPosition = linkElement.offsetTop + linkElement.offsetHeight + 5; // Add 5 pixels
      var previewHTML = cachedPreviews[link];
      showPreviewElement(previewHTML, linkElement, topPosition);
    } else {
      var mshotsURL =
        "https://s0.wp.com/mshots/v1/" +
        encodeURIComponent(link) +
        "?w=300&r=2"; // Replace with your mshots CDN URL
      var previewHTML =
        '<div class="on-hover-link-prev"><img src="' +
        mshotsURL +
        '" alt="OnHover Link Preview" /></div>';
      cachedPreviews[link] = previewHTML;
      var topPosition = linkElement.offsetTop + linkElement.offsetHeight + 5; // Add 5 pixels
      showPreviewElement(previewHTML, linkElement, topPosition);
    }
  }

  function showPreviewElement(previewHTML, linkElement, topPosition) {
    var $preview = createElementFromHTML(previewHTML);

    $preview.style.position = "absolute";
    $preview.style.top = topPosition + "px";
    $preview.style.left = linkElement.offsetLeft + "px";
    $preview.style.backgroundColor = "#fff";
    $preview.style.padding = "10px";
    $preview.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    $preview.style.zIndex = "9999";
    $preview.style.maxWidth = "50%";

    document.body.appendChild($preview);
  }

  function createElementFromHTML(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

  function removePreview() {
    var previewElement = document.querySelector(".on-hover-link-prev");
    if (previewElement) {
      previewElement.remove();
    }
  }

  function handleMouseEnter(event) {
    var link = event.target.href;
    showPreview(link, event.target);
  }

  function handleMouseLeave() {
    removePreview();
  }

  var links = document.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);
  });
});
