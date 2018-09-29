class LampTop extends GraphicalEntity{

    constructor(x, y, z){
        super();

        this.bulb = new Bulb(0, 0, 0);
        
        this.add(this.bulb);

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

}