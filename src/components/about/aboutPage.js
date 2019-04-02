import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component{
    constructor(){
        super();
        this.forceUpdate = this.forceUpdate.bind(this);
    }
    checkHappiness(){
        this.forceUpdate();
    }
    shouldComponentUpdate(){
        return false;
    }
    render(){
        
        return(
            <div>
                <p>These is the About Page.....</p>

                <p>How happy are you.. these is just the demo of force update. </p>
                <a className="btn btn-primary" onClick={()=>this.checkHappiness()}>Check my Happiness</a>
                {Math.random() * 100 + "%"}
            </div>

        );
    }

}

export default AboutPage;