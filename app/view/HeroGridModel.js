Ext.define('SuperHeroes.view.HeroGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.herogridmodel',

    requires: [
        'SuperHeroes.model.Hero'
    ],

    stores: {
        heroStore: {
            autoLoad: true,
            model: 'SuperHeroes.model.Hero'
        }
    }
});
