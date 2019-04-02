import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) =>{
    return(
        <tr>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td><Link to={'managecourse/' + course.id} className="btn btn-success">{course.title}</Link></td>
        </tr>


    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;