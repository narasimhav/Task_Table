import React, { useEffect, useState } from 'react';

import axios from 'axios';
import TableList from './TableList';

const DataTable = (props) => {
	const [list, setlist] = useState([]);
	const [page, setPages] = useState(0);
	const [rows, setRows] = useState(5);
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios
			.get('http://jsonplaceholder.typicode.com/photos')
			.then((res) => {
				setlist(res.data);
				setCount(res.data.length);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleChangePage = (event, newPage) => {
		console.log(newPage);
		setRows(rows);
		setPages(newPage);

		axios
			.get(
				`http://jsonplaceholder.typicode.com/photos?_start=${newPage}&_limit=${rows}`
			)
			.then((res) => {
				setlist(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleChangeRowsPerPage = (event) => {
		setRows(event.target.value);
		setPages(page);

		axios
			.get(
				`http://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=${event.target.value}`
			)
			.then((res) => {
				setlist(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDelete = (event, row) => {
		setlist(list.filter((item) => item.id !== row.id));
	};

	return (
		<div>
			<TableList
				list={list}
				rows={rows}
				pages={page}
				count={count}
				handleChangeRowsPerPage={handleChangeRowsPerPage}
				handleChangePage={handleChangePage}
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default DataTable;
