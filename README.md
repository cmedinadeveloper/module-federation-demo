# module-federation-demo

This repository demonstrates **Module Federation** with **Vite** and **React** using two separate applications:

- **host**: The main application that loads remote components.
- **remote**: The remote application exposing components to be consumed by the host.

---

## Project Structure

```
module-federation-demo/
├── host/      # Host application (loads remote modules)
└── remote/    # Remote application (exposes modules)
```

---

## How It Works

- The **remote** app exposes a React component via [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation).
- The **host** app dynamically loads and renders the remote component using React's `lazy` and `Suspense`.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm, npm, or yarn

### 1. Install Dependencies

```sh
cd remote
npm install

cd ../host
npm install
```

### 2. Run the Remote App

```sh
cd remote
npm run dev
# Runs on http://localhost:5001
```

### 3. Run the Host App

In a new terminal:

```sh
cd host
npm run dev
# Runs on http://localhost:5173
```

### 4. Open the Host App

Visit [http://localhost:5173](http://localhost:5173) in your browser.  
You should see the Host Application rendering the remote component.

---

## Key Files

- `remote/vite.config.ts`: Configures module federation and exposes the component.
- `remote/src/components/Button.tsx`: The exposed remote component.
- `host/vite.config.ts`: Configures the host to consume the remote app.
- `host/src/App.tsx`: Loads and renders the remote component using React's `lazy`.

---

## Useful Links

- [Vite Plugin Federation Docs](https://github.com/originjs/vite-plugin-federation)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)

---

## License

MIT

---

**Author:** Carlos Medina
