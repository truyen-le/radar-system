import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ControlCard from "../components/ControlCard";

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));
export default function ControlPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.drawerHeader} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ControlCard title="Velocity" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlCard title="Angular" min ={0} max = {360} unit="degree" allowAuto />
        </Grid>
        <Grid item xs={12} md={12}>
          <Container className="p-5 border-2 border-blue-500 rounded-md">
            xs=6 md=4
          </Container>
        </Grid>
        <Grid item xs={12} md={12}>
          <Container className="p-5 border-2 border-blue-500 rounded-md">
            xs=6 md=8
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
