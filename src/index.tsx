import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./redux/store";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Контейнер 'root' не найден в HTML");
}

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
