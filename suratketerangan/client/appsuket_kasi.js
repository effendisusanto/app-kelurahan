Meteor.subscribe("main")
Meteor.subscribe("kelahiran")
Meteor.subscribe("komentar")

Template.appsuketkasi.onRendered(function(){
	this.$('.selectpicker').selectpicker();
});

Template.appsuketkasi.helpers({
	dfts: function(){
		return Main.find({status:"Sekertaris Lurah"});
	}
});

Template.appsuketkasi.events({
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

	'click #approvalKasi': function(){
		var komentarKasi = $("#komentarKasi").val();
		var id = $("#theid").val()
		var date = new Date();
		var status = "Cetak";
		var keterangan = $('#keterangan').val();
		Meteor.call("approval", id, moment(date).format("dddd, D MMMM YYYY, h:mm"), status, komentarKasi, "");
		$('#modaldetail').modal('hide')
	}
})