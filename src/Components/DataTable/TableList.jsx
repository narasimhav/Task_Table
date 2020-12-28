import React from 'react';
import PropTypes from 'prop-types';
import {
	Table,
	TableBody,
	TableContainer,
	TableRow,
	TableCell,
	TableFooter,
	TablePagination,
	TableHead,
	Paper,
	makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = makeStyles((theme) => ({
	tableRoot: {
		marginBottom: '8px',
		width: '50%',
		marginTop: '10px',
		margin: 'auto',
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
}));

const TableList = (props) => {
	console.log(props);

	const imagesList = props.list;
	const rows = props.rows;

	const classes = styles();

	return (
		<Paper className={classes.tableRoot}>
			<TableContainer component={Paper}>
				<Table aria-label='custom pagination table'>
					<TableHead>
						<TableRow className={classes.tableRow}>
							<TableCell align='left'>Id</TableCell>
							<TableCell align='left'>Title</TableCell>
							<TableCell align='left'>URL</TableCell>
							<TableCell align='left'>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{imagesList &&
							imagesList.map((row, index) => (
								<TableRow key={row.id}>
									<TableCell component='th' scope='row'>
										{index + 1}
									</TableCell>
									<TableCell align='right'>{row.title}</TableCell>
									<TableCell align='right'>{row.url}</TableCell>
									<TableCell align='right'>
										<DeleteIcon
											style={{ cursor: 'pointer' }}
											onClick={(event) => props.handleDelete(event, row)}
										/>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								// rowsPerPageOptions={[
								// 	5,
								// 	10,
								// 	25,
								// 	50,
								// ]}
								count={props.count}
								rowsPerPage={props.rows}
								page={props.pages}
								// SelectProps={{
								// 	inputProps: { 'aria-label': 'rows per page' },
								// 	native: true,
								// }}
								onChangePage={props.handleChangePage}
								onChangeRowsPerPage={props.handleChangeRowsPerPage}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		</Paper>
	);
};

TableList.propTypes = {};

export default TableList;
