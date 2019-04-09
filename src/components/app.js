import React, {propTypes} from 'react';
import Header from './common/Header';
import CopyRight  from './common/CopyRight';
import {connect } from 'react-redux';
import * as utilFunctions from '../components/common/utils';

class App extends React.Component{

render(){
    return(
        <div className="">
           <Header loading={this.props.loading} userDetails={this.props.userDetails} />
            {this.props.children}
            <CopyRight />
        </div>


    );
}
}
App.propTypes = {
    // children: propTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        loading: state.ajaxCalls,
        userDetails: state.loginuser


    };

}
export default connect(mapStateToProps)(App);
