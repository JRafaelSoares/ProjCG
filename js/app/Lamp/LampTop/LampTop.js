class LampTop extends GraphicalEntity{

    constructor(x, y, z){
        super();

        this.bulb = new Bulb(0, 0, 0);
        this.shade = new Shade(0, 0, 0);

        this.add(this.bulb);
        this.add(this.shade);
        
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

    toggleWireframe() {
        this.bulb.toggleWireframe();
        this.shade.toggleWireframe();
    }
}