import React, { Component } from "react";

//MUI
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ReceiptIcon from "@material-ui/icons/Receipt";

//Components
import { AddPatient } from "../components";

const styles = (theme) => ({
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
    marginTop: theme.spacing(8),
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
  viewAllButton: {
    marginRight: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
});

export default withStyles(styles)(
  class Dashboard extends Component {
    render() {
      const { classes } = this.props;
      return (
        <Container maxWidth="lg">
          <div className={classes.row}>
            <span className={classes.spacer} />
            <Button className={classes.viewAllButton}>View All Patients</Button>
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
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <DeleteForeverIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <ReceiptIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Container>
      );
    }
  }
);
