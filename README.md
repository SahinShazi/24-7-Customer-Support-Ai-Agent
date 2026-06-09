# 🛍️ Tech Shop Customer Support Bot

![n8n](https://img.shields.io/badge/n8n-Workflow-orange?style=flat-square&logo=n8n)
![Telegram](https://img.shields.io/badge/Telegram-Bot-blue?style=flat-square&logo=telegram)
![Gemini](https://img.shields.io/badge/Google-Gemini%20AI-green?style=flat-square&logo=google)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

An intelligent Telegram-based customer support bot for **Tech Shop** — built with **n8n**, **Google Gemini AI**, and **JavaScript Code Nodes**. The bot handles product inquiries, order placement, stock checking, and FAQ responses — entirely in Bengali.

---

## ✨ Features

- 🤖 **AI-Powered** — Google Gemini 1.5 Flash handles all conversations
- 🇧🇩 **Full Bengali Support** — Responds entirely in Bengali
- 🛒 **Order Management** — Takes orders step by step and confirms availability
- 📦 **Stock Checking** — Real-time inventory lookup before confirming orders
- ❓ **FAQ System** — Instant answers for delivery, payment, warranty, returns
- 🧠 **Memory** — Remembers conversation context per user via Chat ID
- ⚡ **No External Database** — All data stored in n8n Code Nodes (no Airtable/Sheets needed)

---

## 🧱 Workflow Structure

```
Telegram Trigger
      ↓
   AI Agent (Gemini 1.5 Flash + Memory)
   ↙        ↓        ↘
Get_Inventory  Get_FAQ  Post_Orders
      ↓
Telegram Send
```

---

## 📁 Project Files

```
techshop-bot/
├── workflow/
│   └── techshop_workflow.json     # Main n8n workflow (import this)
├── code-nodes/
│   ├── get_inventory.js           # Product list & stock data
│   ├── get_faq.js                 # FAQ data
│   └── post_orders.js             # Order confirmation handler
├── system-prompt/
│   └── system_prompt.txt          # AI Agent system message (Bengali)
└── README.md
```

---

## 🚀 Setup Guide

### Step 1 — Import Workflow
1. Open your n8n instance
2. Click **"Import"** → select `workflow/techshop_workflow.json`

### Step 2 — Add Credentials

| Credential | Where to Get |
|---|---|
| Telegram Bot API | [@BotFather](https://t.me/BotFather) on Telegram |
| Google Gemini API | [aistudio.google.com](https://aistudio.google.com/app/apikey) |

### Step 3 — Activate
Click **"Active"** toggle → Bot is live ✅

---

## 🛠️ Code Nodes — Data

### Inventory (8 Products)
| Product | Price | Stock |
|---|---|---|
| Redmi Buds 6 | ১২৫০ ৳ | 15 |
| Havit HV-H2002d | ৮৫০ ৳ | 10 |
| Remax RB-M10 | ৯৫০ ৳ | 8 |
| Anker 20000mAh | ১৮০০ ৳ | 12 |
| TP-Link TL-WR840N | ১৩৫০ ৳ | 6 |
| Dareu A84 Pro | ৩৮০০ ৳ | 5 |
| Logitech M100 | ৬৫০ ৳ | 20 |
| Ugreen USB Hub | ১১০০ ৳ | 9 |

> To update products or FAQ, simply edit the Code Node inside n8n.

---

## 💬 Bot Capabilities

| User Says | Bot Does |
|---|---|
| হ্যালো / হাই | Welcome message with menu |
| অর্ডার করতে চাই | Collects name, product, qty, address → checks stock → confirms |
| স্টক আছে? | Checks inventory and replies |
| ডেলিভারি কতদিনে হয়? | Answers from FAQ |
| অর্ডার বাতিল করতে চাই | Politely redirects to phone number |

---

## 👤 About

**Tech Shop** is managed by **Sahin Enam** — a self-taught web developer and tech enthusiast from Bangladesh.

- 🌐 Website: [sahinenam.blogspot.com](https://sahinenam.blogspot.com)
- 📞 Contact: ০১৮৩৮০৪০০৫১

---

## 📄 License

This project is open source under the [MIT License](LICENSE).
