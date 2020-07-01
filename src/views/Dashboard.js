import React from "react";

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

function Dashboard() {
  const classes = useStyles();
  let role = "desk";
  let roleDashboard =
    role === "desk" ? (
      <React.Fragment>
        <div className={classes.row}>
          <span className={classes.spacer} />
          <ViewAllPatients />
          <AddPatient />
        </div>
        <div className={classes.row}>
          <Paper className={classes.search} variant="outlined">
            <Input
              className={classes.input}
              disableUnderline
              placeholder="Search Patient ID"
            />
            <SearchIcon className={classes.icon} />
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
    ) : role === "pharmacist" ? (
      <React.Fragment>
        <div className={classes.row}>
          <Paper className={classes.search} variant="outlined">
            <Input
              className={classes.input}
              disableUnderline
              placeholder="Search Patient ID"
            />
            <SearchIcon className={classes.icon} />
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
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Name</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Age</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Address</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">DOJ</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Type Of Room</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" className={classes.mtop}>
                Medicines Issued
              </Typography>
              <Paper className={classes.newPaper} variant="outlined">
                <TableContainer
                  variant="outlined"
                  fullWidth
                  className={classes.container}
                >
                  <Table aria-label="simple table" size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Medicine</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Rate </TableCell>
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
                        <TableCell align="right">Rs. 550</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h5" className={classes.mtop}>
                Medicines Cart
              </Typography>
              <Paper className={classes.newPaper} variant="outlined">
                <TableContainer fullWidth className={classes.container}>
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
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Acebutolol
                        </TableCell>
                        <TableCell align="right">10</TableCell>
                        <TableCell align="right">Rs. 55</TableCell>
                        <TableCell align="right">Rs. 550</TableCell>
                        <TableCell align="right">
                          <IconButton>
                            <DeleteForeverIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <AddMedicine />
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
            <Input
              className={classes.input}
              disableUnderline
              placeholder="Search Patient ID"
            />
            <SearchIcon className={classes.icon} />
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
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Name</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Age</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Address</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">DOJ</Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Type Of Room</Typography>
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
                  fullWidth
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
                  fullWidth
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

export default Dashboard;
