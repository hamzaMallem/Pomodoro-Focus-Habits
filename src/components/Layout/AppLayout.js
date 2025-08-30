import { Box, Typography } from "@mui/material";
import NavTabs from "@/components/Layout/NavTabs";

export default function AppLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "1200px",
        bgcolor: "background.default",
        color: "text.primary",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ mt: 4 }} fontWeight={700} gutterBottom>
        Focus & Habits
      </Typography>

      {/* النص الفرعي */}
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        Plan habits in seconds, focus in minutes, improve every day
      </Typography>

      <NavTabs />
      <Box sx={{ p: 2, width: "100%" }}>{children}</Box>
    </Box>
  );
}
