Router.route('/', {
    template: "home"
});
Router.route('/appsuket', {
    template: "appsuket"
});
Router.route('/appsuket/umum', {
  template: "appsuketumum"
})
Router.route('/appsuket/staff', {
  template: "appsuketstaff"
})
Router.route('/appsuket/kasi', {
  template: "appsuketkasi"
})
Router.route('/appsuket/cetak', {
  template: "appsuketstaffcetak"
})

Router.route('/x11A/register',{
  template: "register"
})