import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPatient } from '../redux/actions/patient';
import { getMedicineMaster } from '../redux/actions/masterMedicine';

//MUI
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

//Components
import { AddPatient } from "../components";
import { AddMedicine } from "../components";
import { AddDiagnostics } from "../components";
import { ViewAllPatients } from "../components";
import { UpdatePatient } from "../components";
import { BillPatient } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  row: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  spacer: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },

  mtop: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  newPaper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  tablePaper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
  },
  search: {
    borderRadius: "4px",
    alignItems: "center",
    padding: theme.spacing(1),
    display: "flex",
    flexBasis: 420,
  },
  input: {
    flexGrow: 1,
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "-0.05px",
  },

  container: {
    maxHeight: 350,
  },
}));

const Dashboard = (props) => {
  useEffect(()=>{
    if(props.role === "Desk"){
      
    }
    else if(props.role === "Pharmacist")
    {
      props.getMedicineMaster();
    }
    else{

    }
  }, [])
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const onChange = (e) => setSearch(e.target.value);
  const onSubmit = (e) => { e.preventDefault(); props.getPatient(search); }
  let roleDashboard =
    props.role === "Desk" ? (
      <React.Fragment>
        <div className={classes.row}>
          <span className={classes.spacer} />
          <ViewAllPatients />
          <AddPatient />
        </div>
        <div className={classes.row}>
          <Paper className={classes.search} variant="outlined">
            <form onSubmit={onSubmit}>
              <TextField
                id="search"
                label="Search"
                variant="outlined"
                onChange={onChange}
                fullWidth
                className={classes.Input}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton aria-label="search" type="submit">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Paper>
        </div>
        <div>
          <TableContainer
            component={Paper}
            variant="outlined"
            className={classes.tablePaper}
          >
            <Table
              className={classes.table}
              aria-label="simple table"
              size="small"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Patient ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">DOJ</TableCell>
                  <TableCell align="right">Type Of Room</TableCell>
                  <TableCell align="right">Update</TableCell>
                  <TableCell align="right">Delete</TableCell>
                  <TableCell align="right">Billing</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    123456789
                  </TableCell>
                  <TableCell align="right">Joseph</TableCell>
                  <TableCell align="right">56</TableCell>
                  <TableCell align="right">
                    Rick Street, Ameerpet, Hyderabad
                  </TableCell>
                  <TableCell align="right">03-may-2020</TableCell>
                  <TableCell align="right">Single</TableCell>
                  <TableCell align="right">
                    <UpdatePatient />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <DeleteForeverIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <BillPatient />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </React.Fragment>
    ) : props.role === "Pharmacist" ? (
      <React.Fragment>
        <div className={classes.row}>
          <Paper className={classes.search} variant="outlined">
            <form onSubmit={onSubmit}>
              <TextField
                id="search"
                label="Search"
                variant="outlined"
                onChange={onChange}
                fullWidth
                className={classes.Input}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton aria-label="search" type="submit">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Paper>
        </div>
        <div>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3}>
              <Typography variant="h5" className={classes.mtop}>
                Patient Details
              </Typography>
              <Paper className={classes.newPaper} variant="outlined">
                <Grid container className={classes.root} spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Patient Id</Typography>
                    <Typography varient="caption">{props.patient.id ? props.patient.id : null}</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Name</Typography>
                    <Typography varient="caption">{props.patient.name ? props.patient.name : null}</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Age</Typography>
                    <Typography varient="caption">{props.patient.age ? props.patient.age : null}</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Address</Typography>
                    <Typography varient="caption">{props.patient.address ? props.patient.address : null}</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">DOJ</Typography>
                    <Typography varient="caption">{props.patient.admited_on ? props.patient.admited_on : null}</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Type Of Room</Typography>
                    <Typography varient="caption">{props.patient.type_of_bed ? props.patient.type_of_bed : null}</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h5" className={classes.mtop}>
                Medicines Cart
              </Typography>
              <Paper className={classes.newPaper} variant="outlined">
                <TableContainer className={classes.container}>
                  <Table aria-label="simple table" size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Medicine</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Rate </TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Remove</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        (props.patient.medicines).map((item) => (
                          <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                              {item.medicines.name}
                        </TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell align="right">{item.medicines.rate}</TableCell>
                        <TableCell align="right">Rs. {item.quantity*item.medicines.rate}</TableCell>
                        <TableCell align="right">
                          <IconButton>
                            <DeleteForeverIcon />
                          </IconButton>
                        </TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                  <AddMedicine />
                </TableContainer>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" className={classes.mtop}>
                Pharmacy
              </Typography>
              <Paper className={classes.newPaper} variant="outlined">
                <TableContainer
                  variant="outlined"

                  className={classes.container}
                >
                  <Table aria-label="simple table" size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Medicine</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Rate </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        (props.master_med).map((item) => (
                          <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                              {item.name}
                        </TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.rate}</TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            
          </Grid>
        </div>
      </React.Fragment>
    ) : (
          <React.Fragment>
            <div className={classes.row}>
              <Paper className={classes.search} variant="outlined">
                <form onSubmit={onSubmit}>
                  <TextField
                    id="search"
                    label="Search"
                    variant="outlined"
                    onChange={onChange}
                    fullWidth
                    className={classes.Input}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton aria-label="search" type="submit">
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </form>
              </Paper>
            </div>
            <div>
              <Grid container className={classes.root} spacing={2}>
                <Grid item xs={3}>
                  <Typography variant="h5" className={classes.mtop}>
                    Patient Details
              </Typography>
                  <Paper className={classes.newPaper} variant="outlined">
                    <Grid container className={classes.root} spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="subtitle2">Patient Id</Typography>
                        <Typography varient="caption">{props.patient.id ? props.patient.id : null}</Typography>
                      </Grid>
                      <Grid item xs={6}></Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle2">Name</Typography>
                        <Typography varient="caption">{props.patient.name ? props.patient.name : null}</Typography>
                      </Grid>
                      <Grid item xs={6}></Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle2">Age</Typography>
                        <Typography varient="caption">{props.patient.age ? props.patient.age : null}</Typography>
                      </Grid>
                      <Grid item xs={6}></Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle2">Address</Typography>
                        <Typography varient="caption">{props.patient.address ? props.patient.address : null}</Typography>
                      </Grid>
                      <Grid item xs={6}></Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle2">DOJ</Typography>
                        <Typography varient="caption">{props.patient.admited_on ? props.patient.admited_on : null}</Typography>
                      </Grid>
                      <Grid item xs={6}></Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle2">Type Of Room</Typography>
                        <Typography varient="caption">{props.patient.type_of_bed ? props.patient.type_of_bed : null}</Typography>
                      </Grid>
                      <Grid item xs={6}></Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h5" className={classes.mtop}>
                    Diagnostics Conducted
              </Typography>
                  <Paper variant="outlined" className={classes.newPaper}>
                    <TableContainer
                      variant="outlined"

                      className={classes.container}
                    >
                      <Table aria-label="simple table" size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Name Of Test</TableCell>
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
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.mtop}>
                    Diagnostics Cart
              </Typography>
                  <Paper variant="outlined" className={classes.newPaper}>
                    <TableContainer
                      variant="outlined"

                      className={classes.container}
                    >
                      <Table aria-label="simple table" size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Name Of The test</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Remove</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              Echo
                        </TableCell>
                            <TableCell align="right">Rs. 3000</TableCell>
                            <TableCell align="right">
                              <IconButton>
                                <DeleteForeverIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <AddDiagnostics />
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </React.Fragment>
        );
  return (
    <div>
      <Container maxWidth="lg">{roleDashboard}</Container>
    </div>
  );
}

Dashboard.propTypes = {
  role: PropTypes.string.isRequired,
  getPatient: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
  getMedicineMaster: PropTypes.func.isRequired,
  master_med: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  role: state.auth.user.role,
  patient: state.patient,
  master_med: state.masterMedicine.master,
})

export default connect(mapStateToProps, { getPatient, getMedicineMaster })(Dashboard);
