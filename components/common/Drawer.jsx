"use client";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { usePathname } from "next/navigation";
import {
  DrawerLink,
  DrawerMenuBtn,
  DrawerInsightsBtn,
} from "@/components/common";

import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StoreIcon from "@mui/icons-material/Store";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import retrieveuser from "./retrieveuser";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pathname = usePathname();

  const isSelected = (path) => (pathname === path ? true : false);

  const user_id = retrieveuser();

  const drawer = (isMobile) => {
    return (
      <div>
        <Toolbar />
        <Divider />

        <DrawerLink
          isSelected={isSelected("/orders")}
          isMobile={isMobile}
          href="/orders"
        >
          <ReceiptLongIcon sx={{ pr: 1 }} />
          Orders
        </DrawerLink>

        <DrawerMenuBtn
          isSelected={isSelected("/")}
          isMobile={isMobile}
          href={`/menus/${user_id}`}
        >
          <RestaurantMenuIcon sx={{ pr: 1 }} />
          Menus
          <KeyboardArrowDownIcon sx={{ marginLeft: "100px" }} />
        </DrawerMenuBtn>

        <DrawerInsightsBtn
          isSelected={isSelected("/reports")}
          isMobile={isMobile}
          href="/reports"
        >
          <AssessmentIcon sx={{ pr: 1 }} />
          Insights
          <KeyboardArrowDownIcon sx={{ marginLeft: "90px" }} />
        </DrawerInsightsBtn>

        <DrawerLink
          isSelected={isSelected("/customers")}
          isMobile={isMobile}
          href="/customers"
        >
          <PeopleAltIcon sx={{ pr: 1 }} />
          Customers
        </DrawerLink>
        <DrawerLink
          isSelected={isSelected("/marketing")}
          isMobile={isMobile}
          href="/marketing"
        >
          <StoreIcon sx={{ pr: 1 }} />
          Marketing
        </DrawerLink>
        <DrawerLink
          isSelected={isSelected("/payments")}
          isMobile={isMobile}
          href="/payments"
        >
          <PaymentsIcon sx={{ pr: 1 }} />
          Payments
        </DrawerLink>
        <DrawerLink
          isSelected={isSelected("/settings")}
          isMobile={isMobile}
          href="/settings"
        >
          <SettingsIcon sx={{ pr: 1 }} />
          Settings
        </DrawerLink>
        <DrawerLink
          isSelected={isSelected("/support")}
          isMobile={isMobile}
          href="/support"
        >
          <HelpOutlineIcon sx={{ pr: 1 }} />
          Support
        </DrawerLink>

        <Divider
          style={{
            borderColor: "white",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        />
        {isAuthenticated ? (
          <DrawerLink isMobile={isMobile} onClick={handleLogout}>
            <LogoutIcon sx={{ pr: 1 }} />
            Logout
          </DrawerLink>
        ) : (
          <DrawerLink
            isSelected={isSelected("/login")}
            isMobile={isMobile}
            href="/login"
          >
            <LoginIcon sx={{ pr: 1 }} />
            Login
          </DrawerLink>
        )}
      </div>
    );
  };

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ display: "flex", backgroundColor: "#fbcb04 !important" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fbcb04",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#8d3a36" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              backgroundColor: "#8d3a36",
              color: "#fbf3db",
            },
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer(true)}
        </Drawer>

        {/* Desktop Drawer */}
        {/* <Drawer
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
        </Drawer> */}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
