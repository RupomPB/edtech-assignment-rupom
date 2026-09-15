# EdTech Platform – Courses & Combos

A mini EdTech e-commerce platform built with Next.js, MongoDB, NextAuth, Tailwind CSS, and DaisyUI.

## 🔗 Live Demo

🌐 **[Visit Live Website](https://edtech-assignment-rupom.vercel.app)**

## 📂 Repository

💻 **[View Source Code on GitHub](https://github.com/RupomPB/edtech-assignment-rupom)**

---

## Features

### 👨‍🎓 Student Features
- Browse courses and combo packages
- View course and combo details
- Add courses and combos to cart
- Increase or decrease cart item quantity
- Remove items from cart
- Cart data is stored separately for each logged-in user
- Automatic total price calculation
- Demo checkout system
- Submit purchase requests
- View personal purchase history
- Track purchase status
- Edit profile information
- Login with email/password
- Google authentication

### 👨‍💼 Admin Features
- Admin-only dashboard
- View all student purchase requests
- View student information
- View purchased courses and combos
- View item quantities and prices
- View total purchase amount
- Update purchase status
- Supported statuses:
  - Pending
  - Processing
  - Delivered
  - Cancelled

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

### 🛒 Cart & Checkout
- Add courses and combo packages to cart
- Increase or decrease item quantity
- Remove items from cart
- Cart quantity is persisted per logged-in user
- Automatic total price calculation based on item quantity
- Checkout and purchase request submission
- Students can only access the checkout functionality

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

## User Roles

### Student
A student can:
- Register and login
- Browse courses and combos
- Add items to cart
- Submit purchase requests
- View their own purchase history
- Track purchase status
- Edit their profile

### Admin
An admin can:
- Access the admin dashboard
- View all purchase requests
- Monitor purchase statistics
- Update purchase status

Available purchase statuses:
- pending
- processing
- delivered
- cancelled

## Database Collections

The application uses MongoDB with the following collections:
- students
- courses
- combos
- purchases

### Students
Stores registered users and their authentication information.
Available roles:
- student
- admin

### Courses
Stores course information such as:
- Title
- Thumbnail
- Price
- Category
- Level
- Duration
- Instructor
- Total lessons
- Rating
- Student count

### Combos
Stores combo packages containing multiple courses.
Combo data includes:
- Title
- Thumbnail
- Description
- Included courses
- Regular price
- Discounted price
- Discount
- Rating
- Total courses

### Purchases
Stores student purchase requests.
Example structure:
- studentId
- studentEmail
- items
- totalPrice
- status
- createdAt

## Environment Variables

Create a `.env.local` file in the project root.

    MONGODB_URI=your_mongodb_connection_string
    DBNAME=your_database_name

    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret

    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

Never commit `.env.local` or any secret credentials to GitHub.

## 🔐 Demo Credentials

### Admin Account

- **Email:** `admin@gmail.com`
- **Password:** `123456`

> ⚠️ Demo account for testing the Admin Dashboard and purchase management features.

## Getting Started

1. Clone the repository
    `git clone https://github.com/RupomPB/edtech-assignment-rupom.git`

2. Go to the project directory
    `cd edtech-assignment-rupom`

3. Install dependencies
    `npm install`

4. Configure environment variables
   Create a `.env.local` file in the project root and add the required MongoDB, NextAuth, and Google OAuth credentials.

5. Run the development server
    `npm run dev`

Open the application in your browser:
    `http://localhost:3000`

## Google OAuth Configuration

For local development, configure the Google OAuth application with the following values.

- **Authorized JavaScript Origin:** `http://localhost:3000`
- **Authorized Redirect URI:** `http://localhost:3000/api/auth/callback/google`

## Authentication Flow

The application supports two authentication methods.

### Credentials Authentication
- Student registers with name, email, and password.
- Password is hashed using bcryptjs.
- Student logs in using email and password.
- NextAuth creates the authenticated session.
- The user's role is stored in the session.

### Google Authentication
- User selects Google login.
- Google OAuth authenticates the user.
- If the user does not exist in the database, a student record is created.
- The user receives a NextAuth session.

## Cart System

The cart is managed using React Context API.
Cart data is stored separately for each authenticated user using localStorage.

The cart key follows this pattern:
    `edtech-cart-{userId}`

This prevents different users on the same browser from sharing the same cart data.

## Purchase Flow

    Browse Courses / Combos
            ↓
    Add to Cart
            ↓
    Login Required
            ↓
    Cart
            ↓
    Proceed to Checkout
            ↓
    Purchase Request Created
            ↓
    Status: Pending
            ↓
    Admin Updates Status
            ↓
    Processing / Delivered / Cancelled

## Role-Based Authorization

Protected pages and server actions verify the authenticated user's role.

### Student Dashboard
Only authenticated users with:
    `role: student`
can access the student dashboard.

### Admin Dashboard
Only authenticated users with:
    `role: admin`
can access the admin dashboard.

Purchase status updates are also protected on the server so that only admins can change purchase status.

## Server-Side Security

Important authorization checks are handled on the server rather than relying only on frontend UI restrictions.
Examples:
- Only authenticated students can create purchases.
- Purchase ownership is determined from the authenticated session.
- Students can only retrieve their own purchases.
- Only admins can retrieve all purchases.
- Only admins can update purchase status.
- Profile updates use the authenticated user's session instead of trusting a user ID from the client.
- Invalid purchase statuses are rejected on the server.
- Invalid purchase IDs are rejected on the server.

## UI & UX

The application includes:
- Responsive layouts
- Loading states
- Error handling
- Empty states
- Protected routes
- Purchase status badges
- Admin purchase statistics
- Responsive cart layout
- Student profile management
- Instant dashboard UI refresh after admin status updates

## React Hooks & State Management

The project uses React hooks where they provide a practical purpose.

### useState
Used for:
- Form state
- Loading states
- Purchase status updates
- Profile editing
- Cart state

### useEffect
Used in the cart context to synchronize cart data with localStorage based on the authenticated user and cart changes.

### useContext
Used to provide and consume the global cart state through CartContext.

### useSession
Used with NextAuth.js to access the current authenticated user's session.

### useRouter
Used for navigation and refreshing server-rendered data after status updates.

## Next.js Features Used

- App Router
- Server Components
- Client Components
- Server Actions
- Dynamic routes
- Loading UI
- Not Found page
- Protected routes
- NextAuth.js authentication
- MongoDB integration

## Available Scripts

**Development**
    `npm run dev`

**Production Build**
    `npm run build`

**Start Production Server**
    `npm run start`

**Lint**
    `npm run lint`

## Production Build

Before deployment, test the production build:
    `npm run build`

If the build completes successfully, start the production server with:
    `npm run start`

## Repository
GitHub:
https://github.com/RupomPB/edtech-assignment-rupom.git

## Author
#**Rupom PB**

GitHub: https://github.com/RupomPB
LinkedIn: https://www.linkedin.com/in/rupom-pb/