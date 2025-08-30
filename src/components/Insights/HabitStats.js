import { Box, Typography } from "@mui/material";

export default function HabitStats() {
  return (
    <Box sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h6">Habit Statistics</Typography>
      <Typography>Current Streak: 12 days</Typography>
      <Typography>Success Rate: 50%</Typography>
    </Box>
  );
}
