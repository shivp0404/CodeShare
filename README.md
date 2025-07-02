# 🚀 CodeShare

CodeShare is a full-stack, web-based app for storing and sharing code snippets ("synapts") with tags and descriptions. Enjoy full CRUD operations, secure authentication, and real-time collaboration—all in a beautiful, responsive UI! 🎨

---

## ✨ Features

- 📝 **Store, Edit, & Delete Snippets:** Manage your code library with ease.
- 🏷️ **Tags & Descriptions:** Organize snippets for quick search and filtering.
- 🔒 **Authentication:** Secure login and session management.
- 🌈 **Colorful Code Editing:** Powered by [CodeMirror 2](https://codemirror.net/) in the editor!
- ⚡ **Real-Time Collaboration:** WebSocket-powered live interactions.
- 📱 **Responsive UI:** Built with [Tailwind CSS](https://tailwindcss.com/)—looks great everywhere.
- 🛠️ **Easy-to-use Tools:** Developer-friendly, intuitive design.

---

## 🛠️ Tech Stack

- **Frontend:** Vite.js ⚡, React ⚛️, Tailwind CSS 🌬️, CodeMirror 2 🖋️
- **Backend:** Express.js 🚂, Node.js 🌲, MongoDB 🍃 (via Mongoose)
- **Authentication:** Passport.js 🛂, JWT 🪪, bcryptjs 🔑
- **Real-time:** Socket.io 📡

---

## 📦 Cloning & Usage

> **🎨 Design Only?**  
> To view just the UI/design, clone only the `codeshare-frontend` folder:

```bash
git clone https://github.com/your-username/CodeShare.git
cd CodeShare/codeshare-frontend
npm install
npm run dev
```

> **🌐 Full App?**  
> For the complete app with backend & frontend, clone only the `codeshare-backend` folder (frontend is merged inside):

```bash
git clone https://github.com/your-username/CodeShare.git
cd CodeShare/codeshare-backend
```
See **Getting Started** below for details.

---

## 🚦 Getting Started

### 🔗 Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node.js)
- MongoDB (local or cloud instance)

### 🏁 Installation

1. **Clone the repository**  
   (See "Cloning & Usage" above)

2. **Install Dependencies**

    ```bash
    npm install
    ```
    _or use_ `requirements.txt`:
    ```bash
    npm install $(cat requirements.txt)
    ```

3. **Configure Environment Variables**

    - Copy `.env.example` or `.env` from the repo root.
    - Set your MongoDB URI:
      ```
      DB_URI="your-mongodb-link"
      ```
    - See the sample `.env` file below. ⬇️

4. **Run the Project**

    ```bash
    npm run dev
    ```
    _Your app will be live at [http://localhost:3000](http://localhost:3000) (or as configured)!_

---

## 📄 requirements.txt

Paste this in a `requirements.txt` file in your backend root for bulk install:

```
bcryptjs@^2.4.3
body-parser@^1.20.2
cookie-parser@^1.4.6
dotenv@^16.5.0
express@^4.19.2
express-session@^1.18.0
jsonwebtoken@^9.0.2
mongodb@^6.16.0
mongoose@^8.15.0
passport@^0.7.0
passport-local@^1.0.0
socket.io@^4.8.1
```

Install all with:

```bash
npm install $(cat requirements.txt)
```

---

## 🛡️ .env Example

Copy this to your `.env` file and fill in your MongoDB URI:

```
DB_URI="your-mongodb-link"
```

---

## 📚 Usage

- Visit the app in your browser (default: [http://localhost:3000](http://localhost:3000) or as configured).
- Register/login to start managing your code snippets.
- Create, edit, search, and delete synapts.
- Tag and describe your code for easy organization.
- Enjoy real-time collaboration features. 🚀

---

## 🖼️ Screenshots

- ![CodeShare home page ](./screenshots/home%20page.png)
- ![CodeShare login page ](./screenshots/login%20page.png)
- ![CodeShare profile page ](./screenshots/profile%20page.png)
- ![CodeShare view page ](./screenshots/view%20page.png)
- ![CodeShare add page ](./screenshots/add%20page.png)



---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## ⚖️ License

[MIT](./LICENSE)

---

## 🙏 Acknowledgments

- [Vite.js](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CodeMirror 2](https://codemirror.net/)
