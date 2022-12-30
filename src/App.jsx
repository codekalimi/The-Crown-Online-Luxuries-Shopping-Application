import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.component";
import Navigation from "./routes/Navigation/Navigation.component";
import AuthenticationComponent from "./routes/Authentication/Authentication.component";
import ShopComponent from "./components/Shop/Shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopComponent />} />
        <Route path="auth" element={<AuthenticationComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
