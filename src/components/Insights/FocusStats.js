import { Box, Typography } from "@mui/material";

export default function FocusStats() {
  return (
    <Box sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h6">Focus Statistics</Typography>
      <Typography>Today's Focus Time: 2h 30m</Typography>
      <Typography>Sessions Completed: 6</Typography>
    </Box>
  );
}
