# Nxt Trendz - Cart Features

In this project, let's build a **Nxt Trendz - Cart Features** by applying the concepts we have learned till now.

---

## 🎥 Project Output

<div style="text-align: center;">
  <video style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-output.mp4" type="video/mp4">
  </video>
</div>

---

## 🎨 Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-lg-output.png)

</details>

---

## ⚙️ Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running

  ```bash
  npm install
  ✅ Completion Instructions
  <details> <summary>Functionality to be added</summary> <br/>
  ```

The app must have the following functionalities:

🧩 Feature 1

When an authenticated user tries to add the same product multiple times:

The quantity of the product should be updated accordingly.

The count of the cart items in the header should remain the same.

💰 Feature 2

The total amount and number of items in the cart should be displayed in the Cart Route.

➕➖ Feature 3

In each cart item:

When the plus icon is clicked, the quantity should increase by one.

When the minus icon is clicked, the quantity should decrease by one.

If the quantity is one and the minus icon is clicked, the product should be removed.

The product price and total cart cost should update dynamically.

❌ Feature 4

Clicking the Remove button should remove that cart item.

🗑️ Feature 5

Clicking the Remove All button should remove all items from the cart.

If the cart is empty, show the Empty Cart View
.

🧠 CartContext Methods

The CartContext provides the following:

Key Description
cartList Stores the cart items
addCartItem() Adds an item to the cart
removeCartItem() Removes a specific item
incrementCartItemQuantity() Increases item quantity
decrementCartItemQuantity() Decreases item quantity
removeAllCartItems() Clears the cart

</details>
🧱 Components Structure
<details> <summary>Click to view</summary> <br/> <div style="text-align: center;"> <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-component-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)"> </div> </details>

🗂️ Implementation Files

<details> <summary>Click to view</summary>
src/
│
├── App.js
├── App.css
├── index.js
├── index.css
│
├── context/
│   └── CartContext.js
│
├── components/
│   │
│   ├── Login/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── LoginForm/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── Header/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── Home/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── Products/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── AllProductsSection/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── ProductCard/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── ProductItemDetails/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── ProductsHeader/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── SimilarProductItem/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── FiltersGroup/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── PrimeDealsSection/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── Cart/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── CartListView/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── CartItem/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── CartSummary/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── EmptyCartView/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── ProtectedRoute/
│   │   ├── index.js
│   │   └── index.css
│   │
│   └── NotFound/
│       ├── index.js
│       └── index.css

</details>

🧩 Component Descriptions
Component Description
Login / LoginForm Handles user authentication (Prime & Non-Prime)
Header Navigation bar (logo, links, cart count, logout)
Home Landing page with banner and "Shop Now" button
Products Main container for product list
AllProductsSection Fetches and renders product list with sorting
ProductCard Displays each product in product list
ProductItemDetails Shows full details of selected product and add-to-cart
ProductsHeader Sort dropdown and filter header for products
SimilarProductItem Displays related/similar products
FiltersGroup Category, price, and rating filters
PrimeDealsSection Shows Prime member exclusive deals
Cart Main cart page displaying added products
CartListView Shows list of all products inside the cart
CartItem Individual item inside cart (with + / - / remove)
CartSummary Shows total price, number of items, and checkout info
EmptyCartView Shown when cart has no items
ProtectedRoute Restricts pages for logged-in users only
NotFound Displays for undefined routes

💡 Quick Tips

<details> <summary>Click to view</summary>

Use line-height to adjust spacing between lines of text.

line-height: 1.5;

Use find() to check if an item already exists in the array:

const existingItem = cartList.find(each => each.id === newItem.id)

</details>
⚠️ Important Notes
<details> <summary>Click to view</summary>

Use icons from react-icons:

BsPlusSquare and BsDashSquare for quantity buttons.

AiFillCloseCircle for the remove button.

Each Cart Item must include:

Plus button → data-testid="plus"

Minus button → data-testid="minus"

Remove button → data-testid="remove"

The product image must have alt={title}.

👤 Login Credentials

Prime User

username: rahul
password: rahul@2021

Non-Prime User

username: raja
password: raja@2021

</details>
