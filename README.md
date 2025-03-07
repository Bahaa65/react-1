# 🛂 E-Commerce Store

A **React.js** and **TypeScript**-based e-commerce application designed for a smooth shopping experience.  
This project includes:  
👉 **Adding products to the cart**  
👉 **Modifying item quantities in the cart**  
👉 **Removing items from the cart**  
👉 **Saving cart data in `localStorage` for persistence**  
👉 **Organizing products into categories (`ProductsPage.tsx`)**  
👉 **Simulated checkout process via `CheckoutPage.tsx`**  
👉 **User authentication and account management**  

---

## 📌 Key Features
- 🔹 **Product listing on the home page (`HomePage.tsx`)**
- 🔹 **Product organization by category (`ProductsPage.tsx`)**
- 🔹 **Adjustable item quantities & removal options (`CheckoutPage.tsx`)**
- 🔹 **Persistent cart storage using `localStorage`**
- 🔹 **User authentication (`AuthContext.tsx`)**
- 🔹 **Wishlist functionality (`WishlistPage.tsx`)**
- 🔹 **404 Error handling (`Error404Page.tsx`)**
- 🔹 **Smooth navigation with `React Router`**
- 🔹 **Responsive design using `Tailwind CSS`**

---

## 🚀 Run Locally
### 1️⃣ Install Dependencies
```sh
npm install
```

### 2️⃣ Start the Application
```sh
npm run dev
```
🚀 The app will be accessible at **`http://localhost:5173`** (if using Vite).

---

## 📚 Project Structure
```
/e-commerce-react
│── /public               # Contains static assets and images
│── /src
│   ├── /assets           # Image assets and SVGs
│   ├── /components       # Reusable UI components
│   │   ├── AccountDropdown.tsx  # User account menu
│   │   ├── Button.tsx           # Custom button component
│   │   ├── CartItem.tsx         # Individual cart item
│   │   ├── Footer.tsx           # Footer component
│   │   ├── Header.tsx           # Page header
│   │   ├── HeroSection.tsx      # Hero section for landing page
│   │   ├── Modal.tsx            # Modal for popups
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Product.tsx          # Single product component
│   │   ├── ProductCard.tsx      # Product display card
│   │   ├── ProductList.tsx      # List of products
│   ├── /context
│   │   ├── AuthContext.tsx      # Manages user authentication
│   │   ├── CartContext.tsx      # Manages cart functionality
│   ├── /pages
│   │   ├── AboutPage.tsx        # About page
│   │   ├── CartPage.tsx         # Shopping cart page
│   │   ├── CheckoutPage.tsx     # Checkout page
│   │   ├── ContactPage.tsx      # Contact us page
│   │   ├── Error404Page.tsx     # 404 error page
│   │   ├── HomePage.tsx         # Home page
│   │   ├── LoginPage.tsx        # User login page
│   │   ├── MyAccountPage.tsx    # User account dashboard
│   │   ├── SignUpPage.tsx       # User registration page
│   │   ├── WishlistPage.tsx     # Wishlist page
│   ├── App.tsx                  # Main application structure
│   ├── main.tsx                 # Entry point for the React app
│   ├── router.tsx               # Defines application routes
│── package.json                  # Project dependencies
│── README.md                     # Project documentation
│── tailwind.config.js             # Tailwind CSS configuration
│── vite.config.ts                 # Vite configuration
```

---

## 🔗 Application Routes
| Page | Route |
|------|-------|
| 🏠 **Home Page** | `/` |
| 🛆 **Products Page** | `/products` |
| 🛒 **Checkout Page** | `/checkout` |
| 🛒 **Cart Page** | `/cart` |
| 💖 **Wishlist Page** | `/wishlist` |
| 🔒 **Login Page** | `/login` |
| 👤 **My Account Page** | `/account` |
| 📲 **Contact Us** | `/contact` |
| ❓ **About Us** | `/about` |
| ❌ **404 Error Page** | `*` |

---

## 🛠 Technologies Used
- **⚛️ React.js** – Frontend UI framework.
- **📝 TypeScript** – Static type checking for robust code.
- **🌍 React Router** – Client-side navigation.
- **🌟 Tailwind CSS** – Lightweight and flexible styling.
- **📂 LocalStorage** – Saves cart and wishlist data for persistence.
- **🔥 Vite.js** – Fast development server.

---

## 📅 Recent Updates & Improvements
- ✅ Added `ProductsPage.tsx` to display categorized product listings.
- ✅ Improved `CheckoutPage.tsx` by adding quantity adjustment (`+ / -`) and item removal functionality.
- ✅ Implemented automatic cart and wishlist data storage in `localStorage`.
- ✅ Improved user authentication flow (`AuthContext.tsx`).
- ✅ Added `WishlistPage.tsx` to allow users to save their favorite items.
- ✅ Enhanced UI responsiveness for mobile and desktop devices.

---

## 🤝 Contributing to the Project
If you'd like to enhance this project or add new features:
```sh
git checkout -b feature/new-feature
git add .
git commit -m "🚀 Added a new feature: [describe feature]"
git push origin feature/new-feature
```
Then, open a **Pull Request** with a description of the changes.

---

## ⚡ Project Maintainer
👨‍💻 **[Bahaa Akl]**  
🚀 Happy coding! Let’s build something amazing! 🎯

