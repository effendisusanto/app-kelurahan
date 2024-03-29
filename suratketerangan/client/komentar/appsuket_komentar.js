Meteor.subscribe("main")
Meteor.subscribe("komentar")

Template.komentar.onRendered(function() {
    this.$('#formKomentar').validator();
});

Template.komentar.helpers({
    listKomentar: function() {
        return Komentar.find({
            mainId: this.mainId
        });
    },
    penulis: function() {
        return Meteor.users.findOne(this.userId);
    }
});

Template.komentar.events({
    'click #approve': function() {
        var date = new Date();
        var id = this.mainId;
        var komentar = $("#komentar").val();
        var statusSkr = Main.findOne({
            _id: this.mainId
        }, {
            "status": 1,
            _id: 0
        });
        var status = ""
        switch (statusSkr.status) {
            case "Staff Kelurahan":
                status = "Sekertaris Lurah";
                break;
            case "Sekertaris Lurah":
                status = "Lurah"
                break;
            case "Lurah":
                status = "Cetak"
                break;
        }
        // TODO: add user
        Meteor.call("approval", id, new Date(), status, komentar, Meteor.userId());
        Router.go("/tasktodo")
    },
    'click #reject': function() {
        var date = new Date();
        var id = this.mainId;
        var komentar = $("#komentar").val();
        var statusSkr = Main.findOne({
            _id: this.mainId
        }, {
            "status": 1,
            _id: 0
        });
        var status = ""
        switch (statusSkr.status) {
            case "Lurah":
                status = "Sekertaris Lurah";
                break;
            case "Sekertaris Lurah":
                status = "Staff Kelurahan"
                break;
        }
        Meteor.call("approval", id, new Date(), status, komentar, Meteor.userId());
        Router.go("/tasktodo")
    }
});
