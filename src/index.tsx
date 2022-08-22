import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Screen } from "./Containers/Screen";
import { Provider } from "react-redux";
import { store } from "./Store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
