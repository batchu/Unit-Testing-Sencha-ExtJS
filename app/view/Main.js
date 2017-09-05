Ext.define('Fiddle.view.Main', {
    extend : 'Ext.Container',
    xtype  : 'fiddle-main',

    requires : [
        'Fiddle.view.Form',
        'Fiddle.view.Grid',
        'Fiddle.view.MainController',
        'Fiddle.view.MainModel'
    ],

    controller : 'fiddle-main',
    layout     : 'hbox',

    viewModel : {
        type : 'fiddle-main'
    },

    items : [
        {
            xclass    : 'Fiddle.view.Grid',
            reference : 'users',
            flex      : 1,
            title     : 'Users',
            bind      : '{userStore}'
        },
        {
            xclass : 'Fiddle.view.Form',
            width  : 200,
            hidden : true, // default here so it doesn't hide after render
            bind   : {
                hidden : '{!users.selection}'
            }
        }
    ]
});