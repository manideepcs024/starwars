import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
   render() {
      return (
         <div className="jumbotrom">
            <h1>Who is the boss ???</h1>
            <p>Get free water to drink!!!!
            </p>
            <Link to="about" className="btn btn-primary btn-lg">Visit About us</Link>
         </div>

      );
   }

   
}
export default HomePage;