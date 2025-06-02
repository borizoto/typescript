// 6. Type Extraction
// Your task is to write a function that accepts 2 parameters and returns a function that accepts a combined version of
// the objects and then prints their combined information. Your function should accept 2 parameters:
// • names object – contains name information and a function getPersonInfo to print the names information
// • location object – contains address information and a function getAddressInfo to print the location
// information
// After returning the result function, call it with the combined object to print its info to the console in the format
// 'Hello, <person.getPersonInfo()> from <person.getAddressInfo()>'
// Note: The main purpose of the task is to leverage type extraction and advanced types to save you a lot of writing,
// extract and use type aliases as much as possible, if you use them properly, you’ll only need to work with simple
// short type aliases, instead of the expansive object type declarations.

// type namesType = {
//     fName: string;
//     lName: string;
//     age: number;
//     getPersonInfo(): string;
// }

// type locationType = {
//     city: string;
//     street: string;
//     number: number;
//     postalCode: number;
//     getAddressInfo(): string;
// }

let names = {
    fName: 'John', lName: 'Doe', age: 22, getPersonInfo() {
        return `${this.fName} ${this.lName}, age ${this.age}`
    }
};

let locationAddeess = {
    city: 'Boston', street: 'Nowhere street', number: 13, postalCode:
        51225, getAddressInfo() {
            return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`
        }
};

type NamesType = typeof names;
type LocationType = typeof locationAddeess;
type Person = NamesType & LocationType;

function createCombinedFunction(names: NamesType, location: LocationType) {
    return function (combinedObj: Person): void {
        console.log(`Hello, ${combinedObj.getPersonInfo()} from ${combinedObj.getAddressInfo()}`)
    }
}

let combinedFunction = createCombinedFunction(names, locationAddeess);
let combinedPerson = Object.assign({}, names, locationAddeess);
combinedFunction(combinedPerson);