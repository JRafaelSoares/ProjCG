class WheelStructure extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.wheel = new Wheel(-10.5, 0, 0);
        this.wheelConnection = new WheelConnection(0, 6, 0);
        
        this.add(this.wheel);
        this.add(this.wheelConnection);

        this.position.set(x, y, z);
    }

    toggleWireframe() {
        this.wheel.toggleWireframe();
        this.wheelConnection.toggleWireframe();
    }
}
