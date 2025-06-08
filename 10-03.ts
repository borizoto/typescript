// 10. Getters and Setters (Accessors)
// Create a class User with:
// • private _username: string
// • getter username()
// • setter username(newUsername: string) that ensures username is at least 3 characters long, otherwise
// throws an error
// • ensure the user cannot be instantiated without a valid username

class User {
    private _username: string;

    constructor(username: string) {
        if (username.length < 3) {
            throw new Error('Username must be at least 3 characters long');
        }
        this._username = username;
    }


    public get username(): string {
        return this._username;
    }

    public set username(newUsername: string) {
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

const userA = new User("Martin");
userA.username = "Do";