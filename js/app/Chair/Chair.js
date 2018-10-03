class Chair extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.chairTop = new ChairTop(0, 80, 0);
        this.chairBottom = new ChairBottom(0, 0, 0);
        
        this.add(this.chairTop);
        this.add(this.chairBottom);

        this.rotSpeed = 0;

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

    set rotationSpeed(v) {
        this.rotSpeed = v;

        this.chairBottom.rotationSpeed = v;
    }

    update(t) {
        this.chairTop.rotation.y += this.rotSpeed * t;

        this.chairBottom.update(t);
    }
    
}
