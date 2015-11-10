Meteor.subscribe("miskin");

Template.tmp_add_miskin.events({
    "click .submit": function(){
        no_surat   =  $("#no_surat").val(),
        nm_miskin  =  $("#nm_miskin").val(),
        tl_miskin  =  $("#tl_miskin").val(),
        tg_miskin  =  $("#tg_miskin").val(),
        sex_miskin =  $("#sex_miskin").val(),
        pek_miskin =  $("#pek_miskin").val(),
        alm_miskin =  $("#alm_miskin").val(),
        note_untuk =  $("#note_untuk").val()
        Meteor.call("saveMiskin", 
                    no_surat, 
                    nm_miskin,
                    tl_miskin,
                    sex_miskin,
                    pek_miskin,
                    alm_miskin,
                    note_untuk
                    );
    }
})
