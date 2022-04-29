$(document).ready(function () {

  fetch("./portfolioList.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      $("#portfolioDesktop").html(data);
    });

});
