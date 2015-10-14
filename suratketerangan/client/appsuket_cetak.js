Template.appsuketstaffcetak.helpers({
	dfts: function(){
		return Kelahiran.find({status:"Cetak"});
	}
});

Template.appsuketstaffcetak.events({
	'click .btn-info': function(){
		var id = this._id;
		Router.go("/appsuket/download/" + id);
	}
});
