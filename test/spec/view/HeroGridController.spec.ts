describe("Tests for HeroGridController", function () {
    let ctrl
    let record
    let cmp
    beforeEach(function () {
        Ext.isDomReady = true
        this.record = Ext.create('SuperHeroes.model.Hero', {
            id: 1, first_name: "John", last_name: "Doe"
        })
        this.cmp = Ext.create('SuperHeroes.view.HeroGrid')
        this.ctrl = this.cmp.getController()


    });

    it('onAdd should add the form values to the store', function(){

        //Since we are going to test the feature to add a new Super Hero, let's setup the sample input data
        const formValues = {
            "first_name": "Tony",
            "last_name": "Stark"
        }

        const form = this.cmp.lookupReference('hero_add_form')
        const store = this.cmp.getViewModel().getStore('heroStore')
        form.getForm().setValues(formValues)
        const model = Ext.create('SuperHeroes.model.Hero', formValues);

        spyOn(store,"add")
        spyOn(store,"sync")
        spyOn(this.ctrl, "generateModel").and.returnValue(model)


        this.ctrl.onAdd()

        expect(store.sync).toHaveBeenCalled()
        expect(store.add).toHaveBeenCalledWith(model)
    })


})
