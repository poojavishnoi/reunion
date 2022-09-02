import "./App.css";
import { Container, Toolbar, TextField, Typography } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import PropertyListing from "./components/PropertyListing";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Ubuntu",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container maxWidth="lg">
          <Toolbar style={{ padding: "3rem 0" }}>
            <Typography variant="h3" style={{ flexGrow: 1, fontWeight:'500' }}>
              Search properties to rent
            </Typography>

            <TextField
              id="outlined-select-search"
              select
              label="Search with search bar"
              size="small"
              style={{width: "25%", backgroundColor:"white"}}
            ></TextField>
          </Toolbar>
          <Search />
          <PropertyListing />
          <Footer />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
