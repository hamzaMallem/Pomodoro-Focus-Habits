"use client";
import { Box, Card, Fade, Grid, IconButton, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { use, useState } from "react";

//  importing data for taskItem from store useselector reduux
// and sending action to store sliice rredux
export default function HabitItem() {
  const [taskState, setTaskState] = useState(true);
  const habits = [
    // {
    //   id: 1,
    //   title: "Morning Meditation",
    //   desc: "Daily • 7 day streak",
    //   color: "#2196F3", // أزرق
    //   isDone: false,
    //   frequency: "daily",
    //   streak: 7,
    // },
    // {
    //   id: 2,
    //   title: "Read 30 minutes",
    //   desc: "Daily • 12 day streak",
    //   color: "#4CAF50", // أخضر
    //   isDone: true,
    //   frequency: "daily",
    //   streak: 12,
    // },
    // {
    //   id: 3,
    //   title: "Exercise",
    //   desc: "Daily • 3 day streak",
    //   color: "#F44336", // أحمر
    //   isDone: false,
    //   frequency: "daily",
    //   streak: 3,
    // },
    // {
    //   id: 4,
    //   title: "Journal",
    //   desc: "Daily • 5 day streak",
    //   color: "#9C27B0", // بنفسجي
    //   isDone: true,
    //   frequency: "daily",
    //   streak: 5,
    // },
    // {
    //   id: 5,
    //   title: "Read Quran",
    //   desc: "Weekly • 2 week streak",
    //   color: "#FFC107", // أصفر
    //   isDone: false,
    //   frequency: "weekly",
    //   streak: 2,
    // },
  ];

  return (
    <Box type="div">
      {/* for condition of if the list item empty */}
      <Fade in={habits.length == 0}>
        <Typography
          animation="wave"
          variant="body2"
          sx={{ textAlign: "start" }}
        >
          You have no habits for today. Add a habit to start tracking!
        </Typography>
      </Fade>
      {habits.map((habit) => (
        <Card key={habit.id} sx={{ mb: 2 }}>
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item size={1}>
              <IconButton>
                <CircleIcon sx={{ color: habit.color, fontSize: "1rem" }} />
              </IconButton>
            </Grid>
            {/* for ttiel and description */}
            <Grid item size={9}>
              {/* Habit titel */}
              <Typography
                varian="h6"
                sx={{
                  textAlign: "start",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "text.primary",
                }}
              >
                {habit.title}
              </Typography>
              {/* Habit titel */}
              {/* Description for iteem task or habit */}
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "start",
                  fontSize: "0.75rem",
                  color: "text.secondary",
                }}
              >
                {habit.desc}
              </Typography>
              {/* Description for iteem task or habit */}
            </Grid>
            {/* for ttiel and description */}
            <Grid item size={2}>
              <IconButton
                onClick={() =>
                  taskState ? setTaskState(false) : setTaskState(true)
                }
              >
                {habit.isDone ? (
                  <CheckBoxIcon sx={{ color: "success.main" }} />
                ) : (
                  <RadioButtonUncheckedIcon sx={{ color: "error.main" }} />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
}
