import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
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
import { connect } from 'react-redux';
import { addPatient } from '../redux/actions/patient';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

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

function AddPatient(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const selectState = (val) => {
    setState({...state, state: val});
  };

  const selectRegion = (val) => {
    setState({...state, city: val});
  };

  const [state, setState] = useState({
    ssn: 0,
    name: '',
    age: 0,
    admited_on: null,
    type_of_bed: '',
    address: '',
    city: '',
    state: ''
  });

  const onChange = (e) => { 
    if(e.target.name === "admited_on")
    {
      let d = dayjs(e.target.value)
      setState({ ...state, [e.target.name]: d.utc().format() });
      return;
    }
    setState({ ...state, [e.target.name]: e.target.value }) 
  }
  const onSubmit = (e) => { e.preventDefault(); props.addPatient(state);}

  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        disableElevation
      >
        Add Patient
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Patient Registration</DialogTitle>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="ssn"
                  variant="outlined"
                  required
                  fullWidth
                  id="ssn"
                  label="SSN ID"
                  size="small"
                  onChange={onChange}
                  value={state.ssn}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Patient Name"
                  name="name"
                  size="small"
                  onChange={onChange}
                  value={state.name}
                />
              </Grid>
              <Grid item xs={2}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <TextField
                    label="Age"
                    required
                    variant="outlined"
                    size="small"
                    id="age"
                    name="age"
                    type="number"
                    onChange={onChange}
                    value={state.age}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <InputLabel id="type-of-room-label">Type Of Room</InputLabel>
                  <Select
                    labelId="type-of-room-label"
                    id="type_of_bed"
                    name="type_of_bed"
                    value={state.type_of_bed}
                    onChange={onChange}
                    label="Type Of Room"
                    required
                  >
                    <MenuItem value={'Single'}>Single</MenuItem>
                    <MenuItem value={'Shared'}>Shared</MenuItem>
                    <MenuItem value={'General'}>General</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="admited_on"
                  name="admited_on"
                  label="DOJ"
                  type="date"
                  onChange={onChange}
                  value={state.admited_on}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="address"
                  name="address"
                  label="Address"
                  multiline
                  rowsMax={2}
                  value={state.address}
                  onChange={onChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <StateDropdown
                    value={state.state}
                    onChange={(val) => selectState(val)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <RegionDropdown
                    State={state.state}
                    value={state.city}
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
              type="submit"
            >
              submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

AddPatient.propTypes ={
  addPatient: PropTypes.func.isRequired
} 

export default connect(null, {addPatient})(AddPatient);
