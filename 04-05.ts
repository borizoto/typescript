export { }

class MockAuthrizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }
    canViewData(property: string) {
        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name',
                'age'].includes(property);
            default: return false;
        }
    }
}

let mockAuthorizationService = new MockAuthrizationService('Admin');

function Auth(instance: MockAuthrizationService) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originanlGetter = descriptor.get;

        descriptor.get = function () {
            const hasAccess = instance.canViewData(propertyKey);

            if (!hasAccess) {
                throw new Error('You are not authorized to view this information');
            }

            return originanlGetter?.call(this);
        }

        return descriptor;
    }
}

class User {
    private _name!: string;
    private _age!: number;
    private _creditCardNumber!: string;

    constructor(name: string, age: number, creditCarNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCarNumber;
    }

    @Auth(mockAuthorizationService)
    public get name(): string {
        return this._name;
    }

    @Auth(mockAuthorizationService)
    public get age(): number {
        return this._age;
    }

    @Auth(mockAuthorizationService)
    public get creditCardNumber(): string {
        return this._creditCardNumber;
    }
}

const user1 = new User("John Doe", 30, 'ABCD1234');
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);