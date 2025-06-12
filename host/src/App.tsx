import { lazy, Suspense } from "react";
import "./App.css";

const RemoteButton = lazy(() => import("remote_app/Button"));

function App() {
  return (
    <div className="App">
      <h1>Host Application</h1>
      <Suspense fallback={<div>Loading Remote Button...</div>}>
        <RemoteButton />
      </Suspense>
    </div>
  );
}

export default App;
