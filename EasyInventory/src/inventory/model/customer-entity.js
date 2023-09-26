export class Customer {
    id;
    name;
    lastname;
    birthdate;
    email;
    phone;
    address;

    constructor(id, name, lastname, birthdate, email, phone, address) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.phone = phone;
        this.address = address;

    }
}