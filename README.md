# CodeShare

CodeShare is a full-stack, web-based application for storing and sharing code snippets ("synapts") with tags and descriptions. It supports full CRUD operations, user authentication, and real-time collaboration, all wrapped in a responsive and user-friendly interface.

## Features

- **Store, Edit, and Delete Snippets**: Manage your personal library of code snippets with ease.
- **Add Tags & Descriptions**: Organize your snippets for quick searching and filtering.
- **Full Authentication**: Secure login and session management.
- **Beautiful Code Editing**: Uses [CodeMirror 2](https://codemirror.net/) for syntax-highlighted code editing.
- **Responsive UI**: Built with [Tailwind CSS](https://tailwindcss.com/) for mobile and desktop.
- **Easy-to-use Tools**: Intuitive interface for developers of all skill levels.

## Tech Stack

- **Frontend**: Vite.js, React, Tailwind CSS, CodeMirror 2 (React integration)
- **Backend**: Express.js, Node.js, MongoDB (via Mongoose)
- **Authentication**: Passport.js, JWT, bcryptjs


## Cloning & Usage

- **Frontend-only (Design/Mockup):**
    - To view only the UI/design, clone the `codeshare-frontend` folder:
      ```bash
      git clone https://github.com/your-username/CodeShare.git
      cd CodeShare/codeshare-frontend
      npm install
      npm run dev
      ```

- **Full App (Frontend + Backend):**
    - To use the complete app with backend functionality, clone only the `codeshare-backend` folder (the frontend is merged inside the backend):
      ```bash
      git clone https://github.com/your-username/CodeShare.git
      cd CodeShare/codeshare-backend
      ```
    - See "Getting Started" for setup details.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node.js)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**  
   (See section above for which folder to clone)

2. **Install Dependencies**

    ```bash
    npm install
    ```

    Or use `requirements.txt`:

    ```bash
    npm install $(cat requirements.txt)
    ```

3. **Configure Environment Variables**

    - Copy  `.env` from the repo root.
    - Set your MongoDB URI:
      ```
      DB_URI="your-mongodb-link"
      ```
    - See the sample `.env` file below.

4. **Run the Project**

    ```bash
    npm run dev
    ```

### requirements.txt

Paste the following in a `requirements.txt` file in your backend root (for reference or bulk install):

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

## .env Example

Copy this to your `.env` file and fill in your MongoDB URI:

```
DB_URI="your-mongodb-link"
```

## Usage

- Visit the app in your browser (default: [http://localhost:3000](http://localhost:3000) or as configured).
- Register/login to start managing your code snippets.
- Create, edit, search, and delete synapts.
- Tag and describe your code for easy organization.
- Enjoy real-time collaboration features.

## Screenshots

*Screenshots coming soon!*

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](./LICENSE)

## Acknowledgments

- [Vite.js](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CodeMirror 2](https://codemirror.net/)
