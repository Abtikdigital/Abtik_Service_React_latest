import { hydrateRoot, createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./utils/store/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root")!;
const rootContent = (
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, rootContent);
} else {
  createRoot(container).render(rootContent);
}

// Dispatch event for prerenderer
document.dispatchEvent(new Event("render-event"));
