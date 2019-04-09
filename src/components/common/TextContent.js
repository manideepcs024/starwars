import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoaderComponent from './LoaderComponent';
import * as utilFunctions from '../../components/common/utils';

const TextContent = ({ classDetails, textDisplayDate }) => {
    console.log("TextC", textDisplayDate);
    return (
        <p className={classDetails}> {textDisplayDate}</p>


    );

};

export default TextContent;