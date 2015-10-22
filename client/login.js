Template.login.events({
    'submit #formLogin': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
	    	if(error){
	        	console.log(error.reason);
	    	} else {
	        	Router.go("/");
	    	}
		});
    },
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
