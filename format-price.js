const formatprice = document.querySelectorAll("#price");
for (var i = 0; i < formatprice.length; i++) {
  formatprice[i].textContent = (+formatprice[i].textContent).toLocaleString(
    "en-US"
  );
}
