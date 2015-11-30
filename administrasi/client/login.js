
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
                        $('#page-wrapper').html("");
                        UI.insert(UI.render(Template.tasktodo), $('#page-wrapper').get(0));
                        break;
                    case "Kasi":
                        $('#page-wrapper').html("");
                        UI.insert(UI.render(Template.tasktodo), $('#page-wrapper').get(0));
                        break;
                    default:
                        $('#page-wrapper').html("");
                        UI.insert(UI.render(Template.tasktodo), $('#page-wrapper').get(0));
                        break;
                }
	    	}
		});
    },
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        $('#page-wrapper').html("");
        UI.insert(UI.render(Template.appsukethome), $('#page-wrapper').get(0));
        return Router.go("/");
    }
});
