Ext.define('SuperHeroes.view.HeroGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.herogridcontroller',

    onAdd: function () {
        var form = this.lookupReference('name_form'),
            store = this.getViewModel().getStore('Names'), // this isnt necessary i am just doing to show it being added to the grid
            values, model;

        if (form.isValid()) {
            values = form.getValues();
            model = Ext.create('SuperHeroes.model.User', values);
            store.add(model);
            store.sync();
        }
    },

    onUpdate: function (editor, edit) {
        edit.store.sync(); // You would want to return the record you just saved
    },

    onDelete: function (t, rowid, colid, item, evt, rec) {
        var store = rec.store;

        store.remove(rec);
        store.sync();
    }
});
