class Lamp extends GraphicalEntity{

    constructor(x, y, z){
        super();

        this.base = new Base(x, y, z);
        this.foot = new Foot(x, y, z);
        this.lampTop = new LampTop(x, y + this.foot.height, z);

        this.add(this.base);
        this.add(this.foot);
        this.add(this.lampTop);

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

    update(){
        
    }

    toggleWireframe() {
        this.base.toggleWireframe();
        this.foot.toggleWireframe();
        this.lampTop.toggleWireframe();
    }
}