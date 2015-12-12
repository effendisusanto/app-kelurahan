Template.skck.onRendered(function() {
    this.$('#formSkck').validator();
    this.$('.selectpicker').selectpicker();
    this.$('#tg_miskin_grp').datetimepicker({
      format: 'D MMMM YYYY',
      locale: moment.locale('id'),
      ignoreReadonly: true
    });
  });
