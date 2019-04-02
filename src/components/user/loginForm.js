import React, { PropTypes, context } from 'react';
import TextInput from '../common/TextInput';

const LoginForm = (props) => {
    return (
        <div>
            <div className="container">
                <form method="post" className="login-form">
                    <div className="container">
                        <div className="col-md-6 col-md-push-2">
                            <h1 className="text-center">Login Here. </h1>
                            <div className="row">
                                <TextInput
                                    name="username"
                                    value={props.userDetails.username}
                                    label="Username"
                                    type="text"
                                    onChange={props.onChange}

                                />
                            
                            </div>

                            <div className="row">
                                 <TextInput
                                    name="password"
                                    value={props.userDetails.password}
                                    label="Password"
                                    type="password"
                                    onChange={props.onChange}

                                />
                            
                              
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-md-push-4">
                                    <input type="submit" className="btn btn-primary login-submit" onClick={props.onSave} value="Save" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default LoginForm;