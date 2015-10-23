Template.register.onRendered(function() {
    this.$('.register').validator();
    this.$('.selectpicker').selectpicker();
});


Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('#email').val();
        var password = $('#inputPassword').val();
        var namaDepan = $('#namaDepan').val();
        var namaBelakang = $("#namaBelakang").val();
        var gelar = $("#gelar").val();
        var pangkat = $("#pangkat").val();
        var nip = $("#nip").val();
        var groupLogin = $("#loginGroup").val();
        Accounts.createUser({
            email: email,
            password: password,
            profile:{
                namaDepan: namaDepan,
                namaBelakang: namaBelakang,
                gelar: gelar,
                pangkat: pangkat,
                nip: nip,
                groupLogin: groupLogin
                }
            }, 
            function(error){
            if(error){
                console.log(error.reason); // Output error if registration fails
            } else {
                Router.go("/"); // Redirect user if registration succeeds
            }
        });
    }
});