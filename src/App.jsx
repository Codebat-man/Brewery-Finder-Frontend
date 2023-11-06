import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error404 from "./pages/Error404/index";
import Error403 from "./pages/Error403/index";
import Login from "./pages/Login/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";
import Home from "./pages/Home/index.jsx";
import Brewery from "./pages/Brewery/index.jsx";
import Reviews from "./pages/Reviews/index.jsx";

import MainLayout from "./components/MainLayout.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/brewery/:id" element={<Brewery />} />
          <Route path="/search" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/unauthorized" element={<Error403 />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
