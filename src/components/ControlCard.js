import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Slider,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

export default function ControlCard({
  title,
  defaultValue = 30,
  min = 10,
  max = 100,
  unit = "m/s",
  allowAuto = false,
}) {
  const [value, setValue] = useState(defaultValue);
  const [auto, setAuto] = useState(false);
  return (
    <Card className="h-80 card">
      <CardHeader
        title={<Typography variant="h4">{title}</Typography>}
      ></CardHeader>
      <CardContent>
        <Grid className="items-center " container spacing={4}>
          <Grid item xs={allowAuto ? 8 : 12}>
            <Slider
              aria-label="Temperature"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              valueLabelDisplay="auto"
              disabled={auto}
              // step={10}
              // marks
              min={min}
              max={max}
            />
          </Grid>
          {allowAuto ? (
            <Grid item xs={allowAuto ? 4 : 0}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={auto}
                      onClick={() => {
                        setAuto(!auto);
                      }}
                    />
                  }
                  label="Auto"
                />
              </FormGroup>
            </Grid>
          ) : null}
        </Grid>
      </CardContent>
      <CardContent className="flex flex-col items-center ">
        <Typography className="text-blue-500" variant="h5">
          {value} {unit}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color="primary">
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}
