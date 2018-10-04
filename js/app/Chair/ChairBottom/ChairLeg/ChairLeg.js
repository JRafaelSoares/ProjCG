class ChairLeg extends GraphicalEntity {
    
    constructor(x, y, z) {
    	super();

        this.leg = new Leg(0, 12, 0);
        this.wheelStructure = new WheelStructure(52.5, 0, 0);
        
        this.add(this.leg);
        this.add(this.wheelStructure);

        this.position.set(x, y, z);

        this.rotSpeed = 0;
    }

    set rotationSpeed(v) {
    	this.rotSpeed = v;
    }

    update(t) {

    	this.wheelStructure.rotation.y += this.rotSpeed * t;

    }

    toggleWireframe() {
        this.leg.toggleWireframe();
        this.wheelStructure.toggleWireframe();
    }
}
