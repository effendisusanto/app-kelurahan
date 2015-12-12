Template.register.onRendered(function() {
    this.$('#formRegister').validator();
    this.$('.selectpicker').selectpicker();
});

Template.register.events({
    'change input[type="file"]': function(event, template) {
        var reader = new FileReader();
        var file = template.find('#profilePicture').files[0]; // get the file
        reader.onloadend = function(event) {
            template.find('#preview').src = event.target.result;
            Session.set("dataUrl", event.target.result);
        }
        reader.readAsDataURL(file);
    },
    'submit form': function(event, template) {
        event.preventDefault();
        var email = $('#email').val();
        var password = $('#inputPassword').val();
        var namaDepan = $('#namaDepan').val();
        var namaBelakang = $("#namaBelakang").val();
        var gelar = $("#gelar").val();
        var pangkat = $("#pangkat").val();
        var nip = $("#nip").val();
        var groupLogin = $("#loginGroup").val();
        var dataUrl = Session.get("dataUrl");
        Accounts.createUser({
                email: email,
                password: password,
                profile: {
                    namaDepan: namaDepan,
                    namaBelakang: namaBelakang,
                    gelar: gelar,
                    pangkat: pangkat,
                    nip: nip,
                    groupLogin: groupLogin,
                    picture: dataUrl
                }
            },
            function(error) {
                if (error) {
                    console.log(error.reason); // Output error if registration fails
                } else {
                    Router.go("home"); // Redirect user if registration succeeds
                }
            });
    }
});
