 Template.appsuket.onRendered(function() {
    this.$('.selectpicker').selectpicker();
    this.$('#hariLahirday').datetimepicker({
      format: 'dddd',
      locale: moment.locale('id')
    });
    this.$('#tglLahirdate').datetimepicker({
      format: 'D MMMM YYYY',
      locale: moment.locale('id')
    });
    this.$('#jamLahirjam').datetimepicker({
      format: 'HH.mm'
    });
  });
  
  Template.appsuket.events({
    'click #suratKelahiran': function(){
        var namaAnak = $("#namaAnak").val()
        var tanggalLahir = $("#tglLahir").val() 
        var hariLahir = $("#hariLahir").val()
        var jamLahir = $("#jamLahir").val()
        var jenisKelamin = $("#jenisKelamin option:selected").text()
        var tempatLahir = $("#tempatLahir").val()
        
        var namaIbu = $("#namaIbu").val()
        var nikIbu = $("#nikIbu").val()
        var umurIbu = $("#umurIbu").val()
        var pekerjaanIbu = $("#pekerjaanIbu").val()
        var alamatIbu = $("#alamatIbu").val()
        
        var namaAyah = $("#namaAyah").val()
        var nikAyah = $("#nikAyah").val()
        var umurAyah = $("#umurAyah").val()
        var pekerjaanAyah = $("#pekerjaanAyah").val()
        var alamatAyah = $("#alamatAyah").val()
        
        var namaPelapor = $("#namaPelapor").val()
        var nikPelapor = $("#nikPelapor").val()
        var umurPelapor = $("#umurPelapor").val()
        var pekerjaanPelapor = $("#pekerjaanPelapor").val()
        var alamatPelapor = $("#alamatPelapor").val()
        var hubPelapor = $("#hubPelapor option:selected").text()
        var status = "Staff Kelurahan"
        
        Meteor.call("saveSuketKelahiran", "Keterangan Kelahiran" ,namaAnak, tanggalLahir, hariLahir, jamLahir, jenisKelamin, tempatLahir,
        namaIbu, nikIbu, umurIbu, pekerjaanIbu, alamatIbu,
        namaAyah, nikAyah, umurAyah, pekerjaanAyah, alamatAyah,
        namaPelapor, nikPelapor, umurPelapor, pekerjaanPelapor, alamatPelapor, hubPelapor, status, function(error, result){
        if(error){
          console.log(error.reason);
          return;
        }
        alert("Permohonan Surat Keterangan Kelahiran anda sudah di terima");
        //Router.go("/appsuket/download/" + result);
        });
    }
});