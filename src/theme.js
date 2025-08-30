// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9C27B0", // بنفسجي للأزرار Add Habit
    },
    secondary: {
      main: "#2196F3", // أزرق للـ Tabs
    },
    success: {
      main: "#4CAF50", // أخضر ✅
    },
    error: {
      main: "#F44336", // أحمر ❌
    },
    warning: {
      main: "#FFC107", // أصفر
    },
    info: {
      main: "#03A9F4", // أزرق فاتح إضافي
    },
    background: {
      default: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      paper: "rgba(255, 255, 255, 0.08)", // البطاقات (Habits, Timer, Insights)
    },
    text: {
      primary: "#ffffff", // النصوص الرئيسية
      secondary: "#e0e0e0", // النصوص الثانوية (streaks, details)
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h4: {
      fontWeight: 700,
      color: "#fff",
    },
    h6: {
      fontWeight: 600,
      color: "#fff",
    },
    body1: {
      color: "#e0e0e0",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16, // نفس الـ rounded corner في الكروت
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          padding: "1rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "8px 16px",
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#667eea ", //todo next time for chose the right color
        },
      },
    },
  },
});

export default theme;
