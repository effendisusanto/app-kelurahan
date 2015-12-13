Meteor.subscribe("mainTodo")

Template.tasktodo.helpers({
	dfts: function(){
		if(!Meteor.userId()){
			return [];
		}
		var user = Meteor.users.findOne({_id:Meteor.userId()});
		var role = user.profile.groupLogin;
		switch(role){
			case "Staff":
				return Main.find({status:"Staff Kelurahan"}, {sort: {tanggalPembuatan: -1}});
			case "Sekertaris Lurah":
				return Main.find({status:"Sekertaris Lurah"}, {sort: {tanggalPembuatan: -1}});
			case "Lurah":
				return Main.find({status:"Lurah"}, {sort: {tanggalPembuatan: -1}});
		}
	}
});

Template.tasktodo.events({
	'click .btn-info': function(){
		var mainid = this._id;
		var suket = this.jenisSuket;
		switch(suket){
			case "Keterangan Kelahiran":
				Router.go("/tasktodo/kelahiran/view/" + mainid)
		}
	}
})