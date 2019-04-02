import React, {PropTypes} from 'react';


const UserDetailComponent = ({user})=>{
    return(
        <div>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" height="50" width="50"/>
            <p>Visit me: <a href={user.html_url} target="_blank">{user.name} Github account</a></p>
        </div>

    );

};

UserDetailComponent.proPTypes = {
    user: PropTypes.object.isRequired
}
export default UserDetailComponent;
