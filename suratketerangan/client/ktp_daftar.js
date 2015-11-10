
Meteor.subscribe("ktp");

Template.tambah_ktp.events({
    "click .submit": function(){
        no_ktp =  $("#no_ktp").val(),
        name =  $("#nama").val()
        Meteor.call("saveKtp", no_ktp, name);
    }
})

Template.daftar_ktp.helpers({
    all_ktp : function(){
        return ktp.find({})
    }
})
