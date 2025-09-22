import Box from "@mui/material/Box";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component='main'
        sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
}
