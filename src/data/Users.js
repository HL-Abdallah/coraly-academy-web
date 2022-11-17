const users = [{
    email: "hameurlain.abdallah@gmail.com",
    password: "secret",
    username: "Abdallah",
}, {
    email: "admin@LD.com",
    password: "secret",
    username: "Admin",
}, {
    email: "fn@ld.com",
    password: "123",
    username: "Fabrizio Nillo"
}]

function login(email, password) {
    return users.find(user => user.email === email && user.password === password) || "404";
}

export { users, login }