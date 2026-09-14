# 🎓 EdTech Platform

A full-featured mini EdTech platform built with Next.js for browsing courses and combo packages, managing user carts, submitting purchase requests, and handling administrative tasks via a role-based dashboard.

---

## 🚀 Features

### 👨‍🎓 Student Features
- **Account Registration & Login:** Email & password authentication with bcryptjs encryption.
- **Social Login:** Quick sign-in using Google OAuth.
- **Course & Combo Browsing:** Explore available courses, combo packages, and view detailed descriptions.
- **User-Specific Cart:** Session-aware cart management using React Context API and localStorage.
- **Checkout System:** Submit purchase requests with real-time status tracking.
- **Student Dashboard:** View personal purchase history and update profile credentials securely.

### ⚡ Admin Features
- **Role-Protected Access:** Strictly restricted administrative area.
- **Purchase Management:** View, track, and update purchase statuses (pending, processing, delivered, cancelled).
- **Real-Time Data Sync:** Dashboard stats and tables auto-update upon status changes without requiring a manual page refresh.

### 🔐 Security & Authorization
- Server-side role validation for both student and admin.
- Ownership verification for order retrieval and profile updates.
- Robust input and route protection via NextAuth.js and Server Actions.

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16.3.4
- React 19.2.8
- JavaScript
- Tailwind CSS 4.3.3
- DaisyUI 5.7.32
- Lucide React
- React Icons
- SweetAlert2

### Backend
- Next.js Server Actions
- NextAuth.js
- MongoDB Node.js Driver
- MongoDB Atlas
- bcryptjs

### Other
- Axios
- ESLint

---

## 📂 Project Structure

src/
├── actions/
│   └── server/
│       ├── auth.js
│       ├── course.js
│       └── purchase.js
├── app/
│   ├── admin/
│   ├── api/auth/
│   ├── cart/
│   ├── combos/
│   ├── contact/
│   ├── courses/
│   ├── dashboard/
│   ├── forbidden/
│   ├── login/
│   ├── register/
│   ├── layout.jsx
│   ├── loading.jsx
│   ├── not-found.jsx
│   └── page.jsx
├── components/
│   ├── admin/
│   ├── auth/
│   ├── buttons/
│   ├── cards/
│   ├── dashboard/
│   └── layouts/
├── context/
│   └── CartContext.jsx
├── lib/
│   ├── authGuard.js
│   ├── authOptions.js
│   └── dbConnect.js
└── provider/
    └── NextAuthProvider.jsx

---

## 🗄️ Database Schemas & Roles

### User Roles
- **Student:** Browse courses/combos, manage cart, place purchase orders, view purchase history, edit profile.
- **Admin:** View total purchase metrics, update purchase statuses (pending → processing → delivered / cancelled).

### Collections
1. **students**: User authentication records & roles (student | admin).
2. **courses**: Course metadata (Title, Price, Instructor, Total lessons, Rating, etc.).
3. **combos**: Multi-course bundled packages with discounted pricing.
4. **purchases**: Order records containing student details, purchased items, total price, status, and timestamps.

---

## ⚙️ Environment Variables

Create a .env.local file in your root directory and fill in the following keys:

MONGODB_URI=your_mongodb_connection_string
DBNAME=your_database_name

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

> ⚠️ Note: Never commit your .env.local file to GitHub or share private credentials publicly.

---

## 🏁 Getting Started

1. Clone the repository:
   git clone [https://github.com/RupomPB/edtech-assignment-rupom.git](https://github.com/RupomPB/edtech-assignment-rupom.git)

2. Navigate into the project folder:
   cd edtech-assignment-rupom

3. Install dependencies:
   npm install

4. Set up environment variables:
   Configure your .env.local file with appropriate keys.

5. Run the development server:
   npm run dev

6. Open http://localhost:3000 in your browser to view the application.

---

## 🔑 Google OAuth Setup

For local testing, configure Google Console settings with:
- **Authorized JavaScript Origins:** http://localhost:3000
- **Authorized Redirect URIs:** http://localhost:3000/api/auth/callback/google

---

## 🔄 Purchase & Authentication Workflow

Browse Courses/Combos ➔ Add to Cart ➔ Login Required ➔ View Cart 
       ➔ Proceed to Checkout ➔ Request Created (Pending) 
       ➔ Admin Approval/Update ➔ (Processing / Delivered / Cancelled)

- **Cart Keying:** To ensure multi-user safety on shared local machines, cart items are stored under unique local keys: edtech-cart-{userId}.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| npm run dev | Starts the local development server |
| npm run build | Builds the optimized production build |
| npm run start | Starts the production server |
| npm run lint | Runs ESLint for code analysis |

---

## 👤 Author

**Rupom PB**

- **GitHub:** [https://github.com/RupomPB](https://github.com/RupomPB)
- **LinkedIn:** [https://www.linkedin.com/in/rupom-pb/](https://www.linkedin.com/in/rupom-pb/)
- **Repository:** [https://github.com/RupomPB/edtech-assignment-rupom.git](https://github.com/RupomPB/edtech-assignment-rupom.git)