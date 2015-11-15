Meteor.methods({
    'saveSuketKelahiran': function(jenisSuket, namaAnak, tanggalLahir, hariLahir, jamLahir, jenisKelamin, tempatLahir, 
    namaIbu, nikIbu, umurIbu, pekerjaanIbu, alamatIbu, 
    namaAyah, nikAyah, umurAyah, pekerjaanAyah, alamatAyah, 
    namaPelapor, nikPelapor, umurPelapor, pekerjaanPelapor, alamatPelapor, hubPelapor, status){
      var date = new Date();
      var mainId
      tx.start('add new surat kelahiran')
      kelahiranId = Kelahiran.insert({
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
            hubPelapor: hubPelapor
        }, , {tx: true, instant: true});
      mainId = Main.insert({
        jenisSuket: jenisSuket,
        namaPelapor: namaPelapor,
        tanggalPembuatan: moment(date).format("dddd, D MMMM YYYY, h:mm"),
        tanggalUpdate: "",
        tanggalCetak: "",
        status: status,
        komentarStaff: "",
        komentarSeklur: "",
        idDetail: kelahiranId
      }, {tx: true, instant: true});
      tx.commit();
      return mainId;
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
    },
    'saveKtp': function(no_ktp, nama){
      ktp.insert({
        "no_ktp" :  no_ktp,
        "name" :  nama
      })
    },
    'saveMiskin': function(no_surat,
                           tg_surat,   
                           nm_miskin,
                           tl_miskin, 
                           tg_miskin,
                           sex_miskin,
                           pek_miskin,
                           alm_miskin,
                           note_untuk,
                           an_untuk,
                           nm_untuk,
                           tl_untuk,
                           tg_untuk,
                           sex_untuk,
                           pek_untuk,
                           alm_untuk,
                           ttd_tg,
                           ttd_nm,
                           ttd_jabat,
                           status,
                           ttd_komentar)
    {
      return  miskin.insert({
          "no_surat" : no_surat,
          "tg_surat" : tg_surat,   
          "nm_miskin": nm_miskin,
          "tl_miskin": tl_miskin, 
          "tg_miskin": tg_miskin,
          "sex_miskin": sex_miskin,
          "pek_miskin": pek_miskin,
          "alm_miskin": alm_miskin,
          "note_untuk" : note_untuk,
          "an_untuk" : an_untuk,
          "nm_untuk" : nm_untuk,
          "tl_untuk" : tl_untuk,
          "tg_untuk" : tg_untuk,
          "sex_untuk" : sex_untuk,
          "pek_untuk": pek_untuk,
          "alm_untuk": alm_untuk,
          "ttd_tg" : ttd_tg,
          "ttd_nm" : ttd_nm,
          "ttd_jabat": ttd_jabat,
          "status": status
        })               
    },
    'deleteMiskin': function (id){
      miskin.remove({_id:id});
    },
    'updateMiskin': function(no_surat,
                           tg_surat,   
                           nm_miskin,
                           tl_miskin, 
                           tg_miskin,
                           sex_miskin,
                           pek_miskin,
                           alm_miskin,
                           note_untuk,
                           an_untuk,
                           nm_untuk,
                           tl_untuk,
                           tg_untuk,
                           sex_untuk,
                           pek_untuk,
                           alm_untuk,
                           ttd_tg,
                           ttd_nm,
                           ttd_jabat,
                           status,
                           ttd_komentar)
    {
        miskin.update(
        {
          _id : id
        }, {$set:
        {
          no_surat : no_surat,
          tg_surat : tg_surat,   
          nm_miskin : nm_miskin,
          tl_miskin : tl_miskin, 
          tg_miskin : tg_miskin,
          sex_miskin : sex_miskin,
          pek_miskin : pek_miskin,
          alm_miskin : alm_miskin,
          note_untuk : note_untuk,
          an_untuk : an_untuk,
          nm_untuk : nm_untuk,
          tl_untuk : tl_untuk,
          tg_untuk : tg_untuk,
          sex_untuk : sex_untuk,
          pek_untuk : pek_untuk,
          alm_untuk : alm_untuk
        }});
    },
     'approvalMiskin': function(id,  
                           ttd_tg,
                           ttd_nm,
                           ttd_jabat,
                           status,
                           ttd_komentar){
      miskin.update(id, 
        { $set:
              {
                ttd_tg:ttd_tg,
                ttd_nm:ttd_nm,
                ttd_jabat:ttd_jabat,
                status:status,
                ttd_komentar: ttd_komentar
              }
        });
    }
    
  });