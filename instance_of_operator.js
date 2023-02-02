
class user {

    constructor(username, password)
    {
        this.username = username;
        this.password = password;
    }

    login()
    {
        console.log('You are successfully login');
    }

    // getter accessor

    get name()
    {
        return this.username
    }

}

class employee extends user
{
    employeeAccount()
    {
        console.log("employee account type is saving");
    }
    
}

let user1 = new employee("Himanshu", '123@him');
console.log(user1)

// access login method
user1.login()

console.log(user1.name);


// change the value of username of user1 object
user1.username = "Dixita"

console.log(user1.name);

// instance of operator
// Gives permission to check whether an object is a class or not. 
// And it will always return true and false values.

console.log(user1 instanceof user);

let salary = 50000;

console.log(salary instanceof user);
console.log(user1 instanceof employee);