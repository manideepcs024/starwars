import React, { PropTypes, context } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PlanetCardList from './planetCardList';
import * as LoginActions from '../../actions/userLoginActions';
import * as planetActions from '../../actions/planetsActions';


class PlanetPageDetails extends React.Component {

    constructor(props) {
        super(props, context);
        this.state = {
            planets: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);

    }
    onSave(event) {
        event.preventDefault();
    }
    onChange(event) {
    }
    componentDidMount() {
        this.props.dispatch(planetActions.planetsFetchRequest());

    }
    componentDidUpdate() {
    }
    render() {
     
        return (

            <div className="jumbotrom">
                <h1 className="text-center">Read about the blooddyy planet. </h1>
                <div className="row">
              
                </div>



            </div>

        );
    }


}

function mapStateToProps(state, ownProps) {
    return {
        planet: state.planet
    };

}
export default connect(mapStateToProps)(PlanetPageDetails);





