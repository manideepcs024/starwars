import React, { PropTypes, context } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import FilmCard from '../Films/filmCard';
import { beginAJAXcall } from '../../actions/ajaxCallActions';
import LoaderComponent from '../common/LoaderComponent';



class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeText: 'Star wars App shows listing of several planets, actors, authors, films'
        };
    }
    componentDidMount() {
        console.log("Films", this.props.films);
    }
    render() {
        console.log("Films", this.props.films, this.props.films.count);
        const { films } = this.props;
        const { results } = this.props.films;
        return (

            <div className="about-page">
                <div className="container">
                    <h1>Star Wars</h1>
                    <p className="text">{this.state.welcomeText}</p>
                    <h3>{this.props.films.count > 0 ? 'Total Films: ' + this.props.films.count : ''}</h3>
                    <div className="row">
                        {this.props.loading && this.props.loading > 0 ? <LoaderComponent /> : ''}
                        {this.props.films && this.props.films.results ?
                            (results.slice(0,3).map(film => <FilmCard film={film} />)) :
                            ''}
                    </div>

                </div>

            </div>

        );
    }
}
function mapStateToProps(state, ownProps) {
    console.log("state details ", state);
    return {
        films: state.films,
        loading: state.ajaxCalls
    };

}
export default connect(mapStateToProps)(AboutComponent);

