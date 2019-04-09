import React, { PropTypes, context } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import TextContent from './TextContent';

class CopyRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="copyright-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <TextContent classDetails='' textDisplayDate={['Copyright. Developed by use of ', <a href="https://swapi.io" target="_blank">swapi.co</a>]} />

                        </div>
                        <div className="col-md-6">
                            <TextContent classDetails={'text-head'} textDisplayDate="Code written by Manideep on Viusal Studio IDE" />
                            <a href="https://www.facebook.com/manideep.mittal" target="_blank">
                                <img src="https://www.shareicon.net/download/2017/06/28/888050_logo_512x512.png" height="30px" width="auto" /></a>
                            <a href="#" target="_blank">Github</a>


                        </div>
                    </div>
                </div>


            </div>


        );
    }

}

export default CopyRight;