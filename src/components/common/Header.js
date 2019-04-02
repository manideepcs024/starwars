import React from 'react';
import {Link, IndexLink} from 'react-router';
import LoaderComponent from './LoaderComponent';
import * as utilFunctions from '../../components/common/utils';

const Header = ({loading, userDetails}) => {
    function showHeader(){
        if(JSON.parse(utilFunctions.getLoginStatus())){
            return true;
        }else{
            return false;
        }


    }
    return(
        <nav>
            {userDetails.loggedIn ? <Link to="/login"> Log out </Link>: ''}
        </nav>

    );
              

};

export default Header;