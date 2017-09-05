Ext.define('Fiddle.view.MainModel', {
    extend : 'Ext.app.ViewModel',
    alias  : 'viewmodel.fiddle-main',

    stores : {
        userStore : {
            autoLoad : true,
            autoSync : true,
            proxy    : {
                type   : 'ajax',
                api    : {
                    read    : 'read.json',
                    update  : 'update.json',
                    destroy : 'destroy.json'
                },
                reader : {
                    type         : 'json',
                    rootProperty : 'data'
                }
            }
        }
    }
});