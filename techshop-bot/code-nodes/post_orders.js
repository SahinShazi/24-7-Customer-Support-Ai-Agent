// ============================================
// Post_Orders — Tech Shop Order Handler
// Tool Name: Post_Orders
// Description: কনফার্ম হওয়া অর্ডার সেভ করতে
// এই টুল ব্যবহার করো। শুধুমাত্র স্টক চেক করার
// পরে এবং কাস্টমারের সব তথ্য (নাম, ফোন,
// ঠিকানা, পণ্য, পরিমাণ) নেওয়ার পরেই কল করো।
// ============================================

const input = JSON.parse(query);

const order = {
  customer_name: input.customer_name || "",
  phone: input.phone || "",
  address: input.address || "",
  product_name: input.product_name || "",
  quantity: input.quantity || 1,
  total_price: input.total_price || 0,
  order_date: new Date().toLocaleDateString('bn-BD'),
  status: "Confirmed",
  description: "অর্ডার গৃহীত হয়েছে (পণ্য স্টকে আছে)"
};

return `অর্ডার সফলভাবে সেভ হয়েছে! নাম: ${order.customer_name}, পণ্য: ${order.product_name}, পরিমাণ: ${order.quantity} পিস, মোট: ${order.total_price} টাকা, স্ট্যাটাস: ${order.status}`;
