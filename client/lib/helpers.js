Template.registerHelper("isAdmin", function(admin){
    if (admin == "Administrator"){
        return true;
    }
});

Template.registerHelper("isLurah", function(lurah){
	if(lurah == "Lurah"){
		return true
	}
});

Template.registerHelper("isKasi", function(kasi){
	if(kasi == "Kasi"){
		return true
	}
});

Template.registerHelper("isStaff", function(staff){
	if(staff == "Staff"){
		return true
	}
});