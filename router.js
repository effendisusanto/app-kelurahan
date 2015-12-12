Router.route('/', {
    name: "home",
    template: "appsukethome",
    layoutTemplate: "index",
    yieldTemplates: {
        'navigation': {
            to: 'nav'
        },
        'appsuketmodal': {
            to: 'modal'
        }
    }
});

Router.onBeforeAction(function () {
    if (!Meteor.userId() && !Meteor.loggingIn()) {
        Router.go("home")
    } else {
        this.next()
    }
}, {
	// semua link yang private ada disini
    only:['tasktodo', 'kelahiranview']
});

Router.route('/umum', {
    template: "appsuketumum"
});

Router.route('/tasktodo', {
    name: "tasktodo",
    template: "tasktodo",
    layoutTemplate: "index_login",
    yieldTemplates: {
        'navigation_login': {
            to: 'nav'
        }
    }
});

Router.route('/login', {
    name: "login",
    template: "login"
});


// Daftar routing surat keterangan

Router.route('/suket/kelahiran', {
    name: "kelahiran",
    template: "kelahiran",
    layoutTemplate: "index",
    yieldTemplates: {
        'navigation': {
            to: 'nav'
        },
        'appsuketmodal': {
            to: 'modal'
        }
    }
});

Router.route('/suket/kelahiran/view/:_id', {
	name:'kelahiranview',
    template: 'kelahirandetailview',
    layoutTemplate: "index_login",
    yieldTemplates: {
        'navigation_login': {
            to: 'nav'
        },
    },
    data: function() {
        var mainid = this.params._id;
        return Kelahiran.findOne({
            mainId: mainid
        })
    }
});

Router.route('/suket/kematian', {
    name: "kematian",
    template: "kematian",
    layoutTemplate: "index",
    yieldTemplates: {
        'navigation': {
            to: 'nav'
        },
        'appsuketmodal': {
            to: 'modal'
        }
    }
});
Router.route('/suket/miskin', {
    name: "miskin",
    template: "tmp_add_miskin",
    layoutTemplate: "index",
    yieldTemplates: {
        'navigation': {
            to: 'nav'
        },
        'appsuketmodal': {
            to: 'modal'
        }
    }
});
Router.route('/suket/usaha', {
    name: "usaha",
    template: "usaha",
    layoutTemplate: "index",
    yieldTemplates: {
        'navigation': {
            to: 'nav'
        },
        'appsuketmodal': {
            to: 'modal'
        }
    }
});

Router.route('/suket/kehilangan', {
    name: "kehilangan",
    template: "kehilangan",
    layoutTemplate: "index",
    yieldTemplates: {
        'navigation': {
            to: 'nav'
        },
        'appsuketmodal': {
            to: 'modal'
        }
    }
});

Router.route('/suket/skck', {
    name: "skck",
    template: "skck",
    layoutTemplate: "index",
    yieldTemplates: {
        'navigation': {
            to: 'nav'
        },
        'appsuketmodal': {
            to: 'modal'
        }
    }
});

// Daftar routing surat ijin
Router.route('/ijin/orangtua', {
    name: "ijin_orangtua",
    template: "ijin_orangtua",
    layoutTemplate: "index",
    yieldTemplates: {
        'navigation': {
            to: 'nav'
        },
        'appsuketmodal': {
            to: 'modal'
        }
    }
});

Router.route('/ijin/tidakmasukkerja', {
    name: "ijin_tidakmasukkerja",
    template: "ijin_tidakmasukkerja",
    layoutTemplate: "index",
    yieldTemplates: {
        'navigation': {
            to: 'nav'
        },
        'appsuketmodal': {
            to: 'modal'
        }
    }
});

Router.route('/ijin/tidakmasuk', {
    name: "ijin_tidakmasuk",
    template: "ijin_tidakmasuk",
    layoutTemplate: "index",
    yieldTemplates: {
        'navigation': {
            to: 'nav'
        },
        'appsuketmodal': {
            to: 'modal'
        }
    }
});

// Router.route('/ktp/daftar_ktp', {
//   template: "ktp_daftar"
// })
// Router.route('/appsuket/miskin', {
//   template: "tmp_add_miskin"
// })
