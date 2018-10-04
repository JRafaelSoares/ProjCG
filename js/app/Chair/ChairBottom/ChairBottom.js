class ChairBottom extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.axes = new Axis(0, 12, 0);
        this.chairLegs = new Array(5);

        for(var i = 0; i < 5; i++){
            this.chairLegs[i] = new ChairLeg(0, 0, 0);

            this.chairLegs[i].rotation.y = 0.5 * Math.PI + i * (0.4 * Math.PI);

            this.chairLegs[i].rotateWheel(-0.5 * Math.PI - (0.5 * Math.PI + i * (0.4 * Math.PI)));

            this.add(this.chairLegs[i]);
        }
        
        this.add(this.axes);

        this.position.set(x, y, z);
    }

    /*set rotationSpeed(v) {
        for(var i = 0; i < 5; i++){
            this.chairLegs[i].rotSpeed = v;
        }
    }*/

    update(t) {
        for(var i = 0; i < 5; i++){
            this.chairLegs[i].update(t);
        }
    }
    
    adjustWheelsToSpeed(v){
        for(var i = 0; i < 5; i++){
            this.chairLegs[i].adjustWheelToSpeed(v);
        }
    }

    rotateWheels(w){
        for(var i = 0; i < 5; i++){
            this.chairLegs[i].rotateWheel(w);
        }
    }

    toggleWireframe() {
        this.axes.toggleWireframe();

        for(var i = 0; i < 5; i++){
            this.chairLegs[i].toggleWireframe();
        }
    }
}
