<div align="center">

# 🚘 DRIVR

### **Your Car. Your Driver. Your Day.**

_A premium, responsive driver-booking platform for India — built for people who own the car but would rather not drive._

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/PWA-ready-4162EB?style=for-the-badge" alt="PWA ready" />
</p>

[✨ Features](#-what-you-can-do) · [🖼️ Screens](#️-product-screens) · [🚀 Run locally](#-run-locally) · [🔐 Payments](#-payments--production-integration)

### 🌐 Live demo

https://drivr-for-drivers.vercel.app/

</div>

---

## 🌟 The idea

**DRIVR is not a taxi app.** Customers keep their own vehicle and book a trusted professional driver for a few hours, a late-night plan, an airport drop, a wedding, a business trip, or a road trip.

> **Your car stays yours. We bring the driver.**

The interface is designed as a full-width desktop product experience that adapts cleanly to tablet and mobile, with a compact bottom navigation for touch devices.

## 🖼️ Product screens

<div align="center">

| Desktop dashboard | Booking journey |
| :---: | :---: |
| <img src="./SCREENSHOTS/Screenshot%20(82).png" alt="DRIVR desktop dashboard" width="100%" /> | <img src="./SCREENSHOTS/Screenshot%20(83).png" alt="DRIVR booking journey" width="100%" /> |

| Driver matching | Secure payment |
| :---: | :---: |
| <img src="./SCREENSHOTS/Screenshot%20(84).png" alt="Verified driver selection" width="100%" /> | <img src="./SCREENSHOTS/Screenshot%20(85).png" alt="Payment flow" width="100%" /> |

| Booking management | Driver workspace |
| :---: | :---: |
| <img src="./SCREENSHOTS/Screenshot%20(86).png" alt="Bookings and trips" width="100%" /> | <img src="./SCREENSHOTS/Screenshot%20(87).png" alt="Driver dashboard" width="100%" /> |

| Admin operations | Mobile-ready interface |
| :---: | :---: |
| <img src="./SCREENSHOTS/Screenshot%20(88).png" alt="Admin operations dashboard" width="100%" /> | <img src="./SCREENSHOTS/Screenshot%20(90).png" alt="Responsive DRIVR interface" width="100%" /> |

</div>

## ✨ What you can do

### 🙋 Customer experience

- Search for a pickup and destination across India — city, area, landmark, airport, or pincode.
- Use browser geolocation for the current pickup location.
- Pick the date, time, duration, and driver category.
- Compare verified drivers by rating, experience, languages, distance/ETA, and transparent fare.
- Review the booking, apply the `DRIVR75` demo coupon, choose a payment method, and receive a confirmation.
- Manage upcoming and completed trips, request a reschedule, cancel, rate a completed driver, and access payment receipts.
- Update profile details, saved locations, vehicle, family-safety contacts, and support access points.

### 🧑‍✈️ Driver workspace

- Toggle availability online/offline.
- Review a privacy-aware incoming booking request.
- Accept or decline a request with immediate feedback.
- View earnings, completed trips, rating, online hours, and a weekly earnings visualization.

### 🛡️ Admin workspace

- Explore operational views for drivers, verification, bookings, payments, cancellations, reviews, coupons, and reports.
- Monitor marketplace KPIs and act on verification, live-trip, and payment-reconciliation queues.

## 🎨 UX highlights

| Principle | How it appears in DRIVR |
| --- | --- |
| **Trust first** | Driver badges, ratings, languages, vehicle readiness, trip-protection pricing, and safety messaging. |
| **Clear pricing** | Fare breakdown before payment; coupon saving and total are always visible. |
| **Responsive by default** | Full desktop dashboard, adaptive tablet grids, and touch-first mobile navigation. |
| **No dead ends** | Primary actions advance flows, update persisted demo data, or show clear feedback. |
| **PWA-ready** | Install metadata, theme color, and an offline application shell are included. |

## 🧱 Project structure

```text
src/
├── App.tsx                  # Responsive UI, customer, driver & admin demo flows
├── App.css                  # Full visual system and responsive breakpoints
├── services/
│   └── demoStore.ts         # Persisted demo bookings/profile + payment integration boundary
└── main.tsx                 # React entry point + service-worker registration

public/
├── manifest.webmanifest     # PWA metadata
└── sw.js                    # Offline shell cache
```

## 🚀 Run locally

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Install and start

```bash
npm install
npm run dev
```

Open the URL printed by Vite — typically `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview
```

> **Windows PowerShell note:** if script execution is restricted, use `npm.cmd run dev` and `npm.cmd run build`.

## 🔐 Payments & production integration

The included payment journey is an **interactive test-mode prototype**. It creates a demo payment ID and confirms the booking only after the simulated checkout succeeds.

For a production Razorpay integration:

1. Set the public checkout key in `.env.local`:

   ```env
   VITE_RAZORPAY_KEY_ID=rzp_test_your_public_key
   ```

2. Create Razorpay orders on a secure backend — never in the browser.
3. Open Razorpay Checkout with the server-created order ID.
4. Verify the Razorpay payment signature on the backend before changing a booking to `Confirmed`.
5. Store bookings, payments, users, driver documents, and audit logs in your database instead of the local demo store.

> 🔒 Never commit secret Razorpay keys. `VITE_` variables are exposed to the browser, so only a public test/live checkout key belongs there.

## 🗃️ Demo persistence

The interactive prototype persists **bookings** and the **profile name** in `localStorage` using [`src/services/demoStore.ts`](./src/services/demoStore.ts). This makes booking confirmations, cancellations, and payment history survive a refresh during local testing.

Replace the store methods with authenticated API calls when connecting PostgreSQL, OTP authentication, Google Maps/Places, Socket.IO tracking, cloud document storage, and the payment backend.

## 🧭 Suggested next integrations

- [ ] OTP authentication with rate limiting
- [ ] Google Maps + Places autocomplete and route estimates
- [ ] PostgreSQL + role-based API (customer, driver, admin)
- [ ] Razorpay order creation and webhook/signature validation
- [ ] Socket.IO trip and driver-availability updates
- [ ] Driver KYC/document workflow with protected file storage
- [ ] Vehicle handover inspection and OTP confirmation
- [ ] Live trip-sharing links and SOS escalation

---

<div align="center">

Built with care for Indian roads, real-world plans, and the freedom to **drive less and live more**. 💙

</div>
