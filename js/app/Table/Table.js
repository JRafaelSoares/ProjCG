class Table extends GraphicalEntity{
    
    constructor(x, y, z){
        super();
        
        this.tableTop = new TableTop(x, y, z);
        
        this.tableLegList = new Array(4);
        
        this.tableLegList[0] = new TableLeg(x-75, y-25, z-24);
        this.tableLegList[1] = new TableLeg(x-75, y-25, z+24);
        this.tableLegList[2] = new TableLeg(x+75, y-25, z+24);
        this.tableLegList[3] = new TableLeg(x+75, y-25, z-24);
        
        this.add(this.tableTop);
        
        for(var i=0; i<4;i++){
            this.add(this.tableLegList[i]);
        }
        
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        
    }
}
