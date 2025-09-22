"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // This will be replaced with your actual login logic.
    // For now, it just navigates to the dashboard.
    router.push("/");
  };

  return (
    <Container
      component='main'
      maxWidth='xs'>
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography
          component='h1'
          variant='h5'>
          Admin Sign In
        </Typography>
        <Box
          component='form'
          onSubmit={handleLogin}
          sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
