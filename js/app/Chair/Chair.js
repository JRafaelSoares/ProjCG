class Chair extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.chairTop = new ChairTop(0, 80, 0);
        this.chairBottom = new ChairBottom(0, 0, 0);
        
        this.add(this.chairTop);
        this.add(this.chairBottom);

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }
    
}
