Meteor.publish("daftar", function(){
	return Kelahiran.find({});
})

Meteor.publish("ktp", function(){
    return ktp.find({});
})