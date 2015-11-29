Meteor.subscribe("main")
Meteor.subscribe("kelahiran")
Meteor.subscribe("komentar")

Template.tasktodo.helpers({
	dfts: function(){
		return Main.find({});
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