document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let order = document.getElementById("order").value;

    let message = `New Order:%0AName: ${name}%0APhone: ${phone}%0AOrder: ${order}`;

    let whatsappURL = `https://wa.me/YOUR_NUMBER?text=${message}`;

    window.open(whatsappURL, "_blank");
});
