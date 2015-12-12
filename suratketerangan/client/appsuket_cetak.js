Meteor.subscribe("mainTodo")

Template.appsuketcetak.helpers({
	dfts: function(){
		return Main.find({$or:[{status:"Cetak"}, {status:"Sudah Dicetak"}]});
	}
});

Template.appsuketcetak.events({
	'click .btn-info': function(){
		var id = this._id;
		var suket = this.jenisSuket;
		switch(suket){
			case "Keterangan Kelahiran":
			Router.go("/cetak/kelahiran/" + id);
		}
	}
});
