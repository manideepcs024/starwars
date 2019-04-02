import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
    return { type: 'LOAD_AUTHORS_SUCCESS', payload: { authors: authors } };
}
export function addAuthorSuccess(author) {
    return { type: 'ADD_AUTHOR_SUCCESS', payload: { author: author } };

}
export function deleteAuthorSuccess(authorId){
    console.log("Author RECEIVED", authorId);
    return {type: "DELETE_AUTHOR_SUCCESS", payload: {author: authorId}}; 
}
export function editAuthorSuccess(author){
    return {type: 'EDIT_AUTHOR_SUCCESS', payload: {author: author}};

}
export function loadAuthors() {
    return dispatch => {
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw (error);
        });
    };
}

export function addAuthor(author, authorId) {
    console.log("Author Recd", author, authorId);
    return dispatch => {
        return AuthorApi.saveAuthor(author).then(author => {
            authorId ?   dispatch(editAuthorSuccess(author)) : dispatch(addAuthorSuccess(author));



        }).catch(error => {
            throw (error);
        });
    }
}

export function editAuthor(author, authorId){
    console.log();
    return dispatch =>{
        return AuthorApi.editAuthor(author).then(author=>{
            dispatch(editAuthorSuccess(author));

        }).catch(error =>{
            throw(error);
        });
    }

}

export function deleteAuthor(authorId) {
    console.log("Author id recd is ", authorId);
    return dispatch => {
        return AuthorApi.deleteAuthor(authorId).then(author => {
            console.log("Auhtor id success response deletion ", author);
            dispatch(deleteAuthorSuccess(authorId));

        }).catch(error => {
            console.log("Deletion id error author is here", error);
            throw (error);
        });

    }

}