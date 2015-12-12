Template.kematian.onRendered(function() {
    this.$('#formKematian').validator();
    this.$('.selectpicker').selectpicker();
    this.$('#tglLahirAlm').datetimepicker({
      format: 'D MMMM YYYY',
      locale: moment.locale('id'),
      ignoreReadonly: true
    });
    this.$('#tglKematianClass').datetimepicker({
      format: 'D MMMM YYYY',
      locale: moment.locale('id'),
      ignoreReadonly: true
    });
  });