Meteor.publish("main", function(){
	return Main.find({});
});

Meteor.publish("kelahiran", function(){
	return Kelahiran.find({});
});

Meteor.publish("komentar", function(){
	return Komentar.find({});
});
