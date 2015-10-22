Template.appsuketumum.helpers({
	dfts: function(){
		return Kelahiran.find({}, {sort: {tanggalPembuatan: -1}});
	}
});