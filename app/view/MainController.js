Ext.define('Fiddle.view.MainController', {
    extend : 'Ext.app.ViewController',
    alias  : 'controller.fiddle-main',

    requires : [
        'Ext.MessageBox'
    ],

    removeUser : function (grid, context) {
        var record = context.record;

        Ext.Msg.confirm(
            'Delete User',
            'Are you sure you want to delete the user "' + record.get('firstName') + ' ' + record.get('lastName') + '"?',
            this.doRemoveUser.bind(this, record)
        );
    },

    doRemoveUser : function (record, btn) {
        if (btn === 'yes') {
            var store = this.getStore('userStore');

            store.remove(record);
        }
    }
});