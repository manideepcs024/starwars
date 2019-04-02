import initialState from './initialState';
export default function courseReducer(state = initialState.course, action) {
    switch (action.type) {

        case 'CREATE_COURSE':
            // object.assign({}, state, action.payload.data);
            console.log("Create Course Recd", action);
            console.log("Current state", state);
            if (action.payload.course.id) {
                return [...state, Object.assign({}, action.payload.course)];
            } else {
                return [...state.filter(course => course.id !== action.payload.course.id),
                Object.assign({}, action.payload.course)
                ];
            }


        case 'LOAD_COURSES_SUCCESS':
            console.log("List of Courses", action.payload.courses);
            return action.payload.courses;

        case 'DELETE_COURSE':
            console.log("LOC", state);
            return state.filter((states) => states.title !== action.payload.course.title);

        case 'UPDATE_COURSE_SUCCESS':
            return [...state.filter(course => course.id !== action.payload.course.id),
            Object.assign({}, action.payload.course)
            ];

        case 'DELETE_ALL_COURSES':
            return [...state.pop()];


        default:
            return state;
    }

}