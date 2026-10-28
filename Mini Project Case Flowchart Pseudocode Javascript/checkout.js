
function hitungCheckout(price, quantity, isMember) {
  // 1. Validasi input
  if (
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price <= 0 ||
    typeof quantity !== "number" ||
    !Number.isInteger(quantity) ||
    quantity <= 0 ||
    typeof isMember !== "boolean"
  ) {
    return "Input tidak valid";
  }

  // 2. Hitung subtotal
  const subtotal = price * quantity;

  // 3. Hitung diskon member
  const discount = isMember ? subtotal * 0.1 : 0;

  // 4. Hitung total setelah diskon
  const priceAfterDiscount = subtotal - discount;

  // 5. Tentukan ongkos kirim
  const shippingFee =
    priceAfterDiscount >= 250000 ? 0 : 15000;

  // 6. Hitung total pembayaran
  const totalPrice = priceAfterDiscount + shippingFee;

  // 7. Kembalikan rincian hasil
  return {
    subtotal: subtotal,
    discount: discount,
    priceAfterDiscount: priceAfterDiscount,
    shippingFee: shippingFee,
    totalPrice: totalPrice
  };
}

// Pengujian
console.log("TEST 1:", hitungCheckout(100000, 2, true));
console.log("TEST 2:", hitungCheckout(100000, 1, false));
console.log("TEST 3:", hitungCheckout(250000, 1, false));
console.log("TEST 4:", hitungCheckout(300000, 1, false));
console.log("TEST 5:", hitungCheckout(250000, 1, true));
console.log("TEST 6:", hitungCheckout(100000, 0, true));
console.log("TEST 7:", hitungCheckout(100000, -1, false));
console.log("TEST 8:", hitungCheckout(100000, 1.5, true));
console.log("TEST 9:", hitungCheckout(100000, "aku", false));
console.log("TEST 10:", hitungCheckout(0, 1, true));
console.log("TEST 11:", hitungCheckout(100000, 1, "ya"));
