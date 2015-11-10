Meteor.subscribe("daftar");

  Template.appsuketmodal.helpers({
    noPendaftaran: function(){
        return Session.get("noPendaftaran");
    }
  })