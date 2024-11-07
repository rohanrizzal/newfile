// User class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log("Accessing website data...");
    }
}

// Admin class that inherits from User
class Admin extends User {
    constructor(name, email) {
        super(name, email); // Call the parent class constructor
    }

    editData() {
        console.log(`${this.name} is editing website data...`);
    }
}

// Example usage:
const user1 = new User("John Doe", "john.doe@example.com");
const admin1 = new Admin("Alice Admin", "alice.admin@example.com");

user1.viewData();
// Output:
// Name: John Doe
// Email: john.doe@example.com
// Accessing website data...

admin1.viewData();
admin1.editData();
// Output:
// Name: Alice Admin
// Email: alice.admin@example.com
// Accessing website data...
// Alice Admin is editing website data...
