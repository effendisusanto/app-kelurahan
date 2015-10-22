Meteor.publish("daftar", function(){
	return Kelahiran.find({});
})