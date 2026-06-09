// ============================================
// Get_Inventory — Tech Shop Product Data
// Tool Name: Get_Inventory
// Description: টেক শপের সকল পণ্যের তালিকা ও
// স্টক চেক করতে এই টুল ব্যবহার করো।
// অর্ডার নেওয়ার আগে অবশ্যই এই টুল দিয়ে
// স্টক যাচাই করো।
// ============================================

const inventory = [
  { name: "Redmi Buds 6", price: 1250, stock: 15, category: "Earbuds", description: "ওয়্যারলেস ইয়ারবাড, ৩০ ঘণ্টা ব্যাটারি, নয়েজ ক্যান্সেলেশন" },
  { name: "Havit HV-H2002d", price: 850, stock: 10, category: "Headphone", description: "গেমিং হেডফোন, LED লাইট সহ, সারাউন্ড সাউন্ড" },
  { name: "Remax RB-M10", price: 950, stock: 8, category: "Speaker", description: "পোর্টেবল ব্লুটুথ স্পিকার, ওয়াটারপ্রুফ" },
  { name: "Anker 20000mAh", price: 1800, stock: 12, category: "Power Bank", description: "ফাস্ট চার্জিং পাওয়ার ব্যাংক, দুটো পোর্ট" },
  { name: "TP-Link TL-WR840N", price: 1350, stock: 6, category: "Router", description: "৩০০Mbps WiFi রাউটার, ২টি অ্যান্টেনা" },
  { name: "Dareu A84 Pro", price: 3800, stock: 5, category: "Keyboard", description: "মেকানিক্যাল গেমিং কীবোর্ড, RGB ব্যাকলাইট" },
  { name: "Logitech M100", price: 650, stock: 20, category: "Mouse", description: "ওয়্যারড অপটিক্যাল মাউস, প্লাগ অ্যান্ড প্লে" },
  { name: "Ugreen USB Hub", price: 1100, stock: 9, category: "Accessories", description: "৪ পোর্ট USB 3.0 হাব, হাই স্পিড ট্রান্সফার" }
];

return JSON.stringify(inventory);
