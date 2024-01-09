document.addEventListener("DOMContentLoaded", function () {
  var cachedPreviews = {};

  function showPreview(link, linkElement) {
    var widthClass = getWidthClass(linkElement);
    var heightClass = getHeightClass(linkElement);
    var width = getWidthFromClass(widthClass) || 300; // Default width is 300 if no class is set
    var height = getHeightFromClass(heightClass) || 200; // Default height is 200 if no class is set

    if (cachedPreviews[link]) {
      var previewHTML = cachedPreviews[link];
      showPreviewElement(previewHTML, linkElement, width, height, link);
    } else {
      var mshotsURL = "https://s0.wp.com/mshots/v1/" + encodeURIComponent(link);
      var previewHTML =
        '<div class="on-hover-link-prev"><img src="' +
        mshotsURL +
        '" width=' +
        width +
        " height=" +
        height +
        ' alt="' +
        link +
        '" /></div>';
      cachedPreviews[link] = previewHTML;
      showPreviewElement(previewHTML, linkElement, width, height, link);
    }
  }

  function showPreviewElement(previewHTML, linkElement, width, height, link) {
    var $preview = createElementFromHTML(previewHTML);

    $preview.style.position = "absolute";
    $preview.style.top = "30px";
    $preview.style.left = "8px";
    $preview.style.backgroundColor = "#fff";
    $preview.style.padding = "10px";
    $preview.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    $preview.style.zIndex = "9999";
    $preview.style.maxWidth = "50%";
    $preview.querySelector("img").width = width;
    $preview.querySelector("img").height = height;

    document.body.appendChild($preview);
  }

  function getWidthClass(linkElement) {
    var widthClasses = linkElement.className.match(/\bolp-w-\d+\b/g);
    return widthClasses ? widthClasses[0] : null;
  }

  function getHeightClass(linkElement) {
    var heightClasses = linkElement.className.match(/\bolp-h-\d+\b/g);
    return heightClasses ? heightClasses[0] : null;
  }

  function getWidthFromClass(widthClass) {
    if (widthClass) {
      var widthMatch = widthClass.match(/\d+/);
      return widthMatch ? parseInt(widthMatch[0]) : null;
    }
    return null;
  }

  function getHeightFromClass(heightClass) {
    if (heightClass) {
      var heightMatch = heightClass.match(/\d+/);
      return heightMatch ? parseInt(heightMatch[0]) : null;
    }
    return null;
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

  var linksWithPreviewClass = document.querySelectorAll(
    "a.onhover-link-preview"
  );

  linksWithPreviewClass.forEach(function (link) {
    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);
  });
});
