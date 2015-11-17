Template.ijin_tidakmasukkerja.onRendered(function() {
    this.$('#formTidakMasukKerja').validator();
    this.$('.selectpicker').selectpicker();
    this.$('#tglLahirPicker').datetimepicker({
      format: 'dddd',
      locale: moment.locale('id'),
      ignoreReadonly: true
    });
    this.$('#datepickerdari').datetimepicker({
      format: 'D MMMM YYYY',
      locale: moment.locale('id'),
      ignoreReadonly: true
    });
    this.$('#datepickerhingga').datetimepicker({
      format: 'D MMMM YYYY',
      locale: moment.locale('id'),
      ignoreReadonly: true,
      useCurrent: false
    });
  });
  
Template.ijin_tidakmasukkerja.events({
    'dp.change #datepickerdari': function (e) {
        $('#datepickerhingga').data("DateTimePicker").minDate(e.date);
    },
    'dp.change #datepickerhingga': function (e) {
        $('#datepickerdari').data("DateTimePicker").maxDate(e.date);
    }
})