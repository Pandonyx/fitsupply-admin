"use client";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;
const navItems = [
  { text: "Dashboard", icon: <DashboardIcon />, href: "/" },
  { text: "Products", icon: <InventoryIcon />, href: "/products" },
  { text: "Orders", icon: <ShoppingCartIcon />, href: "/orders" },
  { text: "Analytics", icon: <BarChartIcon />, href: "/analytics" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}>
      <Toolbar />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={pathname === item.href}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
