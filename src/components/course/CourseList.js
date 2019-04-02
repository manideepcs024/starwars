import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) =>{
    return(
        <table className="table">
            <thead className="thead">
                <tr>
                    <th>Course</th>
                    <th>Author</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                {courses.map(course=>
                    
                    <CourseListRow key={course.id ? course.id + Math.random(): Math.random()} course={course}/>

                )}

            </tbody>
        </table>

    );
              

};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired

};

export default CourseList;