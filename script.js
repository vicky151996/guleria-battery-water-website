// ==============================
// ✅ WAIT FOR PAGE LOAD
// ==============================
document.addEventListener("DOMContentLoaded", function () {

  // ==============================
  // 🔹 ORDER PAGE LOGIC
  // ==============================
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const productInput = document.getElementById("product");
  const qtyInput = document.getElementById("qty");
  const totalText = document.getElementById("total");
  const orderBtn = document.getElementById("orderBtn");

  // ==============================
  // 💰 PRICE CALCULATION
  // ==============================
  function calculateTotal() {
    if (!productInput || !qtyInput || !totalText) return;

    let price = 0;

    switch (productInput.value) {
      case "1L":
        price = 20;
        break;
      case "5L":
        price = 80;
        break;
      case "20L":
        price = 250;
        break;
    }

    let qty = parseInt(qtyInput.value) || 0;
    let total = price * qty;

    totalText.innerText = "Total: ₹" + total;
  }

  // Event listeners for live update
  if (productInput && qtyInput) {
    productInput.addEventListener("change", calculateTotal);
    qtyInput.addEventListener("input", calculateTotal);
  }

  // ==============================
  // 📲 ORDER BUTTON (WHATSAPP)
  // ==============================
  if (orderBtn) {
    orderBtn.addEventListener("click", function () {

      let name = nameInput.value.trim();
      let phone = phoneInput.value.trim();
      let product = productInput.value;
      let qty = qtyInput.value;

      // ✅ VALIDATION
      if (!name || !phone || !qty) {
        alert("⚠️ Please fill all fields");
        return;
      }

      if (!/^[0-9]{10}$/.test(phone)) {
        alert("⚠️ Enter valid 10-digit phone number");
        return;
      }

      // 💰 CALCULATE TOTAL
      let price = 0;
      if (product === "1L") price = 20;
      if (product === "5L") price = 80;
      if (product === "20L") price = 250;

      let total = price * qty;

      // 📩 MESSAGE
      let message = `🛒 New Order:
Name: ${name}
Phone: ${phone}
Product: ${product}
Quantity: ${qty}
Total: ₹${total}`;

      // 🚀 OPEN WHATSAPP
      window.open(
        "https://wa.me/919816610436?text=" + encodeURIComponent(message),
        "_blank"
      );
    });
  }

  // ==============================
  // 🔹 SMOOTH SCROLL (HOME PAGE)
  // ==============================
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});