// import HabitList from "../components/Habits/HabitList";
import AppLayout from "@/components/Layout/AppLayout";
import HabitForm from "@/components/Habits/HabitForm";
import HabitList from "@/components/Habits/HabitList";
import { Container, Box, Grid } from "@mui/material";

export default function Page() {
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppLayout>
          <Grid container spacing={2}>
            <Grid item size={4} md={4} >
              <HabitForm />
            </Grid>
            <Grid item size={8} md={4}>
              <HabitList />
            </Grid>
          </Grid>
        </AppLayout>
      </Box>
    </Container>
  );
}
