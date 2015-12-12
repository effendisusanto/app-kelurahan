
Template.login.onRendered(function() {
    this.$('#formLogin').validator();
});

Template.login.events({
    'submit #formLogin': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
	    	if(error){
                alert(error.reason)
	    	} else {
	        	var groupLogin = Meteor.user().profile.groupLogin
                switch(groupLogin){
                    case "Administrator":
                        Router.go("home")
                    default:
                        Router.go("tasktodo")
                }
	    	}
		});
    }
});
