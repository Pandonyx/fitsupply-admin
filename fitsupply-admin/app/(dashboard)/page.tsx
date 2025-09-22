import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function DashboardHomePage() {
  return (
    <Grid
      container
      spacing={3}>
      <Grid
        item
        xs={12}>
        <Typography
          variant='h4'
          gutterBottom>
          Welcome to the FitSupply Dashboard!
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h6'>Total Sales</Typography>
          <Typography variant='h4'>$0.00</Typography>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h6'>New Orders</Typography>
          <Typography variant='h4'>0</Typography>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h6'>Low Stock Items</Typography>
          <Typography variant='h4'>0</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
