describe("Tests for HeroGridController", function () {
    let ctrl
    let record
    let cmp
    beforeEach(function () {
        Ext.isDomReady = true;
        this.record = Ext.create('SuperHeroes.model.Hero', {
           1, "John", "Doe"
        })
        this.cmp = Ext.create('SuperHeroes.view.HeroGrid')
        this.ctrl = this.cmp.getController()


    });


    it('positionDateFilterChange should call loadPositions and set the viewModel.data.filterData with the passed in date', function(){
        const newValue = new Date()
        const proxy = Ext.create('Ext.data.proxy.Memory')

        spyOn(this.ctrl, 'somemethod').and.returnValue(proxy)
        
        this.ctrl.onUpdate(this.cmp, newValue, null)

        
    })


})
