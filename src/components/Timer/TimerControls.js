import { Box, Button } from "@mui/material";

export default function TimerControls() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
      <Button variant="contained" color="success">Start</Button>
      <Button variant="contained" color="error">Reset</Button>
    </Box>
  );
}
