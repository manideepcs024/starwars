import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PlanetCard = ({ planet, onClickMe, showDetails, idtoshowDetails,add }) => {
    console.log("Planet", planet);
    return (
        <div className={"planet-card " + add}>
            <h1 className="text-center">{planet.name}</h1>
            <p class="climate">Climate: {planet.climate}</p>


            {showDetails && idtoshowDetails === planet.name ? (

                <div>
                    <p class="dia">Diameter: {planet.diameter}</p>
                    <p>Population: {planet.population}</p>
                    <p>Terrain: {planet.terrain}</p>
                </div>

            ) : ''}

            <p className="button-names" onClick={() => onClickMe(planet)}> View More </p>


        </div>


    );
};

PlanetCard.propTypes = {

};

export default PlanetCard;