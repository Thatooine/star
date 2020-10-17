
export class User {
    firstName = ""
    lastName =  ""
    emailAddress =  ""

    constructor(user?: User) {
        if (!user) {
            return
        }

        user.emailAddress = this.emailAddress
        user.firstName = this.firstName
        user.lastName = this.lastName
    }
}
