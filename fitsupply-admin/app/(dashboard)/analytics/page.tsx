import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function AdminAnalyticsPage() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography
        variant='h5'
        component='h1'
        gutterBottom>
        Sales Analytics
      </Typography>
      <Typography>Charts and sales reports will go here.</Typography>
    </Paper>
  );
}
