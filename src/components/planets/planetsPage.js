import React, { PropTypes, context } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PlanetCardList from './planetCardList';
import * as LoginActions from '../../actions/userLoginActions';
import * as planetActions from '../../actions/planetsActions';
import TextInput from '../common/TextInput';
import LoaderComponent from '../common/LoaderComponent';


class PlanetsPage extends React.Component {

    constructor(props) {
        super(props, context);
        this.state = {
            planets: [],
            showDetails: false,
            idtoshowDetails: -1,
            searchValue: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onClickMe = this.onClickMe.bind(this);
        this.populationReader = this.populationReader.bind(this);

    }
    onSave(event) {

        event.preventDefault();
    }
    populationReader(population) {
        let populations = population;

        // debugger;
        let populationStatus = "lesspopulated";
        if (population === 'unknown')
            populationStatus = 'Unknown';
        if (population > 10000 && population < 100000)
            populationStatus = 'lowpopulation';
        if (population > 100000 && population < 1000000)
            populationStatus = 'moderatelypop';
        if (population > 1000000 && population < 10000000)
            populationStatus = 'densepop';
        if (population > 10000000 && population < 100000000)
            populationStatus = 'highpop';
        if (population > 100000000)
            populationStatus = 'severepop';
        return populationStatus;
    }
    onChange(event) {
        this.props.dispatch(planetActions.planetsFetchRequest(event.target.value));
        this.setState({ searchValue: event.target.value });
    }
    onClickMe(planet) {
        this.setState({
            showDetails: true,
            idtoshowDetails: planet.name
        });

    }

    componentDidMount() {
        this.props.dispatch(planetActions.planetsFetchRequest());

    }
    componentDidUpdate() {
    }
    render() {

        return (
            <div className="container">
                <div className="jumbotrom">
                    <h1 className="text-center"> Planets. </h1>
                    <TextInput
                        name="seacrhplanet"
                        label="Seacrh Planet"
                        type="text"
                        onChange={this.onChange}
                        value={this.state.searchValue}

                    />
                    <div className="row">
                       
                                   {this.props.loading > 0 && this.props.loading ? <LoaderComponent /> : ''}
                        {this.props.planets && this.props.planets.planets && this.props.planets.planets.results && !this.props.loading   ? (this.props.planets.planets.results.map(planet =>
                            <PlanetCardList planet={planet} key={planet.name} onClickMe={this.onClickMe} add={this.populationReader(planet.population)} showDetails={this.state.showDetails} idtoshowDetails={this.state.idtoshowDetails} />
                        )) : ""}
                    </div>



                </div>

            </div>

        );
    }


}

function mapStateToProps(state, ownProps) {
    return {
        planets: state.planets,
        loading: state.ajaxCalls
    };

}
export default connect(mapStateToProps)(PlanetsPage);





