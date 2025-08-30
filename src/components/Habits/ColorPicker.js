"use client";

import { Stack, Box, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";

export default function ColorPicker({ getPickerColor }) {
  const colors = ["#F44336", "#2196F3", "#4CAF50", "#9C27B0", "#FFC107"]; // الأحمر، الأزرق، الأخضر، البنفسجي، الأصفر
  const [pickColor, setPickColor] = useState(colors[0]);

  const handelPickColor = (color) => {
    setPickColor(color);
    // send color to parent component
    getPickerColor(color);
    // alert(`You picked color: ${color}`);
  };
  const jsxComponent = colors.map((color) => (
    <IconButton key={color} size="larg" onClick={() => handelPickColor(color)}>
      <CircleIcon
        sx={{
          color,
          border:
            pickColor === color ? "2px solid white" : "2px solid transparent",
          borderRadius: "50%",
          fontSize: 30,
        }}
      />
    </IconButton>
  ));

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ flexWrap: "wrap", jjustifyContent: "center", alignItems: "center" }}
    >
      {jsxComponent}
    </Stack>
  );
}
