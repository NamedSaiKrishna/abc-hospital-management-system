import React from "react";
import ReceiptIcon from "@material-ui/icons/Receipt";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  newPaper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    marginTop: theme.spacing(3.8),
  },
  container: {
    maxHeight: 350,
  },
}));

function BillPatient() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <ReceiptIcon />
      </IconButton>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Patient Billing</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" className={classes.mtop}>
                  Patient Details
                </Typography>
                <Paper className={classes.newPaper} variant="outlined">
                  <TableContainer className={classes.container}>
                    <Table aria-label="simple table" size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Patient Id</TableCell>
                          <TableCell align="right">Name</TableCell>
                          <TableCell align="right">Age</TableCell>
                          <TableCell align="right">Address</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                          <TableCell align="right">Date Of Discharge</TableCell>
                          <TableCell align="right">Type Of Room</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            1234
                          </TableCell>
                          <TableCell align="right">Joseph</TableCell>
                          <TableCell align="right">56</TableCell>
                          <TableCell align="right">
                            Rick Street, Ameerpet, Hyderbad
                          </TableCell>
                          <TableCell align="right">03-may-2020</TableCell>
                          <TableCell align="right">10-may-2020</TableCell>
                          <TableCell align="right">Single</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle1" className={classes.mtop}>
                  Pharmacy Charges
                </Typography>
                <Paper className={classes.newPaper} variant="outlined">
                  <TableContainer className={classes.container}>
                    <Table aria-label="simple table" size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Medicine</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Rate</TableCell>
                          <TableCell align="right">Amount</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            Acebutolol
                          </TableCell>
                          <TableCell align="right">10</TableCell>
                          <TableCell align="right">Rs. 55</TableCell>
                          <TableCell align="right">Rs. 550 </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" className={classes.mtop}>
                  Diagnostics Charges
                </Typography>
                <Paper className={classes.newPaper} variant="outlined">
                  <TableContainer className={classes.container}>
                    <Table aria-label="simple table" size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name Of The Test</TableCell>
                          <TableCell align="right">Amount</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            ECG
                          </TableCell>
                          <TableCell align="right">Rs. 3000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" className={classes.mtop}>
                  Sub Total
                </Typography>
                <Paper className={classes.newPaper} variant="outlined">
                  <TableContainer className={classes.container}>
                    <Table aria-label="simple table" size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Service</TableCell>
                          <TableCell align="right">Amount</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            Room(7)
                          </TableCell>
                          <TableCell align="right">Rs. 3000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            Pharmacy
                          </TableCell>
                          <TableCell align="right">Rs. 3000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            Diagnostics
                          </TableCell>
                          <TableCell align="right">Rs. 3000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paper} variant="outlined">
                  <Typography variant="h4" align="right">
                    Grand Total: 9000
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancel
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            autoFocus
            variant="contained"
            disableElevation
          >
            Confirm
          </Button>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Print Bill
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BillPatient;
