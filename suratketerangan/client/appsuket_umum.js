Template.appsuketumum.helpers({
	dfts: function(){
		return Main.find({}, {sort: {tanggalPembuatan: -1}});
	}
});