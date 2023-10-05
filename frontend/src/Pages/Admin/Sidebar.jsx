import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import TocIcon from "@mui/icons-material/Toc";
import PeopleIcon from "@mui/icons-material/People";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const adminRoutes = [
    {
      name: "Dashboard",
      redirect: "/admin/dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "All Products",
      redirect: "/admin/all-products",
      icon: <ShoppingCartIcon />,
    },
    {
      name: "Create Products",
      redirect: "/admin/all-products/create",
      icon: <AddIcon />,
    },
    {
      name: "All Orders",
      redirect: "/admin/all-orders",
      icon: <TocIcon />,
    },
    {
      name: "All Users",
      redirect: "/admin/all-users",
      icon: <PeopleIcon />,
    },
    {
      name: "Reviews",
      redirect: "/admin/all-reviews",
      icon: <ReviewsIcon />,
    },
  ];
  return (
    <>
      <Box sx={{ display: "flex" }} style={{ backgroundColor: "#1b1b1b" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#1b1b1b",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {adminRoutes.map((text, index) => (
                <Link to={text.redirect} key={index}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon style={{ color: "#fff" }}>
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        style={{ color: "#fff" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
