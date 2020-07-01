import React, { Component } from "react";
//MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme) => ({});

export default withStyles(styles)(
  class AddPatient extends Component {
    state = {
      open: false,
    };
    handleOpen = () => {
      this.setState({ open: true });
    };
    handleClose = () => {
      this.setState({
        open: false,
      });
    };
    render() {
      const { classes } = this.props;
      return (
        <div>
          <Button
            color="primary"
            variant="contained"
            disableElevation
            onClick={this.handleOpen}
          >
            Add patient
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>Patient Registration</DialogTitle>
            <DialogContent>
              <form>
                <TextField
                  name="first_name"
                  type="text"
                  label="First Name"
                  multiline
                  rows="3"
                  placeholder="Your First Name"
                  className={classes.textField}
                  value={this.state.first_name}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  name="last_name"
                  type="text"
                  label="Last Name"
                  multiline
                  rows="3"
                  placeholder="Your Last Name"
                  className={classes.textField}
                  value={this.state.last_name}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  name="about_me"
                  type="text"
                  label="About Me"
                  multiline
                  rows="3"
                  placeholder="Tell About Yourself"
                  className={classes.textField}
                  value={this.state.about_me}
                  onChange={this.handleChange}
                  fullWidth
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
);
