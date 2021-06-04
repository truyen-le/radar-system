import "../App.scss";
import TopBar from "../components/TopBar";
import MenuDrawer from "../components/MenuDrawer";
import { Box, CssBaseline, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ControlPage from "./ControlPage";
import InfoPage from "./InfoPage";

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

function Main() {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <BrowserRouter>
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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/control" component={ControlPage} />
          <Route path="/info" component={InfoPage} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default Main;
