describe("Tests for Hero Grid Component", function(){


    let cmp

    beforeEach(function () {
        Ext.isDomReady = true
        this.cmp = Ext.create('SuperHeroes.view.HeroGrid')
    })

    it("Component height should be a fixed 500", function(){
        expect(this.cmp.height).toEqual(500)
    })

     it("Component title should be 'Super Heroes Grid'", function(){
        expect(this.cmp.title).toEqual("Super Heroes Grid")
    })

    it("Grid's first column must be first_name", function(){
        expect(this.cmp.columns[0].dataIndex).toEqual("first_name")
    })


})