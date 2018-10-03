class ChairLeg extends GraphicalEntity {
    
    constructor(x, y, z) {
    	super();

        this.leg = new Leg(0, 12, 0);
        this.wheelStructure = new WheelStructure(54, 0, 0);
        
        this.add(this.leg);
        this.add(this.wheelStructure);

        this.position.set(x, y, z);
    }
}
