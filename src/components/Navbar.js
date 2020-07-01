import React from "react";
import { Link } from "react-router-dom";

//MUI
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  spaceRight: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            component={Link}
            to={"/"}
          >
            ABC
          </Typography>
          <div className={classes.flexGrow} />
          <Button
            className={classes.spaceRight}
            color="inherit"
            disableElevation
          >
            sign out
          </Button>
          <Button
            className={classes.spaceRight}
            color="inherit"
            variant="outlined"
          >
            sign up
          </Button>
        </Toolbar>
      </AppBar>
      ;
    </div>
  );
}

export default Navbar;
