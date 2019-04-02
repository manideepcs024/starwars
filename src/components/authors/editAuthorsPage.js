import React, { PropTypes, props, context } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthorForm from './AuthorForm';
import * as authorActions from '../../actions/authorActions';
// import toastr from '../../../node_modules/toastr';
import toastr from 'toastr';

class editAuthorspage extends React.Component {
	constructor(props) {
		super(props, context);
		this.state = {
			author: Object.assign({}, this.props.author),
			authorId: this.props.params.id
		};
		this.onSave = this.onSave.bind(this);
		this.onChange = this.onChange.bind(this);

	}
	componentDidMount() {
		toastr.success('Are you the 6 fingered man?')

	}
	componentWillReceiveProps(nextProps) {
		console.log("CUSA", nextProps);
		console.log("CUSA", this.props);

		if (this.props.params) {
			if (this.props.params.id == nextProps.author.id) {
				this.setState({authorId: this.props.params.id});
				this.setState({ author: Object.assign({}, nextProps.author) });

			}

		}else{
			const author = this.state.author;
			author[this.state.author.id] = this.state.author.firstName + Math.random();
			this.setState({author: author});

		}

	}

	componentDidUpdate() {
		if (this.props.params.id) {
		}

	}
	onSave(e) {
		e.preventDefault();
		// if(this.props.params){
			// this.props.actions.authorActions.editAuthor(this.state.author);
		// }
		console.log("State of", this.state);
		this.props.actions.authorActions.addAuthor(this.state.author, this.state.authorId).then(() => {
			if (this.props.params.id) {
				toastr.info('Are you the 6 fingered man?');
				alert("Author Updated.... ");

			} else {
				alert("Author added.... ");


			}
			this.context.router.push('/authors');
		});



	}
	onChange(e) {
		const valueInput = e.target.value;
		const author = this.state.author;
		author[e.target.name] = e.target.value;
		this.setState({ author: author });
	}

	render() {
		return (
			<AuthorForm onSave={this.onSave} author={this.state.author} onChange={this.onChange} authorId={this.props.params.id ? true : false} />

		);
	}

}
editAuthorspage.contextTypes = {
	router: PropTypes.object

};
function getAuthorDet(authors, id) {
	console.log("Author", authors, id);
	return authors.filter(author => author.id == id);

}

function mapStateToProps(state, ownProps) {
	let getCurrentAuthor = getAuthorDet(state.authors, ownProps.params.id);
	let authorObj = {
		"firstName": '',
		"lastName": '',
		"id": ''
	};
	let userAuthor;
	if (getCurrentAuthor.length > 0) {
		userAuthor = getCurrentAuthor[0];
	} else {
		userAuthor = authorObj;
	}

	return {
		author: userAuthor
	};


}
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			authorActions: bindActionCreators(authorActions, dispatch)
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(editAuthorspage);
