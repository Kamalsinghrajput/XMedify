import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./Pages/Home/Home";
import MyBookings from "./Pages/MyBookings/MyBookings";
import Search from "./Pages/Search/Search";
import { ThemeProvider, createTheme} from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const myroutes = createBrowserRouter([{
  path: "/",
  element: <App />,
   children: [
    {
    path: "search",
    element: <Search />,
  },
  {
    path: "/my-bookings",
    element: <MyBookings />,
  },
  {
    path: "/",
    element: <Home />,
  },
],
},
]);

export const mytheme = createTheme({
  typography:{fontFamily:"Poppins, sans-serif",},

  palette:{
    primary:{
      main: "#2AA7FF",
      green:"#00A500",
      secondary:"#1B3C74",
    },
  },
  components:{
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        contained: {
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "90%",
        },
      },
    },    
  
   MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#000000",
          fontSize: "56px",
          fontWeight: "700",
        },
        h2: {
          color: "#1B3C74",
          fontWeight: "600",
          fontSize: "48px",
          lineHeight: 1.2,
        },
        h3: {
          color: "#102851",
          fontSize: "30px",
          fontWeight: "500",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

mytheme.typography.h2 = {
  [mytheme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};

mytheme.typography.h1 = {
  [mytheme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
};

mytheme.typography.h3 = {
  [mytheme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mytheme}>
    <RouterProvider router={myroutes}/>
    </ThemeProvider>
  </React.StrictMode>
);

