Template.appsuketkasi.onRendered(function(){
	this.$('.selectpicker').selectpicker();
});

Template.appsuketkasi.helpers({
	dfts: function(){
		return Kelahiran.find({status:"Kasi Kelurahan"});
	}
});

Template.appsuketkasi.events({
	'click .btn-info': function(){
		var id = this._id
		var kelahiran = Kelahiran.findOne({_id:id});
		$("#theid").val(id);
		$("#namaAnak").val(kelahiran.namaAnak);
		$("#tglLahir").val(kelahiran.tanggalLahir);
		$("#hariLahir").val(kelahiran.hariLahir);
		$("#jamLahir").val(kelahiran.jamLahir);
		$("#jenisKelamin option:selected").text(kelahiran.jenisKelamin);
		$("#tempatLahir").val(kelahiran.tempatLahir);
		$("#namaIbu").val(kelahiran.namaIbu);
		$("#nikIbu").val(kelahiran.nikIbu);
		$("#umurIbu").val(kelahiran.umurIbu);
		$("#pekerjaanIbu").val(kelahiran.pekerjaanIbu);
		$("#alamatIbu").val(kelahiran.alamatIbu);
		$("#namaAyah").val(kelahiran.namaAyah);
		$("#nikAyah").val(kelahiran.nikAyah);
		$("#umurAyah").val(kelahiran.umurAyah);
		$("#pekerjaanAyah").val(kelahiran.pekerjaanAyah);
		$("#alamatAyah").val(kelahiran.alamatAyah);
		$("#namaPelapor").val(kelahiran.namaPelapor);
		$("#nikPelapor").val(kelahiran.nikPelapor);
		$("#umurPelapor").val(kelahiran.umurPelapor);
		$("#pekerjaanPelapor").val(kelahiran.pekerjaanPelapor);
		$("#alamatPelapor").val(kelahiran.alamatPelapor);
		$("#hubPelapor option:selected").text(kelahiran.hubPelapor);
		$("#komentarStaff").text(kelahiran.komentarStaff);
		$('#modaldetail').modal('show')
	},

	'click #approvalKasi': function(){
		var komentarKasi = $("#komentarKasi").val();
		var id = $("#theid").val()
		var date = new Date();
		var status = "Cetak";
		var keterangan = $('#keterangan').val();
		Meteor.call("approvalKasi", id, moment(date).format("dddd, D MMMM YYYY, h:mm"), status, komentarKasi);
		$('#modaldetail').modal('hide')
	}
})