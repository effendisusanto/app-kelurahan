Template.appsuketnavigation.onRendered(function() {
	this.$("#side-menu").metisMenu();
})

Template.appsuketnavigation.events({
	'click #home': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.appsukethome), $('#page-wrapper').get(0));
	},
	'click #kelahiran': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.kelahiran), $('#page-wrapper').get(0));
	},
	'click #kematian': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.kematian), $('#page-wrapper').get(0));
	},
	'click #miskin': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.tmp_add_miskin), $('#page-wrapper').get(0));
	},
	'click #usaha': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.usaha), $('#page-wrapper').get(0));
	},
	'click #kehilangan': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.kehilangan), $('#page-wrapper').get(0));
	},
	'click #Login': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.login), $('#page-wrapper').get(0));
	},
	'click #Register': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.register), $('#page-wrapper').get(0));
	},
	'click #Logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
})