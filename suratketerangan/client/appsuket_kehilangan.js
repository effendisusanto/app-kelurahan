Template.kehilangan.onRendered(function() {
    this.$('#formKehilangan').validator();
    this.$('.selectpicker').selectpicker();
    this.$('#tglLahirgrp').datetimepicker({
      format: 'D MMMM YYYY',
      locale: moment.locale('id'),
      ignoreReadonly: true
    });
  });