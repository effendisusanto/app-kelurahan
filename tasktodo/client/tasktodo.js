Meteor.subscribe("mainTodo")
Meteor.subscribe("kelahiran")

Template.tasktodo.helpers({
	dfts: function(){
		if(!Meteor.userId()){
			return [];
		}
		var user = Meteor.users.findOne({_id:Meteor.userId()});
		var role = user.profile.groupLogin;
		switch(role){
			case "Staff":
				return Main.find({status:"Staff Kelurahan"});
			case "Sekertaris Lurah":
				return Main.find({status:"Sekertaris Lurah"});
			case "Lurah":
				return Main.find({status:"Lurah"});
		}
	}
});

Template.tasktodo.events({
	'click .btn-info': function(){
		var mainid = this._id;
		var suket = this.jenisSuket;
		switch(suket){
			case "Keterangan Kelahiran":
				var kelahiran = Kelahiran.findOne({mainId:mainid})
				$('#page-wrapper').html("");
				UI.insert(UI.renderWithData(Template.kelahirandetail, kelahiran), $('#page-wrapper').get(0));
				break;
		}
	}
})