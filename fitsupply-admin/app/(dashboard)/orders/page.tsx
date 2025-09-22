import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function AdminOrdersPage() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography
        variant='h5'
        component='h1'
        gutterBottom>
        Order Management
      </Typography>
      <Typography>A data table showing all orders will go here.</Typography>
    </Paper>
  );
}
