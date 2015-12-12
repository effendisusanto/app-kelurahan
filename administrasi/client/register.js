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
        if (dataUrl == "" || dataUrl == undefined){
            dataUrl = "data:image/jpeg;base64,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"
        }
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
