const db = require("../config/database");

class Contact {
    constructor(name, PhoneNo, Email) {
        this.name = name;
        this.PhoneNo = PhoneNo;
        this.Email = Email;
    }

    save() {
        return db.execute(
            "INSERT INTO contact (name,PhoneNo,email) VALUES (?,?,?)",
            [this.name, this.PhoneNo, this.Email]);

    }

    static getAll() {
        return db.execute("SELECT * FROM contact");
    }

    static getById(id) {
        return db.execute("SELECT * FROM contact WHERE id=?", [id])
    }

    static deletebyId(id) {
        return db.execute("DELETE FROM contact WHERE id=?", [id])
    }

}

module.exports = Contact;