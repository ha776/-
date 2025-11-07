// main.js

const productSelect = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const finalPriceSpan = document.getElementById("finalPrice");
const orderLink = document.getElementById("orderLink");
const discountMessageSpan = document.getElementById("discountMessage");
const discountRateSpan = document.getElementById("discountRate");
const pricePerUnitSpan = document.getElementById("pricePerUnit");

function updatePrice() {
  let pricePerUnit = parseInt(productSelect.value);
  let quantity = Math.max(1, parseInt(quantityInput.value) || 1);

  // تحديد نسبة الخصم حسب الكمية
  let discountRate = 0;
  let discountMessage = "لا يوجد خصم على هذا العدد";

  if (quantity >= 3 && quantity <= 4) discountRate = 0.03, discountMessage = "لقد حصلت على خصم 3%";
  else if (quantity >= 5 && quantity <= 6) discountRate = 0.05, discountMessage = "لقد حصلت على خصم 5%";
  else if (quantity > 6) discountRate = 0.1, discountMessage = "لقد حصلت على خصم 10%";

  // حساب السعر النهائي
  let total = pricePerUnit * quantity * (1 - discountRate);

  // تحديث الصفحة
  finalPriceSpan.textContent = total.toLocaleString();
  pricePerUnitSpan.textContent = pricePerUnit.toLocaleString();
  discountRateSpan.textContent = (discountRate * 100) + "%";
  discountMessageSpan.textContent = discountMessage;

  // تحديث رابط واتساب
  orderLink.href = `https://wa.me/967776383158?text=مرحباً، أريد طلب ${quantity} منتج/منتجات (${productSelect.options[productSelect.selectedIndex].text}) بسعر ${total.toLocaleString()} ريال (${discountMessage})`;
}

// التحديث عند تغيير المنتج أو الكمية أو تحميل الصفحة
quantityInput.addEventListener("input", updatePrice);
productSelect.addEventListener("change", updatePrice);
window.addEventListener("load", updatePrice);
