Ext.define('Fiddle.view.Form', {
    extend : 'Ext.form.Panel',
    xtype  : 'fiddle-form',

    requires : [
        'Ext.field.Email'
    ],

    items : [
        {
            xtype    : 'textfield',
            required : true,
            name     : 'firstName',
            label    : 'First Name',
            bind     : '{users.selection.firstName}'
        },
        {
            xtype    : 'textfield',
            required : true,
            name     : 'lastName',
            label    : 'Last Name',
            bind     : '{users.selection.lastName}'
        },
        {
            xtype    : 'emailfield',
            required : true,
            name     : 'email',
            label    : 'Email',
            bind     : '{users.selection.email}'
        }
    ]
});