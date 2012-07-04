Ext.define('Todo.view.BottomBar', {
    extend:'Ext.toolbar.Toolbar',
    requires:['Ext.button.Button'],
    alias:'widget.todo_bottombar',
    cls:'todo-app-bbar',
    hidden:true,
    height:33,
    items:[
        {
            xtype:'box',
            itemId:'uncompleted',
            tpl:Ext.create('Ext.Template', '<strong>{count:plural("item")}</strong> left.'),
            data:{count:0}
        },
        '->',
        {
            xtype:'box',
            itemId:'filters',
            autoEl:{
                tag:'div',
                cls:'filters',
                children:[
                    {
                        tag:'a',
                        cls:'selected',
                        href:'#/',
                        html:'All'
                    },
                    {
                        tag:'a',
                        href:'#/active',
                        html:'Active'
                    },
                    {
                        tag:'a',
                        href:'#/completed',
                        html:'Completed'
                    }
                ]
            }
        },
        '->',
        {
            textTpl:Ext.create('Ext.Template', 'Clear completed ({count})'),
            hidden:true,
            itemId:'completed'
        }
    ]
});
