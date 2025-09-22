import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function AdminProductsPage() {
  return (
    <Paper sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}>
        <Typography
          variant='h5'
          component='h1'>
          Product Management
        </Typography>
        <Button variant='contained'>Add New Product</Button>
      </Box>
      <Typography>A data table showing all products will go here.</Typography>
    </Paper>
  );
}
