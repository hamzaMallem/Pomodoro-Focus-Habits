import { Box, Typography } from "@mui/material";

export default function PomodoroTimer() {
  return (
    <Box sx={{ textAlign: "center", p: 4, borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h3">25:00</Typography>
      <Typography variant="subtitle1">Work Session</Typography>
    </Box>
  );
}
