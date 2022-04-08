let usersController = {
    "register": function (req, res) {
        res.render("register");
    },
    "profile": function (req, res) {
        res.render("profile");
    }  
}

module.exports = usersController;