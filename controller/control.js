const Contact = require('../model/add_models')

exports.getAddContact = (req, res, next) => {
    res.render('add', { pageTitle: 'CONTACTS', path: req.path })
};

exports.postAddContact = (req, res, next) => {
    console.log(req.body);
    const contact = new Contact(req.body.name, req.body.PhoneNo, req.body.Email);
    // contact.push({ name: req.body.name }, { PhoneNo: req.body.PhoneNo }, { Email: req.body.Email });
    // console.log(req.body.name);
    // console.log(req.body.PhoneNo);
    // console.log(req.body.Email);
    contact.save()
        .then(() => {
            res.redirect("/");
        })
        .catch(err => next(err));
    // res.redirect("/");
    // res.send("<h1>Successfully Created</h1>");
};

exports.getContact = (req, res, next) => {
    Contact.getAll()
        .then((result) => {
            res.render("home", {
                pageTitle: "Home Page",
                allPosts: result[0],
                path: req.path
            });
        })
        .catch(err => next(err));
}

exports.getContactById = (req, res, next) => {
    const contactId = req.params.id;
    Contact.getById(contactId)
        .then(([rows, fields]) => {
            // console.log(rows[0]);
            res.render("add", { pageTitle: rows[0].title, post: rows[0] });
        })
        .catch(err => next(err));
}
exports.deleteContact = (req, res, next) => {
    const contactId = req.params.id;
    Contact.deletebyId(contactId)
        .then(() => {
            res.redirect("/");
        })
        .catch(err => next(err));
}
// exports.updateContact = (req, res, next) => {
//     const contactId = req.params.id;
//     Contact.updatebyId(contactId)
//         .then(() => {
//             res.redirect("/");
//         })
//         .catch(err => next(err));
// }
// exports.editContact = (req, res, next) => {
//     const contactId = req.params.id;
//     Contact.editbyId(contactId)
//         .then(() => {
//             res.redirect("/");
//         })
//         .catch(err => next(err));
// }