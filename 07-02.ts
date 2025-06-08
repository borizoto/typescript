// 7. Validate User
// Your task is to create a type predicate function that receives a single object parameter and validates whether it is a
// valid User.

// type User = {
//     id: number | string,
//     username: string,
//     passwordHash: string | string[],
//     status: 'Locked' | 'Unlocked' | 'Deleted',
//     email?: string
// }

// An object is considered a valid user if it:
// • Has an id of either:
//  - type number, that has a value over 100
//  - type string and length exactly 14 characters
// • Has a username of type string, that has a length between [5…10] characters
// • Has a passwordHash of either:
//  - type string and has a length of exactly 20 characters
//  - type string[] with exactly 4 elements each of which has length of exactly 8 characters
// • Has a status of either:
//  - 'Locked'
//  - 'Unlocked'
// • May optionally have an email (not required)
// Hint: you can use in keyword as both a type guard and to check if a property exists on an object

function isUser(obj: unknown): obj is User {
    return obj = typeof obj === 'object' && obj !== null && 'id' in obj && ((typeof obj.id === 'number' && obj.id > 100) || (typeof obj.id === 'string' && obj.id.length === 14))
        && 'username' in obj && typeof obj.username === 'string' && obj.username.length > 4 && obj.username.length < 11
        && 'passwordHash' in obj && ((typeof obj.passwordHash === 'string' && obj.passwordHash.length === 20) || (Array.isArray(obj.passwordHash) && obj.passwordHash.every(el => typeof el === 'string') && obj.passwordHash.length === 4 && obj.passwordHash.every(el => el.length === 8)))
        && 'status' in obj && typeof obj.status === 'string' && (obj.status === 'Locked' || obj.status === 'Unlocked')
}

let user1 = { id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' };
let user2 = { id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' };
let user3 = { id: '20', username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' };
let user4 = { id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567', '98765432'], status: 'Locked', email: 'something' };
let user5 = { id: 'qwwe-azfg-ey38', username: 'Someone', passwordHash: ['qwezz8jg', 'asdg-444', '12-34-56'], status: 'Unlocked' };
let user6 = { id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567', status: 'Locked', email: 'something@abv.bg' };

console.log(isUser(user1));
console.log(isUser(user2));
console.log(isUser(user3));
console.log(isUser(user4));
console.log(isUser(user5));
console.log(isUser(user6));