Template.komentarcetak.helpers({
    listKomentar: function() {
        return Komentar.find({
            mainId: this.mainId
        });
    },
    penulis: function() {
        return Meteor.users.findOne(this.userId);
    }
});