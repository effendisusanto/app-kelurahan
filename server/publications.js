Meteor.publish("main", function(){
	return Main.find({});
});

Meteor.publish("mainTodo", function(){
	if(!this.userId){
		return [];
	}
	var user = Meteor.users.findOne({_id:this.userId});
	var role = user.profile.groupLogin;
	switch(role){
		case "Staff":
			return Main.find({status:"Staff Kelurahan"});
		case "Sekertaris Lurah":
			return Main.find({status:"Sekertaris Lurah"});
		case "Lurah":
			return Main.find({status:"Lurah"});
	}
});

Meteor.publish("kelahiran", function(){
	return Kelahiran.find({});
});

// Meteor.publish("komentar", function(){
// 	return Komentar.find({});
// });
Meteor.publishComposite("komentar", {
	find: function() {
        return Komentar.find({});
    },
    children:[
    	{
            find: function(doc) {
                return Meteor.users.find({_id: doc.userId});
            }
        }
    ]
})