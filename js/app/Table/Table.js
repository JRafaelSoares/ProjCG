class Table extends GraphicalEntity{
    
    constructor(x, y, z){
        super();
        
        this.tableLegList = new Array(4);
        
        this.tableLegList[0] = new TableLeg(-160, 0, -40);
        this.tableLegList[1] = new TableLeg(-160, 0, 40);
        this.tableLegList[2] = new TableLeg(160, 0, 40);
        this.tableLegList[3] = new TableLeg(160, 0, -40);

        this.tableTop = new TableTop(0, this.tableLegList[0].height, 0);
        
        this.add(this.tableTop);
        
        for(var i = 0; i < 4; i++){
            this.add(this.tableLegList[i]);
        }
        
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        
    }

    update(){
        
    }

    toggleWireframe() {
        this.tableTop.toggleWireframe();

        for(var i = 0; i < 4; i++){
            this.tableLegList[i].toggleWireframe();
        }
    }

}
