var klaroI18nConfig = {
    cookieName: 'klaro-i18n',
    elementID : 'i18n',
    lang: 'en',
    noNotice: true,
    privacyPolicy: '/#privacy',
    poweredBy : 'https://github.com/DPKit/klaro/blob/master/dist/configs/i18n.js',
    appDefault: true,
    translations : {
        // these values will overwrite the defaults. For a full list, have a look
        // at the `translations.yml` file in the `src` directory of this repo:
        // https://github.com/DPKit/klaro/blob/master/src/translations.yml
        consentModal : {
            title : {
                en : 'This is the title of the consent modal',
                de : 'Dies ist der Titel des Zustimmungs-Dialogs',
            },
            description : {
                en : 'This is the description of the consent modal.',
                de : 'Dies ist die Beschreibung des Zustimmungs-Dialogs.', 
            },
            privacyPolicy : {
                text : {
                    en : 'This is the text with a link to your {privacyPolicy}.',
                    de : 'Dies ist der Text mit einem Link zu Ihrer {privacyPolicy}.',    
                },
                name : {
                    en : 'privacy policy (the name)',
                    de : 'Datenschutzerklärung (Name)',
                },
            },
        },
        poweredBy : {
            en : 'Click here to see the config',
            de : 'Hier klicken um die Konfiguration zu sehen',
        },
        ok : {
            en : 'Wohoo!',
            de : 'Los geht\'s!',
        },
        purposes: {
            analytics : {
                en : 'Analytics',
                de : 'Besucher-Statistiken',
            },
            security : {
                de : 'Sicherheit',
                en : 'Security',
            },
            livechat : {
                de : 'Livechat',
                en : 'Live Chat',
            },
            advertising : {
                de : 'Anzeigen von Werbung',
                en : 'Advertising',
            },
        },    
        googleAnalytics : {
            description : {
                de : 'Sammeln von Besucherstatistiken',
                en : 'Collecting of visitor statistics',
            },
        },
        mouseflow : {
            description : {
                de : 'Echtzeit-Benutzeranalyse',
                en : 'Real-Time user analytics',
            },            
        },
    },
    apps : [
        {
            name : 'googleAnalytics',
            default: true,
            title : 'Google Analytics (just an example)',
            purposes : ['analytics'],            
            cookies : [/^ga_/i],
            callback : function(consent, app){
                //this is an example callback function...
            },
        },
        {
            name : 'mouseflow',
            title : 'Mouseflow',
            cookies : [/mouseflow/i],
            purposes : ['analytics']
        },
    ],
}