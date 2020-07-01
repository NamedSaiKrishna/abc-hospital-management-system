import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  StateDropdown,
  RegionDropdown,
} from "react-india-state-region-selector";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function UpdatePatient() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState("");
  const [room, setRoom] = React.useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  const handleMultiChange = (event) => {
    setValue(event.target.value);
  };
  const [value, setValue] = React.useState("");
  const [State, ssetState] = React.useState("");
  const [region, setRegion] = React.useState("");

  const selectState = (val) => {
    ssetState(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  const classes = useStyles();
  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Patient Registration</DialogTitle>
        <form className={classes.form} noValidate>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="ssnId"
                  variant="outlined"
                  required
                  fullWidth
                  id="ssnId"
                  label="SSN ID"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="patientName"
                  label="Patient Name"
                  name="patientName"
                  size="small"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleAgeChange}
                    label="Age"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <InputLabel id="type-of-room-label">Type Of Room</InputLabel>
                  <Select
                    labelId="type-of-room-label"
                    id="type-of-room"
                    value={room}
                    onChange={handleRoomChange}
                    label="Type Of Room"
                  >
                    <MenuItem value={10}>Single</MenuItem>
                    <MenuItem value={20}>Shared</MenuItem>
                    <MenuItem value={30}>General</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="date"
                  label="DOJ"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Address"
                  multiline
                  rowsMax={2}
                  value={value}
                  onChange={handleMultiChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <StateDropdown
                    value={State}
                    onChange={(val) => selectState(val)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <RegionDropdown
                    State={State}
                    value={region}
                    onChange={(val) => selectRegion(val)}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              color="primary"
              variant="contained"
              disableElevation
            >
              submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default UpdatePatient;
