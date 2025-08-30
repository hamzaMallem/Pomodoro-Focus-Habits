import { Box, TextField, Button, Typography } from "@mui/material";

export default function TimerSettings() {
  return (
    <Box sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h6">Timer Settings</Typography>
      <TextField label="Work Duration (minutes)" fullWidth sx={{ my: 1 }} />
      <TextField label="Short Break (minutes)" fullWidth sx={{ my: 1 }} />
      <TextField label="Long Break (minutes)" fullWidth sx={{ my: 1 }} />
      <Button variant="contained" color="primary">Apply Settings</Button>
    </Box>
  );
}
