import React, { PropTypes, props, context } from 'react';
import * as userActions from '../../actions/userDetailActions';
import UserDetailComponent from './UserDetailComponent';
import { connect } from 'react-redux';

class AboutMe extends React.Component{
    constructor(){
        super(props, context);
        this.state = {

        };

    }
    componentDidMount(){
        alert('Component Mounted.... ');
        this.props.dispatch(userActions.userDetailsFetchRequest());
    }
    render(){
        const {user} = this.props;
        return(
            // <div>Hello {user.name} Here... </div>
            <UserDetailComponent user={user} />


        );
    }


}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };

}
export default connect(mapStateToProps)(AboutMe);   