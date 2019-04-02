import React, {propTypes} from 'react';
import Header from './common/Header';
import {connect } from 'react-redux';
import * as utilFunctions from '../components/common/utils';

class App extends React.Component{

render(){
    return(
        <div className="container-fluid">
           <Header loading={this.props.loading} userDetails={this.props.userDetails} />
            {this.props.children}
        </div>


    );
}
}
App.propTypes = {
    // children: propTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    console.log("STATES", state);
    return {
        loading: state.ajaxCalls,
        userDetails: state.loginuser


    };

}
export default connect(mapStateToProps)(App);
