import NotFound from "./pages/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import NavBar from "./pages/Shared/NavBar/NavBar";
import Footer from "./pages/Shared/Footer/Footer";
import ProductDetails from "./pages/Home/ProductDetails/ProductDetails";
import AuthProvider from "./pages/context/AuthProvider/AuthProvider";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import ExploreProducts from "./pages/ExploreProducts/ExploreProducts";
import About from "./pages/Routes/About/About";
import Contact from "./pages/Routes/Contact/Contact";
import Blogs from "./pages/Routes/Blogs/Blogs";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <NavBar />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/home">
              <NavBar />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/about">
              <NavBar />
              <About />
              <Footer />
            </Route>
            <Route exact path="/contact">
              <NavBar />
              <Contact />
              <Footer />
            </Route>
            <Route exact path="/blogs">
              <NavBar />
              <Blogs />
              <Footer />
            </Route>
            <PrivateRoute path="/products/:id">
              <NavBar />
              <ProductDetails />
              <Footer />
            </PrivateRoute>
            <Route path="/login">
              <NavBar />
              <Login />
              <Footer />
            </Route>
            <Route path="/exploreProducts">
              <NavBar />
              <ExploreProducts />
              <Footer />
            </Route>
            <Route path="/register">
              <NavBar />
              <Register />
              <Footer />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
