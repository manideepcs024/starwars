import courseApi from '../api/mockCourseApi';
import { beginAJAXcall } from './ajaxCallActions';

export function createCourse(course) {
    console.log(course);
    // return {type: "CREATE_COURSE", course}
    return { type: "CREATE_COURSE", payload: { course: course } }
}
export function updateCourse(course) {
    return { type: "UPDATE_COURSE_SUCCESS", payload: { course: course } }

}

export function loadCoursesSuccess(courses) {
    console.log("Load Courses at action", courses);
    return { type: "LOAD_COURSES_SUCCESS", payload: { courses: courses } }
}
export function deleteCourse(course) {
    console.log(course);
    return { type: "DELETE_COURSE", payload: { course: course } }

}

export function deleteAllCourses() {
    return { type: "DELETE_ALL_COURSES" }
}

export function updateCourseSuccess(savedCourse) {
    return { type: "UPDATE_COURSE_SUCCESS", payload: { course: savedCourse } };

}

export function saveCourseSuccess(savedCourse) {
    return { type: "CREATE_COURSE", payload: { course: savedCourse } };
}

export function loadCourses() {
    console.log("I am called");

    return function (dispatch) {
        dispatch(beginAJAXcall());

        console.log(dispatch)
        return courseApi.getAllCourses().then(courses => {
            console.log("Courses at Api Call", courses);
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            console.log(error);
            throw (error);
        });

    };
}


export function saveCOurse(course, idCourse) {
    return function (dispatch, getState) {
        dispatch(beginAJAXcall());
        return courseApi.saveCourse(course).then(savedCourse => {
            idCourse ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(saveCourseSuccess(savedCourse));

        }).catch(error => {
            throw (error);

        });

    }

}
// export default courseActions;