import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Pay from "../Pay/Pay";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import MakeAdmin from "../AdminPage/MakeAdmin/MakeAdmin";
import useAuth from "../../hooks/useAuth";
import ManageAllOrder from "../AdminPage/ManageAllOrder/ManageAllOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import AddProduct from "../AdminPage/AddProduct/AddProduct";
import DashBoardPort from "../DashBoardPort/DashBoardPort";
import AdminRoute from "../../PrivateRoute/AdminRoute/AdminRoute";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
const drawerWidth = 260;
function ResponsiveDrawer(props) {
  const { logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* for user */}
      {!admin && (
        <div>
          <Link className="btn mb-3" to={`${url}/pay`}>
            <Button color="inherit">
              <i className="fab fa-paypal me-2"></i> Make Payment
            </Button>
            <br />
          </Link>
          <Link className="btn mb-3" to={`${url}/myOrders`}>
            <Button color="inherit">
              <i className="fas fa-box  me-2"></i>My Orders
            </Button>
            <br />
          </Link>
          <Link className="btn  mb-3" to={`${url}/review`}>
            <Button color="inherit">
              {" "}
              <i className="fas fa-address-book me-2"></i>Review
            </Button>{" "}
            <br />
          </Link>
        </div>
      )}
      {/* for admin */}
      {admin && (
        <div>
          <Link className="btn mb-3" to={`${url}/makeAdmin`}>
            <Button color="inherit">
              <i className="fas fa-user-cog me-1"></i> Make Admin
            </Button>{" "}
            <br />
          </Link>
          <Link className="btn  mb-3" to={`${url}/addAProducts`}>
            <Button color="inherit">
              <i className="fas fa-plus-circle me-1"></i>Add a product
            </Button>{" "}
            <br />
          </Link>
          <Link className="btn mb-3" to={`${url}/manageAllOrders`}>
            <Button color="inherit">
              <i className="fas fa-arrows-alt me-1"></i> Manage All Order
            </Button>{" "}
            <br />
          </Link>
          <Link className="btn  mb-3" to={`${url}/manageProducts`}>
            <Button color="inherit">
              <i className="fab fa-artstation me-1"></i> Manage Products
            </Button>{" "}
            <br />
          </Link>
        </div>
      )}
      <button onClick={logout} className="ms-3 mt-5 btn btn-dark">
        Logout
      </button>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{ mr: 2, color: "white", display: { sm: "none" } }}
          >
            {" "}
            <i className="fas fa-bars"></i>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Link className="btn text-light" to="/home">
            Home
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        componet="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={`${path}`}>
            <DashBoardPort />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <AdminRoute path={`${path}/addAProducts`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrder />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}
ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};
export default ResponsiveDrawer;
