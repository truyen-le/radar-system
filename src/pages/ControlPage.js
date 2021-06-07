import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import ControlCard from "../components/ControlCard";

export default function ControlPage() {
  return (
    <>
      <Typography
        className=" p-10 items-start justify-items-start"
        variant="h2"
      >
        Radar Controller
      </Typography>
      <Grid className="m-3" container spacing={2}>
        <Grid item xs={12} md={6}>
          <ControlCard title="Velocity" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlCard
            title="Angular"
            min={0}
            max={360}
            unit="degree"
            allowAuto
          />
        </Grid>
      </Grid>
      <Typography
        className=" p-10 items-start justify-items-start"
        variant="h2"
      >
        Radar Status
      </Typography>
      <Card className="m-3 card">
        xs=6 md=8
      </Card>
      <Card className="m-3 card">
        xs=6 md=8
      </Card>
    </>
  );
}
