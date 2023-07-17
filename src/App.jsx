import Home from "./routes/home";

import Navigation from "./components/navigation/Navigation";

import { Route, Routes } from "react-router-dom";
import SignIn from "./routes/sign-in";

const Shop = () => {
  return (<div>
    Home
  </div>)
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
