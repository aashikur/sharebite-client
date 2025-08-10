# 🍽️ ShareBite Client - Community Food Sharing Platform Frontend

## 🚀 Project Purpose

**ShareBite Client** is the frontend application for the ShareBite community food sharing and surplus reduction platform. Built with React, Tailwind CSS, and Firebase Authentication, this modern, responsive web app empowers users to donate, request, and manage surplus food, helping to reduce waste and support local communities.

#### **Live Frontend URL**: [https://flow-better.web.app/](https://flow-better.web.app/)

#### **Live API URL**: [https://sharebite-server.vercel.app](https://sharebite-server.vercel.app)

---

## 🌟 Key Features

- 🍲 **Food Management**
  - Add, view, update, and delete food items
  - Filter and search foods by name and expiry date
  - Food status management (available/requested)
  - Donor-based food ownership and management

- 🔐 **Authentication & Security**
  - Firebase Authentication (email/password & Google login)
  - JWT token-based authorization for private routes
  - Protected pages for authenticated users only
  - Environment variable protection for sensitive data

- 🛒 **Food Request System**
  - Request available foods
  - Track all requests made by a user
  - Prevent duplicate requests for the same food
  - Change food status to "requested" upon request

- 📊 **Advanced Filtering & Search**
  - Search foods by name (regex)
  - Sort foods by expiry date
  - Toggle between 2-column and 3-column grid layouts

- 🎨 **Modern UI & UX**
  - Responsive design for mobile, tablet, and desktop
  - Light/Dark mode toggle
  - Lottie and Framer Motion animations
  - SweetAlert2 for all user actions (success, error, confirmation)
  - Clean, recruiter-friendly design

- 🛠️ **Developer Experience**
  - Modular component structure
  - Custom Axios hook for secure API calls
  - TanStack React Query for efficient data fetching and mutation

---

## 🔧 Used Technologies

| Package                | Purpose                         |
| ---------------------- | ------------------------------- |
| `react`                | Frontend framework              |
| `react-router`         | Routing                         |
| `@tanstack/react-query`| Data fetching & mutation        |
| `axios`                | HTTP requests                   |
| `tailwindcss`          | Styling                         |
| `firebase`             | Authentication                  |
| `sweetalert2`          | Alerts & confirmations          |
| `react-helmet`         | Meta tags & SEO                 |
| `lottie-react`         | Animations                      |
| `framer-motion`        | Animations                      |

---

## 📝 Main Pages & Routes

| Route                | Description                                 | Access    |
| -------------------- | ------------------------------------------- | --------- |
| `/`                  | Home page (banner, featured foods, etc.)    | Public    |
| `/foods`             | All available foods (search, sort, grid)    | Public    |
| `/foods/:id`         | Food details & request modal                | Private   |
| `/add-food`          | Add new food                                | Private   |
| `/manage-foods`      | Manage foods added by user                  | Private   |
| `/my-requests`       | View all food requests by user              | Private   |
| `/login`             | Login page                                  | Public    |
| `/registration`      | Register page                               | Public    |
| `/profile`           | User profile (edit name/photo)              | Private   |
| `*`                  | 404 Not Found                               | Public    |

---

## 📊 Data Flow

- **Authentication:**  
  - Firebase Auth handles login, registration, and Google login.
  - JWT token is stored in localStorage and sent with API requests.

- **Food Management:**  
  - Users can add, edit, and delete their own foods.
  - All foods are fetched from the backend and displayed in a responsive grid.

- **Food Requests:**  
  - Users can request available foods.
  - Requests are tracked and displayed in the "My Requests" page.

---

## 🛠️ Project Structure

```
src/
  assets/           # Images, Lottie files
  components/       # Reusable UI components (Header, Footer, etc.)
  pages/            # Page components (Home, Foods, AddFood, etc.)
  providers/        # AuthProvider and context
  routes/           # Route definitions and PrivateRoute
  hooks/            # Custom hooks (e.g., useAxiosSecure)
  styles/           # Tailwind and global styles
  App.jsx
  main.jsx
```

---

## 📝 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/sharebite-client.git

# Navigate to project directory
cd sharebite-client

# Install dependencies
npm install

# Create environment file
touch .env

# Configure environment variables (see below)
# Add all required Firebase and API credentials

# Start the development server
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=https://sharebite-server.vercel.app
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

---

## 🚀 Deployment

### Prerequisites

- Firebase project with Hosting and Authentication enabled
- Environment variables configured in Firebase Hosting or Vercel/Netlify

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Build the project
npm run build

# Deploy to Firebase Hosting
firebase deploy
```

---

## 🔒 Security Features

- **JWT Authorization:** All private API calls include JWT in headers
- **Private Routes:** Only logged-in users can access private pages
- **Environment Protection:** All sensitive data stored in environment variables

---

## 🎯 Assignment Requirements Fulfilled

- ✅ **Authentication:** Firebase Auth with JWT integration
- ✅ **CRUD Operations:** Complete food management system
- ✅ **Filtering & Search:** Search and sort foods
- ✅ **Private Routes:** Protected pages for logged-in users
- ✅ **User Management:** Profile editing, food/request tracking
- ✅ **Modern UI:** Responsive, recruiter-friendly, light/dark mode
- ✅ **Animations:** Lottie and Framer Motion
- ✅ **Error Handling:** SweetAlert2 for all user actions

---

## 📱 Backend Integration

This frontend is designed to work with the ShareBite API:

- [https://sharebite-server.vercel.app](https://sharebite-server.vercel.app)

---

**Made with ❤️ for the community. Reduce food waste, share a bite!**

---

**Edit the repo links, API URLs, and any custom features as needed!**  
Let me know if you want a shorter version or want to add/change any section.