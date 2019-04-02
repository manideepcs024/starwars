import React, { PropTypes, context } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as LoginActions from '../../actions/userLoginActions';
import * as planetActions from '../../actions/planetsActions';
import TextInput from '../common/TextInput';
import { Router, browserHistory } from 'react-router';
import * as utilActions from '../common/utils';


class LoggedInPage extends React.Component {

    constructor(props) {
        super(props, context);

    }
    componentDidMount() {
        let logstatus = utilActions.getLoginStatus();
        console.log("aaa", logstatus);
        
        if (JSON.parse(logstatus)) {
            this.context.router.push(this.props.currentURL);

        } else {
            browserHistory.replace("/login");

        }
    }
    render() {

        if (localStorage.getItem('loggedIn')) {
            return this.props.children;
        } else {
            return null;
        }
    }



}




LoggedInPage.contextTypes = {
    router: PropTypes.object

};

function mapStateToProps(state, ownProps) {
    return {
        userDetails: state.loginuser,
        currentURL: ownProps.location.pathname
    };

}
export default connect(mapStateToProps)(LoggedInPage);





