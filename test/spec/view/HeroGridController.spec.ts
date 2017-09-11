describe("Tests for HeroGridController", function () {
    let ctrl
    let record
    let cmp
    let formValues
    beforeEach(function () {
        Ext.isDomReady = true
        this.record = Ext.create('SuperHeroes.model.Hero', {
            id: 1, first_name: "John", last_name: "Doe"
        })
        this.cmp = Ext.create('SuperHeroes.view.HeroGrid')
        this.ctrl = this.cmp.getController()

         this.formValues = {
            "first_name": "Tony",
            "last_name": "Stark"
        }

    });

    it('onAdd should add valid form values to the store', function(){

        //Since we are going to test the feature to add a new Super Hero, let's setup the sample input data


        const form = this.cmp.lookupReference('hero_add_form')
        const store = this.cmp.getViewModel().getStore('heroStore')
        form.getForm().setValues(this.formValues)
        const model = Ext.create('SuperHeroes.model.Hero', this.formValues);

        spyOn(store,"add")
        spyOn(store,"sync")
        spyOn(this.ctrl, "generateModel").and.returnValue(model)


        this.ctrl.onAdd()

        expect(store.sync).toHaveBeenCalled()
        expect(store.add).toHaveBeenCalledWith(model)
    })

    it('onAdd should not add invalid form values to the store', function(){

        //Since we are going to test the feature to add a new Super Hero, let's setup the sample input data
        const invalidFormValues = {
            "first_name": null,
            "last_name": "Stark"
        }

        const form = this.cmp.lookupReference('hero_add_form')
        const store = this.cmp.getViewModel().getStore('heroStore')
        form.getForm().setValues(invalidFormValues)
        const model = Ext.create('SuperHeroes.model.Hero', this.invalidFormValues);

        spyOn(store,"add")
        spyOn(store,"sync")
        spyOn(this.ctrl, "generateModel").and.returnValue(model)


        this.ctrl.onAdd()

        expect(store.sync).not.toHaveBeenCalled()
        expect(store.add).not.toHaveBeenCalledWith(model)
    })

    it("generateModel should return a valid Hero Model when valid form values are passed in",function(){

        const resp = this.ctrl.generateModel(this.formValues)
        expect(resp.id).toContain("SuperHeroes.model.Hero-")
        expect(resp.data.first_name).toEqual("Tony")
        expect(resp.data.last_name).toEqual("Stark")

    })

    it("generateModel should return return null when invalid form values are passed in",function(){

        const resp = this.ctrl.generateModel(null)

        expect(resp).toEqual(null)

    })

    it('onUpdate should call store.sync', function(){

        spyOn(this.cmp.store,"sync")

        this.ctrl.onUpdate(null, this.cmp)

        expect(this.cmp.store.sync).toHaveBeenCalled()
    })


    it('onDelete should delete the record and call store.sync', function(){

        spyOn(this.cmp.store,"sync")
        spyOn(this.cmp.store,"remove")

        this.ctrl.onDelete(null,null,null,null,null, this.cmp)

        expect(this.cmp.store.sync).toHaveBeenCalled()
        expect(this.cmp.store.remove).toHaveBeenCalledWith(this.cmp)
    })

})
