
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
                        $('#page-wrapper').html("");
                        UI.insert(UI.render(Template.appsukethome), $('#page-wrapper').get(0));
                        break;
                    case "Staff":
                        Router.go("/appsuket/staff")
                        break;
                    case "Kasi":
                        Router.go("/appsuket/kasi")
                        break;
                    default:
                        Router.go("/")
                        break;
                }
	    	}
		});
    },
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});