"use strict";
// 10. Getters and Setters (Accessors)
// Create a class User with:
// • private _username: string
// • getter username()
// • setter username(newUsername: string) that ensures username is at least 3 characters long, otherwise
// throws an error
// • ensure the user cannot be instantiated without a valid username
class User {
    _username;
    constructor(username) {
        if (username.length < 3) {
            throw new Error('Username must be at least 3 characters long');
        }
        this._username = username;
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        if (newUsername.length < 3) {
            throw new Error('Username must be at least 3 characters long');
        }
        this._username = newUsername;
    }
}
// const userA = new User("Martin");
// userA.username = "johnDoe";
// console.log(userA.username);
// const userA = new User("jo"); 
// const userA = new User("Martin");
// userA.username = "Do";
//# sourceMappingURL=10-03.js.map