import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import store from "./redux/store";

import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";

import App from "./App";
import { theme } from "./theme";
import "./index.css";

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();