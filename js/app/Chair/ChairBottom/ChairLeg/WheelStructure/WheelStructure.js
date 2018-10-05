class WheelStructure extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.wheel = new Wheel(-4.5, 6, 0);
        this.wheelConnection = new WheelConnection(0, 6, 0);
        
        this.add(this.wheel);
        this.add(this.wheelConnection);

        this.position.set(x, y, z);

        this.rotSpeed = 0;
    }

    toggleWireframe() {
        this.wheel.toggleWireframe();
        this.wheelConnection.toggleWireframe();
    }

    update(t) {

        this.wheel.rotation.z += this.rotSpeed * t;

    }

    adjustWheelToSpeed(v){
        this.rotSpeed = -v / 6;
    }
}
