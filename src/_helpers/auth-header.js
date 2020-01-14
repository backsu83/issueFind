export function authHeader() {
    let user = localStorage.getItem('user');
    if (user) {
        return user;
    } else {
        return {};
    }
}
