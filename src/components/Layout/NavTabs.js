"use client";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  Typography,
  Stack,
  Box,
  Tabs,
  Tab,
  Card,
  CardActions,
} from "@mui/material";
import { useState } from "react";
export default function NavTabs() {
  // const [alignment, setAlignment] = useState("focus");
  const [value, setValue] = useState(0);

  // const handleChange = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };

  return (
    <Box sx={{ textAlign: "center", mt: 4, maxWidth: "425px" }}>
      {/* العنوان الرئيسي */}

      {/* التبويبات */}
      {/* Todo : => animation for tab change */}
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        centered
        textColor="text.secondary"
        indicatorColor="text.secondary"
        sx={{
          "& .MuiTabs-flexContainer": {
            borderRadius: "40px",
            border: "1px solid rgba(255,255,255,0.4)",
            padding: "2px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
          },
          "& .MuiTab-root": {
            color: "#fff",
            borderRadius: "30px",
            minWidth: "140px",
            textTransform: "none",
            fontWeight: 600,
          },
          "& .Mui-selected": {
            backgroundColor: "rgba(255,255,255,0.2)",
          },
        }}
      >
        <Tab label="Habits" />
        <Tab label="Focus Timer" />
        <Tab label="Insights" />
      </Tabs>
    </Box>
  );
}
