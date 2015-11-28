getKelahiran = function(mainid){
	var kelahiran = Kelahiran.findOne({mainId:mainid});
	$("#theid").val(mainid);
	$("#namaAnak").val(kelahiran.namaAnak);
	$("#tglLahir").val(kelahiran.tanggalLahir);
	$("#hariLahir").val(kelahiran.hariLahir);
	$("#jamLahir").val(kelahiran.jamLahir);
	$("#jenisKelamin option[text="+kelahiran.jenisKelamin+"]").attr('selected','selected');
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
}