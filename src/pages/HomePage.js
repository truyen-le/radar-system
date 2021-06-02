import logo from "../logo.svg";
import "../App.scss";
import TopBar from "../components/TopBar";
import MenuDrawer from "../components/MenuDrawer";
import { Box, CssBaseline, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { green } from "@material-ui/core/colors";
import { useState } from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}));

function HomePage() {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <CssBaseline />
      <TopBar open={openDrawer} handleMenu={() => setOpenDrawer(true)} />
      <MenuDrawer open={openDrawer} handleMenu={() => setOpenDrawer(false)} />
      <Box
        className={clsx(classes.content, {
          [classes.contentShift]: openDrawer,
        })}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <div className={classes.drawerHeader} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Box>
    </>
  );
}

export default HomePage;
