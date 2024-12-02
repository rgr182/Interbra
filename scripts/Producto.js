$(document).ready(function () {
  // Load all products when the page loads
  loadInitialProducts();
  $("#applyFiltersButton").on("click", applyFilters);
});

function loadInitialProducts() {
  const url = "https://localhost:7100/GetProductsInStock";
  $.get(url, function (data) {
    renderProducts(data); 
  }).fail(function (jqXHR) {
    console.error("Error loading initial products:", jqXHR.statusText);
  });
}

function applyFilters() {
  const size = $("#sizeFilter").val().trim(); 
  const amount = $("#resultLimit").val().trim(); 
  if (!size || !amount) {
    alert("Please select a size and a result limit."); 
    return; 
  }

  const url = `https://localhost:7100/GetProductsInStock?size=${size}&amount=${amount}`;

  $.get(url, function (data) {
    renderProducts(data); 
  }).fail(function (jqXHR) {
    console.error("Error filtering products:", jqXHR.statusText); 
  });
}

function renderProducts(data) {
  const $galeria = $(".galeria"); 
  $galeria.empty(); 

  data.forEach((item) => {
    if (item.imageUrl) {
      const $productContainer = $("<div>").css({
        display: "inline-block",
        textAlign: "center",
        margin: "10px"
      });

      const $img = $("<img>")
        .attr("src", item.imageUrl)
        .css({
          width: "200px",
          display: "block",
          margin: "0 auto"
        });

      const $desc = $("<p>")
        .text("Algodón 100% , 2 Broches, 34b")
        .css({
          marginTop: "10px",
          fontSize: "14px",
          color: "#333"
        });

      $productContainer.append($img).append($desc);
      $galeria.append($productContainer);
    }
  });
}
