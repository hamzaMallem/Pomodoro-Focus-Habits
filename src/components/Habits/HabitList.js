import { Box, Card, CardContent, Typography } from "@mui/material";
import HabitItem from "./HabitItem";

export default function HabitList() {
  return (
    <Box>
      <Card>
        <Typography variant="h6" sx={{ textAlign: "start" }}>
          {" Today's Habits "}
        </Typography>
        
        {/* for listItem */}
        <CardContent>
          <Box
            type="div"
            sx={{ diplay: "flex", flexDirection: "column", gap: 2 }}
          >
            <HabitItem />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
