function orderNow(product) {
  let message = `Hi, I want to order: ${product}`;
  let url = `https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function sendOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  let message = `New Order - Name: ${name}, Phone: ${phone}`;
  let url = `https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}