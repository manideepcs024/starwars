import React, { PropTypes, context } from 'react';
import LoginForm from './loginForm';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import * as LoginActions from '../../actions/userLoginActions';
import * as utilActions from '../common/utils';

class LoginPage extends React.Component {

    constructor(props) {
        super(props, context);
        this.state = {
            userDetails: {
                username: 'Luke',
                password: '19BBY'
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.redirect = this.redirect.bind(this);
        console.log("Props received", props);

    }
    redirect(){
        console.log("Log in");
    }
    onSave(event) {
        event.preventDefault();
        this.props.dispatch(LoginActions.loginDetailsFetchRequest(this.state.userDetails));
            //   this.context.router.push('/planets');
            // this.props.actions.courseActions.saveCOurse(this.state.course, this.props.params.id).then(() => this.redirect());

    }
    onChange(event) {
        let user = this.state.userDetails;
        const field = event.target.name;
        user[field] = event.target.value;
        this.setState({ userDetails: user });
    }
    componentDidMount(){
        utilActions.deleteLoginStatus();
    }
    componentDidUpdate(){
          const {validUser, loggedIn} = this.props.userDetails;
          if(this.props.userDetails.loggedIn){
              this.context.router.push('/planets');
          }
    }
    render() {
        const {validUser, loggedIn} = this.props.userDetails;
        return (

            <div className="jumbotrom">
                <p>{this.props.userDetails.message}</p>


                <LoginForm onSave={this.onSave} onChange={this.onChange} userDetails={this.state.userDetails} />


            </div>

        );
    }


}

function mapStateToProps(state, ownProps) {
    console.log("srare recs", state);
    return {
        userDetails: state.loginuser
    };

}
LoginPage.contextTypes = {
    router: PropTypes.object

};
export default connect(mapStateToProps)(LoginPage);   





