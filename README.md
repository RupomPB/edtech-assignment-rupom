# EdTech Platform

A mini EdTech platform built with Next.js for browsing courses and combo packages, managing a shopping cart, submitting demo purchase requests, and managing purchases through a role-based admin dashboard.

## Features

### Student Features

- Student registration with email and password
- Secure password hashing with bcrypt
- Credentials-based login
- Google authentication
- Browse available courses
- Browse combo packages
- View course details
- View combo details
- Add courses and combos to cart
- User-specific cart using localStorage
- Demo checkout
- Submit purchase requests
- View personal purchase history
- Track purchase status
- Edit profile name
- Protected student dashboard

### Admin Features

- Separate admin dashboard
- Admin-only access control
- View all student purchase requests
- View total purchase count
- View pending purchases
- View processing purchases
- View delivered purchases
- View cancelled purchases
- Update purchase status
- Dashboard statistics update after status changes without manually refreshing the browser

### Authentication & Authorization

- NextAuth.js authentication
- Credentials authentication
- Google OAuth authentication
- Password hashing with bcryptjs
- Student and admin role separation
- Protected student dashboard
- Protected admin dashboard
- Server-side role authorization
- Server-side purchase authorization
- Students can access only their own purchase history
- Students can update only their own profile

## Tech Stack

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

## Project Structure

```text
src/
├── actions/
│   └── server/
│       ├── auth.js
│       ├── course.js
│       └── purchase.js
│
├── app/
│   ├── admin/
│   ├── api/
│   │   └── auth/
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
│
├── components/
│   ├── admin/
│   ├── auth/
│   ├── buttons/
│   ├── cards/
│   ├── dashboard/
│   └── layouts/
│
├── context/
│   └── CartContext.jsx
│
├── lib/
│   ├── authGuard.js
│   ├── authOptions.js
│   └── dbConnect.js
│
└── provider/
    └── NextAuthProvider.jsx