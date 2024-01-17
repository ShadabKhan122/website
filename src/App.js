import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import OnSale from "./components/OnSale";
import Store from "./components/Store";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="onsale" element={<OnSale/>} />
          <Route path="store" element={<Store/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
