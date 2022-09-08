import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import APIs from "./pages/Dashboard/Apis";
import API from "./pages/Dashboard/Apis/Api";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="apis">
                {/* APIs archive page */}
                <Route index element={<APIs />} />

                <Route path=":apiID" element={<API />}>
                  {/* API entry page */}
                </Route>
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
