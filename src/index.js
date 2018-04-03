import "./spectre/dist/spectre.min.css";
import "./spectre/dist/spectre-exp.min.css";

import "./style";

import App from "./components/app";
import { createStore, Provider } from "unistore/full/preact";
import devtools from "unistore/devtools";
import initState from "./store/initState";

let store = process.env.NODE_ENV === "production" ? createStore(initState) : devtools(createStore(initState));

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
