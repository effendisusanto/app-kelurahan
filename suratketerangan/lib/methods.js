Meteor.methods({
    'saveSuketKelahiran': function(jenisSuket, namaAnak, tanggalLahir, hariLahir, jamLahir, jenisKelamin, tempatLahir, 
    namaIbu, nikIbu, umurIbu, pekerjaanIbu, alamatIbu, 
    namaAyah, nikAyah, umurAyah, pekerjaanAyah, alamatAyah, 
    namaPelapor, nikPelapor, umurPelapor, pekerjaanPelapor, alamatPelapor, hubPelapor, status){
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
            keterangan:"",
            komentarStaff:"",
            komentarKasi:""
        });
    },
    'deleteSuketKelahiran': function (id){
      Kelahiran.remove({_id:id});
    },
    'editSuketKelahiran': function(id, namaAnak, tanggalLahir, hariLahir, jamLahir, jenisKelamin, tempatLahir, 
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
    'approvalStaf': function(id, tglUpdate, status, komentarStaff, keterangan){
      Kelahiran.update(id, 
        { $set:
              {
                tanggalUpdate:tglUpdate,
                status:status,
                komentarStaff:komentarStaff,
                keterangan:keterangan
              }
        });
    },
    'approvalKasi': function(id, tglUpdate, status, komentarKasi){
      Kelahiran.update(
        id, {$set:
        {
          tanggalUpdate:tglUpdate,
          status:status,
          komentarKasi:komentarKasi
        }
      });
    },
    'cetakSuket': function(id, tglUpdate, tglCetak, status){
      Kelahiran.update(id,{$set:{
        tanggalUpdate:tglUpdate,
        tanggalCetak:tglCetak,
        status:status
      }});
    }
  });