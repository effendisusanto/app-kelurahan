// Router.route('/', {
//     template: "home"
// });
Router.route('/', {
    template: "appsuket"
});
Router.route('/umum', {
  template: "appsuketumum"
})
Router.route('/staff', {
  template: "appsuketstaff"
})
Router.route('/kasi', {
  template: "appsuketkasi"
})
Router.route('/cetak', {
  template: "appsuketstaffcetak"
})
Router.route('/x11A/register',{
  template: "register"
})
Router.route('/ktp/daftar_ktp', {
  template: "ktp_daftar"
})
Router.route('/appsuket/miskin', {
  template: "tmp_add_miskin"
})