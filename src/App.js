import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/route";
import Spinner from "./components/Spinner";
import AppWrapper from "./components/AppWrapper";

const Login = React.lazy(() => import("./pages/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AppWrapper>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<PrivateRoute />}>
              <Route path="" element={<Dashboard />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AppWrapper>
    </Suspense>
  );
}

export default App;
