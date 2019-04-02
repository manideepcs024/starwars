import React, { PropTypes } from 'react';
import AuthorListRow from './AuthorsListRow';

const AuthorsList = ({ list, onClick }) => {
	function ronClick(id, a) {

		onClick(id);

	}
	return (
		<div className="">
			<div className="">
				{
					<table className="table">
						<thead className="thead-dark">
							<tr>
								<th>ID</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Actions </th>
							</tr>
						</thead>

						{list.map(listitem => {

							return (
								<AuthorListRow key={listitem.id + Math.random()} author={listitem} onClick={ronClick} />

							);


						})
						}
					</table>

				}
			</div>
		</div>

	);

};
AuthorsList.propTypes = {
	list: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired
};

export default AuthorsList; 