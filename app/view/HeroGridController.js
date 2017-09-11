Ext.define('SuperHeroes.view.HeroGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.herogridcontroller',

    onAdd: function () {
        const form = this.lookupReference('hero_add_form')
        const store = this.getViewModel().getStore('heroStore')
        let values, model

        if (form.isValid()) {
            values = form.getValues()
            model = this.generateModel(values)
            store.add(model)
            store.sync()
        }
    },
    generateModel: function (values) {
        if (values)
            return Ext.create('SuperHeroes.model.Hero', values)
        else
            return null
    },

    onUpdate: function (editor, edit) {
        edit.store.sync() // You would want to return the record you just saved
    },

    onDelete: function (t, rowid, colid, item, evt, rec) {
        const store = rec.store

        store.remove(rec)
        store.sync()
    }
});
