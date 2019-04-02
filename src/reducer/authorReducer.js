import initialState from './initialState';


export default function authorReducer(state = initialState.author, action) {
    switch (action.type) {
        case 'LOAD_AUTHORS_SUCCESS':
            return action.payload.authors;
        case 'ADD_AUTHOR_SUCCESS':
            return [...state, Object.assign({}, action.payload.author)];
        case 'DELETE_AUTHOR_SUCCESS':
            return state.filter(aid => aid.id !== action.payload.author);
        case 'EDIT_AUTHOR_SUCCESS':
        console.log("EDITAUTHOR RECD", action.payload.author);
        return [...state.filter(author=>author.id!==action.payload.author.id), Object.assign({},action.payload.author)]

        default:
            return state;
    }
}
