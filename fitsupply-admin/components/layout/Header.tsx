"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <AppBar
      position='static'
      color='default'
      elevation={1}>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}>
          Dashboard Overview
        </Typography>
        <Button
          color='inherit'
          onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
