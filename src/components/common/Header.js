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
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {"|"}
            <Link to="/about" activeClassName="active">About</Link>
            {"|"}
            <Link to="/course" activeClassName="active">Courses </Link>
            {"|"}
            <Link to="/knowme" activeClassName="active">About me</Link>
            {loading > 0 && <LoaderComponent />}
            <Link to="/authors" activeClassName="active">Authors</Link>
            {userDetails.loggedIn ? <Link to="/login"> Log out </Link>: ''}

        
        </nav>

    );
              

};

export default Header;