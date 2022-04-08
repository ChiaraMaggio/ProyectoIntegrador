let usersController = {
    register: function (req, res) {
        return res.render("register");
    },
    profile: function (req, res) {
        return res.render("profile");
    },
    profileEdit: function (req, res) {
        return res.render("profile-edit");
    }  
}

module.exports = usersController;