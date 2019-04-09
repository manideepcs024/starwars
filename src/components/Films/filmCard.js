import React from 'react';
import { Link } from 'react-router';
import moment from '../../../node_modules/moment/moment';

const FilmCard = ({ film }) => {
    console.log("Data Recd at FC", film);
    return (
        <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="film-card">
                <div className="section">
                    <h3> {film.title} </h3>
                    <p>Directed by: {film.director}</p>
                    <p>Producers: {film.producer}</p>
                    <p> {film.opening_crawl.substring(0,200) + '...'}</p>
                    
                    <p>Release date: {moment(film.release_date).format('MM/DD/YYYY')}</p>


                </div>
            </div>
        </div>

    );
};

export default FilmCard;