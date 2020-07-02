import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMedicinePatient } from "../redux/actions/patient";

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
  mtop: {
    marginTop: theme.spacing(3),
  },
}));

function AddNewMedicine(props) {
  const [open, setOpen] = useState(false);
  const [id, setID] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onChange = (event, newValue) => {
    if (newValue != null) {
      setID(newValue.id);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.addMedicinePatient(id, props.patient_id, quantity);
  };

  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        disableElevation
        fullWidth
        className={classes.mtop}
      >
        Add New Medicine
      </Button>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Medicines</DialogTitle>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <DialogContent>
            <DialogContentText>Add Medicine Here</DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Autocomplete
                  size="small"
                  fullWidth
                  id="combo-box-demo"
                  options={props.master_med}
                  onChange={onChange}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Medicine Name"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  size="small"
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="rate"
                  label="Rate"
                  name="rate"
                  size="small"
                  type="number"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
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

AddNewMedicine.propTypes = {
  master_med: PropTypes.array.isRequired,
  addMedicinePatient: PropTypes.func.isRequired,
  patient_id: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  master_med: state.masterMedicine.master,
  patient_id: state.patient.id,
});

export default connect(mapStateToProps, { addMedicinePatient })(AddNewMedicine);
