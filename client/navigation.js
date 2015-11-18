Template.navigation.onRendered(function() {
	this.$("#side-menu").metisMenu();
})

Template.navigation.events({
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
	'click #skck': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.skck), $('#page-wrapper').get(0));
	},
	'click #tdkkerja': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.ijin_tidakmasukkerja), $('#page-wrapper').get(0));
	},
	'click #tdkmasuk': function(){
		$('#page-wrapper').html("");
		return UI.insert(UI.render(Template.ijin_tidakmasuk), $('#page-wrapper').get(0));
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