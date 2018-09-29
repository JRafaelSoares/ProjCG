class Lamp extends GraphicalEntity{

    constructor(x, y, z){
        super();

        this.base = new Base(x, y, z);
        this.foot = new Foot(x, y, z);
        this.lampTop = new LampTop(x, y + 140, z);

        this.add(this.base);
        this.add(this.foot);
        this.add(this.lampTop);

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

        /*this.addLampBase(0, 0, 0);
        this.addLampBody(lamp, 0, 0, 0);
        this.addLightBulb(lamp, 0, 64, 0);
        this.addLampShade(lamp, 0, 70, 0);*/
    }
}