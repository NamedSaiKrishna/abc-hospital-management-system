import React, { Component } from "react";
import { Link } from "react-router-dom";

//MUI
import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
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
});

export default withStyles(styles)(
  class Navbar extends Component {
    render() {
      const { classes } = this.props;
      return (
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
      );
    }
  }
);
