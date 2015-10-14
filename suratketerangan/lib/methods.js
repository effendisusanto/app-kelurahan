Meteor.methods({
    'saveSuketKelahiran': function saveSuketKelahiran(jenisSuket, namaAnak, tanggalLahir, hariLahir, jamLahir, jenisKelamin, tempatLahir, 
    namaIbu, nikIbu, umurIbu, pekerjaanIbu, alamatIbu, 
    namaAyah, nikAyah, umurAyah, pekerjaanAyah, alamatAyah, 
    namaPelapor, nikPelapor, umurPelapor, pekerjaanPelapor, alamatPelapor, hubPelapor, status, keterangan){
      //Router.go("/appsuket/download");
      var date = new Date();
      return Kelahiran.insert({
            jenisSuket: jenisSuket,
            namaAnak: namaAnak,
            tanggalLahir: tanggalLahir,
            hariLahir: hariLahir,
            jamLahir: jamLahir,
            jenisKelamin: jenisKelamin,
            tempatLahir: tempatLahir,
            namaIbu: namaIbu,
            nikIbu: nikIbu,
            umurIbu: umurIbu,
            pekerjaanIbu: pekerjaanIbu,
            alamatIbu: alamatIbu,
            namaAyah: namaAyah,
            nikAyah: nikAyah,
            umurAyah: umurAyah,
            pekerjaanAyah: pekerjaanAyah,
            alamatAyah: alamatAyah,
            namaPelapor: namaPelapor,
            nikPelapor: nikPelapor,
            umurPelapor: umurPelapor,
            pekerjaanPelapor: pekerjaanPelapor,
            alamatPelapor: alamatPelapor,
            hubPelapor: hubPelapor,
            tanggalPembuatan: moment(date).format("dddd, D MMMM YYYY, h:mm"),
            tanggalUpdate: "",
            tanggalCetak: "",
            status: status,
            keterangan: keterangan
        });
    },
    'deleteSuketKelahiran': function deleteSuketKelahiran(id){
      Kelahiran.remove({_id:id});
    },
    'viewSuketKelahiran': function viewSuketKelahiran(id){
      Kelahiran.find({ _id:id })
    },
    'editSuketKelahiran': function editSuketKelahiran(id, namaAnak, tanggalLahir, hariLahir, jamLahir, jenisKelamin, tempatLahir, 
    namaIbu, nikIbu, umurIbu, pekerjaanIbu, alamatIbu, 
    namaAyah, nikAyah, umurAyah, pekerjaanAyah, alamatAyah, 
    namaPelapor, nikPelapor, umurPelapor, pekerjaanPelapor, alamatPelapor, hubPelapor, tglUpdate, keterangan){
      Kelahiran.update(
        {
          _id : id
        }, {$set:
        {
          namaAnak: namaAnak,
          tanggalLahir: tanggalLahir,
          hariLahir: hariLahir,
          jamLahir: jamLahir,
          jenisKelamin: jenisKelamin,
          tempatLahir: tempatLahir,
          namaIbu: namaIbu,
          nikIbu: nikIbu,
          umurIbu: umurIbu,
          pekerjaanIbu: pekerjaanIbu,
          alamatIbu: alamatIbu,
          namaAyah: namaAyah,
          nikAyah: nikAyah,
          umurAyah: umurAyah,
          pekerjaanAyah: pekerjaanAyah,
          alamatAyah: alamatAyah,
          namaPelapor: namaPelapor,
          nikPelapor: nikPelapor,
          umurPelapor: umurPelapor,
          pekerjaanPelapor: pekerjaanPelapor,
          alamatPelapor: alamatPelapor,
          hubPelapor: hubPelapor,
          tanggalUpdate: tglUpdate,
          keterangan: keterangan
        }}
      );
    },
    'editStatusSuketKelahiran': function editStatusSuketKelahiran(id, tglUpdate, status){
      Kelahiran.update(
        {
          _id:id
        }, {$set:
        {
          tanggalUpdate:tglUpdate,
          status:status
        }}
      );
    },
    'editTglCetakSuketKelahiran': function editTglCetakSuketKelahiran(id, tglUpdate, tglCetak, status){
      Kelahiran.update({_id:id},{$set:{
        tanggalUpdate:tglUpdate,
        tanggalCetak:tglCetak,
        status:status
      }});
    }
  });