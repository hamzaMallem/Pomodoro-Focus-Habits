"use client";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

import ColorPicker from "./ColorPicker";

export default function HabitForm() {
  //  for state of the date picker
  const taskDate = [
    { taskName: "read book", taskFrequency: "daily", taskColor: "#F44336" },
  ];

  const [frequency, setFrequency] = useState("daily");

  const [color, setColor] = useState("#9C27B0");
  function getColor(color) {
    setColor(color);
    console.log("color from habit form", color);
  }

  return (
    <Card sx={{ display: "" }}>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: "start", mb: 3 }}
        >
          Add New Habit
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
          component="form"
          noValidate
          autoComplete="off"
        >
          {/* for input name of task  */}
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Habit name"
            variant="outlined"
          />
          {/* for select frequency of task  */}
          <Select
            sx={{ width: "100%", textAlign: "start" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={frequency}
            onChange={(e) => {
              setFrequency(e.target.value);
            }}
            label="daily"
          >
            <MenuItem value="daily"> Daily</MenuItem>
            <MenuItem value="weekly"> Weekly</MenuItem>
            <MenuItem value="monthly"> Monthly</MenuItem>
          </Select>
          {/* for select color of  task  */}
          <ColorPicker getPickerColor={getColor} />

          {/* for button submit  */}
          <Button
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "text.primary",
              color: "primary.main", // بنفسيجي
              "&:hover": { backgroundColor: "text.primary", opacity: 0.9 },
            }}
          >
            Add Habit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
