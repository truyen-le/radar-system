import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue, indigo } from "@material-ui/core/colors";
import Routes from "./routes";
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900],
    },
    primary: {
      main: indigo[700],
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', "sans-serif"].join(","),
  },
});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
