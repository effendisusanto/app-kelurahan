Meteor.subscribe("main")
Meteor.subscribe("kelahiran")
Meteor.subscribe("komentar")


Template.appsuketstaff.onRendered(function(){
	this.$('.selectpicker').selectpicker();
});

Template.appsuketstaff.helpers({
	dfts: function(){
		return Main.find({status:"Staff Kelurahan"});
	}
});

Template.appsuketstaff.events({
	'click .btn-info': function(){
		var mainid = this._id
		var suket = this.jenisSuket
		switch(suket){
			case "Keterangan Kelahiran":
				getKelahiran(mainid);
				$('#modaldetail').modal('show');
				break;
		}
	},
	'click #approvalStaf': function(){
		var komentarStaff = $("#komentarStaff").val();
		var id = $("#theid").val()
		var date = new Date();
		var status = "Sekertaris Lurah";
		var result = Meteor.call("approval", id, moment(date).format("dddd, D MMMM YYYY, h:mm"), status, komentarStaff, "");
        $('#modaldetail').modal('hide')
	}
})