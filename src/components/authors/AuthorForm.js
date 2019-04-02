import React, { PropTypes, context } from 'react';

const AuthorForm = (props) => {
	console.log("aaa", props);
	const {firstName, lastName, id} = props.author;
	return (
		<div>
			<div className="container">
				<form method="post">
					<div className="container">
						<div className="col-md-8 col-md-push-2">
							<h1>{props.authorId ? "Edit Author !!!!" : "Add a New Author"}</h1>
							<div className="row">
								<div className="col-md-2">
									<label className="control-label"> First Name</label>
								</div>
								<div className="col-md-8">
									<input type="text" className="form-group" value={firstName}   name="firstName" onChange={props.onChange} />
								</div>
							</div>

							<div className="row">
								<div className="col-md-2">
									<label className="control-label"> Last  Name</label>
								</div>
								<div className="col-md-8">
									<input type="text" className="form-group" value={lastName}  name="lastName" onChange={props.onChange} />
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<input type="submit" className="btn btn-primary" onClick={props.onSave} value={props.authorId ? "Edit" : "Save"} />
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);

};


export default AuthorForm;