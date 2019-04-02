export function saveLoginStatus() {
    localStorage.setItem('loggedIn', true);

}
export function getLoginStatus() {
    return localStorage.getItem('loggedIn');

}
export function deleteLoginStatus() {
    localStorage.setItem('loggedIn', false);
}