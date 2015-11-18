Template.ijin_tidakmasuk.onRendered(function() {
    this.$('#formTidakMasuk').validator();
    this.$('#tglLahirPicker').datetimepicker({
      format: 'D MMMM YYYY',
      locale: moment.locale('id'),
      ignoreReadonly: true
    });
    this.$('#tgltidakmasukdatepicker').datetimepicker({
      format: 'D MMMM YYYY',
      locale: moment.locale('id'),
      ignoreReadonly: true
    });
  });