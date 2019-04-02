import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AuthorListRow = (props) => {
	const { firstName, lastName, id } = props.author;
	function showdata(id) {
		console.log(props.author.id);
		props.onClick(props.author.id, "TY");

	}
	return (
		<tr>
			<td>{id}</td>
			<td>{firstName} </td>
			<td> {lastName} </td>

			<td>
				<Link to={'/editAuthor/' + id} className="btn btn-success">Edit Me Dude. </Link>
				<a onClick={showdata} className="btn btn-danger">Delete Me</a>
			</td>

		</tr>

	);


};

AuthorListRow.propTypes = {
	author: PropTypes.object.isRequired

};

export default AuthorListRow;
