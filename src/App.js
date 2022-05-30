import { ThemeProvider } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";

function App() {

  useEffect(() => {
    document.title = "Lassie Vogue Mania";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth='xl'
        sx={{
          background: '#fff'
        }}>
        <Appbar />
        <Banner />
        <Promotions />
        <Products />
        {/*
          Footer
          Search Box
          App Drawer
          */}

      </Container>
    </ThemeProvider>
  );
}
export default App;
