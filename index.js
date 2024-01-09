// Define your library namespace
var LinkPreviewLibrary = (function ($) {
  // Private variables
  var cachedPreviews = {};
  var exclusions = [
    // Add your exclusions here
  ];

  // Private function to filter exclusions
  function filterExclusions() {
    return exclusions
      .filter(function (exclusion) {
        return exclusion.trim() !== "";
      })
      .map(function (exclusion) {
        return exclusion
          .split(", ")
          .map(function (item) {
            return item.trim() + " a";
          })
          .join(", ");
      })
      .join(", ");
  }

  // Private function to show link preview
  function showPreview(link, element) {
    if (cachedPreviews[link]) {
      var topPosition = $(element).offset().top + $(element).outerHeight() + 5; // Add 5 pixels
      var $preview = $(cachedPreviews[link]);

      $preview.css({
        position: "absolute",
        top: topPosition + "px",
        left: $(element).offset().left + "px",
        "z-index": "9999",
      });

      $("body").append($preview);
    } else {
      var mshotsURL =
        link_preview_vars.mshots_url +
        encodeURIComponent(link) +
        "?w=" +
        link_preview_vars.width +
        "&r=2";
      var previewHTML =
        '<div class="on-hover-link-prev"><img src="' +
        mshotsURL +
        '" alt="OnHover Link Preview" /></div>';

      $("body").append(previewHTML);

      var topPosition = $(element).offset().top + $(element).outerHeight() + 5; // Add 5 pixels
      var $preview = $(".on-hover-link-prev");

      $preview.css({
        position: "absolute",
        top: topPosition + "px",
        left: $(element).offset().left + "px",
        "background-color": "#fff",
        padding: "10px",
        "box-shadow": "0 0 10px rgba(0, 0, 0, 0.2)",
        "z-index": "9999",
        "max-width": "50%",
      });

      cachedPreviews[link] = $preview[0].outerHTML;
    }
  }

  // Public function to initialize link previews
  function init() {
    var combinedExclusions = filterExclusions();
    var $links = $("a:link").not(combinedExclusions);

    $links
      .on("mouseenter", function () {
        var link = $(this).attr("href");
        showPreview(link, this);
      })
      .on("mouseleave", function () {
        $(".on-hover-link-prev").remove();
      });
  }

  // Expose public functions
  return {
    init: init,
  };
})(jQuery);

// Initialize the link previews
LinkPreviewLibrary.init();
