import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import About from "./Components/About/About/About";
import Menu from "./Components/menu/Menu/Menu";
import BreakFast from "./Components/menu/BreakFast/BreakFast";
import AllProducts from "./Components/menu/AllProducts/allProducts";
import Dishes from "./Components/menu/Dishes/Dishes";
import Drinks from "./Components/menu/Drinks/Drinks";
import Dessart from "./Components/menu/Dessart/Dessart";
import Pages from "./Components/Pages/Pages/Pages";
import Contact from "./Components/Contact/Contact/Contact";
import NoPage from "./Components/NoPage/NoPage";
import Login from "./Components/Register&Login/Login/Login";
import Register from "./Components/Register&Login/Register/Register";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CreateProducts from "./Components/AdminPannel/CreateProducts";
import Users from "./Components/AdminPannel/Users";
import Maps from "./Components/AdminPannel/Maps";
import Products from "./Components/AdminPannel/Products";
import { Toaster } from "react-hot-toast";
import TotalUsing from "./Components/AdminPannel/TotalUsing";
import EditProduct from "./Components/AdminPannel/EditProduct";
import DashBord from "./Components/AdminPannel/DashBord";
import BookTable from "./Components/BookTable/BookTable";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Profile from "./Components/Profile/Profile";
import Loading from "./Components/Loading/Loading";
function App() {
  useEffect((r) => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={true} />
      <NavBar />
      <Routes>
        {/* Here for all Compnent in NavBary */}
        <>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </>
        {/* Here for End all Compnent in NavBary */}

        {/* Here for OutLet to Menu */}
        <>
          <Route
            path="/menu"
            element={<Menu />}
            children={<Route path="/menu" element={<AllProducts />} />}
          />
          <Route
            path="menu"
            element={<Menu />}
            children={<Route path="/menu/breakfast" element={<BreakFast />} />}
          />
          <Route
            path="menu"
            element={<Menu />}
            children={<Route path="/menu/dishes" element={<Dishes />} />}
          />
          <Route
            path="menu"
            element={<Menu />}
            children={<Route path="/menu/drink" element={<Drinks />} />}
          />
          <Route
            path="menu"
            element={<Menu />}
            children={<Route path="/menu/dessart" element={<Dessart />} />}
          />
        </>
        {/* Here End for OutLet to Menu */}

        {/* Here For DashBord */}
        <>
          <Route
            path="/admin/dashbord"
            element={<DashBord />}
            children={<Route path="/admin/dashbord" element={<TotalUsing />} />}
          />
          <Route
            path="/admin/dashbord"
            element={<DashBord />}
            children={
              <Route
                path="/admin/dashbord/create"
                element={<CreateProducts />}
              />
            }
          />
          <Route
            path="/admin/dashbord"
            element={<DashBord />}
            children={
              <Route path="/admin/dashbord/users" element={<Users />} />
            }
          />
          <Route
            path="/admin/dashbord"
            element={<DashBord />}
            children={
              <Route path="/admin/dashbord/products" element={<Products />} />
            }
          />
          <Route
            path="/admin/dashbord"
            element={<DashBord />}
            children={<Route path="/admin/dashbord/maps" element={<Maps />} />}
          />
          <Route
            path="/admin/dashbord"
            element={<DashBord />}
            children={
              <Route
                path="/admin/dashbord/products/:id/edit"
                element={<EditProduct />}
              />
            }
          />
        </>
        {/* Here For End DashBord */}
        {/* Here for all Compnent in NavBary */}
        <>
          <Route path="pages" element={<Pages />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </>
        {/* Here for End all Compnent in NavBary */}
      </Routes>
      <Loading/>
      <Footer />
    </div>
  );
}
export default App;

