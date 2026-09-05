# Floria FE 🌸

Frontend application for the **Floria** flower shop.

This project focuses on building a scalable and maintainable frontend architecture with modern tooling, clean UX patterns, and end-to-end testing.

---

## Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite (with SWC)
- **UI Library:** Material UI (MUI)
- **State Management:** Zustand
- **Form Handling:** React Hook Form
- **Testing:** Playwright (E2E)

---

## Getting Started

### Prerequisites

* Node.js >= 22
* npm

### Install dependencies

npm install

### Run locally

npm run dev

The app will be available at: [http://localhost:5173](http://localhost:5173)

---

## Scripts

* `npm run dev` — start development server
* `npm run build` — build production version
* `npm run preview` — preview production build locally
* `npm run test:e2e` — run end-to-end tests (Playwright)
* `npm run test:e2e:ui` — open Playwright interactive test UI

---

## UI Library

The project uses **Material UI (MUI)** as the component library. A base theme and `CssBaseline` are configured in `main.tsx`.

---

## Testing & Continuous Integration

The project uses **Playwright** for end-to-end (E2E) testing. E2E tests verify core user flows such as application startup, page rendering, navigation between routes, and handling of unknown routes (404).

End-to-end tests are automatically executed using GitHub Actions on each push and pull request. The workflow configuration is located at: `.github/workflows/playwright.yml`.

---

## Architecture Deep Dive: Shopping Cart

The shopping cart in this project is designed to be highly performant, scalable, and reactive. We use **Zustand** for state management. 

### Why Zustand over Context API?
React Context API is great for static or rarely changing data (like themes or localization). However, using it for frequently updating state (like a shopping cart) causes unnecessary re-renders of all components consuming the context. Zustand solves this by allowing components to subscribe to specific slices of state (using selectors) and leveraging closures efficiently.

### State Management (Zustand)

The core cart state is managed in `src/store/cart.store.ts`. 

Instead of storing an array of items, the state uses a normalized **Hash Map** (`Record<string, CartItem>`). This provides O(1) time complexity for all CRUD operations (adding, updating, or removing items).

*   **Composite Keys:** Since a single product can be added to the cart multiple times with different packaging types, the state uses a composite key to uniquely identify cart items: 
    `getCartItemId(productId, wrapType) // e.g., "123_luxury"`
*   **Immutability:** All store methods strictly adhere to immutability principles. We use the spread operator (`...`) to create shallow copies of the state object, ensuring React perfectly detects changes via reference equality.

### Data Flow: The `useEnrichedCart` Pattern

To keep the global state as lightweight as possible, the Zustand store **only saves meta-information**: `productId`, `wrapType`, and `quantity`. It does not store static data like titles, images, or base prices.

When rendering the UI, we use the `useEnrichedCart` hook. This hook acts as a ViewModel:
1. It reads the raw items from the Zustand store.
2. It fetches the static product details (currently via `getProductDetailsSync` / `ALL_CART_ITEMS` mock).
3. It merges them into an array of `{ cartItem, product }` objects.
4. It calculates the total sum dynamically, including specific package pricing logic.

### Advanced Zustand Implementation & JS Core Concepts

Our Zustand configuration leverages advanced patterns to ensure reliability and type safety:

1. **TypeScript Integration:** We use the curried function approach (`create<CartState>()(...)`) to ensure all state properties and action signatures within the `set` function are strictly checked by TypeScript.
2. **Persist Middleware & Partialize:** The cart state is persisted to `localStorage`. We explicitly define `partialize: (state) => ({ items: state.items })`. This ensures we *only* save the data dictionary, leaving out functions or UI state, preventing serialization errors and storage bloat.
3. **State Updates and Closures (JS Core):** When updating state inside actions, we consistently use the callback pattern: `set((state) => ({ ... }))`. In React and Zustand, using the callback form avoids **stale closure** bugs. It guarantees the action always operates on the most current state reference in memory, circumventing issues where event handlers might capture outdated variables from previous render cycles.

### Developer Guidelines: Working with the Cart

If you need to interact with the cart in a new component, please follow these rules:

1.  **Do not mutate the state directly:** Always use the provided actions (`addToCart`, `updateQuantity`, etc.) from `useCartStore`.
2.  **Use Selectors:** When reading from the store, pass a selector function to avoid full component re-renders. 
    *   **Correct:** `const total = useCartStore(selectCartTotalCount);`
    *   **Incorrect:** `const { items } = useCartStore();` (This will re-render the component on *any* cart change).
3.  **Handling Object State:** Because `state.items` is a Hash Map (Object), you cannot use array methods like `.map()` or `.reduce()` directly on it. Use `Object.values(state.items)` first, as demonstrated in `selectCartTotalCount`.
4.  **Accessories vs. Products:** Both standard products and accessories (e.g., greeting cards) share the same `CartDisplayItem` interface. Accessories simply bypass the packaging logic by using `'none'` as their `wrapType`.

---

## Project Status

🚧 **Initial setup completed.** The architecture is stabilized.

The project is ready for team development and further feature implementation.