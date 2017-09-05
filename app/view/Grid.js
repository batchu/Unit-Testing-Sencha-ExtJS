Ext.define('Fiddle.view.Grid', {
    extend : 'Ext.grid.Grid',
    xtype  : 'fiddle-grid',

    columns : [
        {
            text      : 'First Name',
            flex      : 1,
            dataIndex : 'firstName'
        },
        {
            text      : 'Last Name',
            flex      : 1,
            dataIndex : 'lastName'
        },
        {
            text      : 'Email',
            flex      : 1,
            dataIndex : 'email',
            cell      : {
                tools  : {
                    close : {
                        handler : 'removeUser',
                        tooltip : 'Delete User',
                        zone    : 'end'
                    }
                }
            }
        }
    ]
});