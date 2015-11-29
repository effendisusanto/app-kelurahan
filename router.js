// Router.route('/', {
//     template: "home"
// });
Router.route('/', {
    template: "index"
});
Router.route('/umum', {
  template: "appsuketumum"
});
Router.route('/todo', {
  template: "tasktodo"
});
// Router.route('/seklur', {
//   template: "appsuketkasi"
// })
// Router.route('/cetak', {
//   template: "appsuketstaffcetak"
// })
// Router.route('/x11A/register',{
//   template: "register"
// })
Router.route('/ktp/daftar_ktp', {
  template: "ktp_daftar"
})
Router.route('/appsuket/miskin', {
  template: "tmp_add_miskin"
})