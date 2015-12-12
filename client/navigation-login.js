Template.navigation_login.onRendered(function() {
	this.$("#side-menu").metisMenu();
})

Template.navigation_login.events({
	'click #Logout': function(event){
        event.preventDefault();
        Meteor.logout();
        pause()
        Router.go("home")
    }
})