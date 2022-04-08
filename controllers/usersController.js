let usersController = {
    register: function (req, res) {
        res.render("register");
    },
    profile: function (req, res) {
        res.render("profile");
    },
    profileEdit: function (req, res) {
        res.render("profile-edit");
    }  
}

module.exports = usersController;