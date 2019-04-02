import React, { PropTypes } from 'react';
import PlanetCard from './planetCard';

const PlanetCardList = ({ planet,onClickMe, showDetails, idtoshowDetails,add }) => {
    console.log("Click Me1234",add);
    return (
        <div className="col-md-4">
        <PlanetCard planet={planet} add={add} showDetails={showDetails} idtoshowDetails={idtoshowDetails} onClickMe={()=>onClickMe(planet)}  />
        </div>
    );


};

PlanetCardList.propTypes = {


};

export default PlanetCardList;