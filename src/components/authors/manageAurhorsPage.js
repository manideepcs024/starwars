import React, { PropTypes, props, context } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as  courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import AuthorsList from './AuthorsList.js';
import { Link } from 'react-router';

class ManageAuthorsPage extends React.Component {
    constructor(props) {
        super(props, context);
        this.state = {
            "manideep": "Mittal"

        };
        this.onClick = this.onClick.bind(this);

    }
    onClick(id) {
        const deleteConfirm = confirm("Do You want to delelte me ");
        console.log("This Props recd are", this.props.actions.authorActions);
        if (deleteConfirm) {
            alert("Ok Lets Delete");
            this.props.actions.authorActions.deleteAuthor(id);


        } else {
            alert("Thank you!!! you spared me. ");
        }

    }


    render() {
        const { authors } = this.props;

        return (
            <div className="row">
                <div className="col-md-11 col-md-push-1">
                    <h3 className="title">Fuck everything else and Lets Add a New Author Here. </h3>
                    <Link to={"/addAuthor/"} className="btn btn-primary">Add Fucking Author</Link>

                    <h2 className="title">
                        These is Authors Page. you will find the all authors data over here....
					<AuthorsList list={authors} onClick={this.onClick} />

                    </h2>
                </div>


            </div>
        );
    }

}

function mapStateToProps(state, ownProps) {

    return {
        authors: state.authors
    };

}
function mapDispatchToProps(dispatch) {


    return {
        actions: {
            courseActions: bindActionCreators(courseActions, dispatch),
            authorActions: bindActionCreators(authorActions, dispatch)

        }
    };

}

// ManageAuthorsPage.propTypes = {
//     actions: PropTypes.obj.isRequired

// };

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorsPage);