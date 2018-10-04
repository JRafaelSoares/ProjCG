class Chair extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.chairTop = new ChairTop(0, 80, 0);
        this.chairBottom = new ChairBottom(0, 0, 0);
        
        this.add(this.chairTop);
        this.add(this.chairBottom);

        this.attrition = 0.5;

        this.rotSpeed = 0;

        this.linAcceleration = 0;
        this.linVelocity = 0;

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

    set rotationSpeed(v) {
        this.rotSpeed = v;

        this.chairBottom.rotationSpeed = v;
    }

    set linearAcceleration(a) {
        this.linAcceleration = a;
    }

    update(t) {
        var actualAcceleration = this.linAcceleration - this.attrition * this.linVelocity;

        this.chairTop.rotation.y += this.rotSpeed * t;

        this.linVelocity += actualAcceleration * t;

        /* this.linVelocity max 200 */

        if(this.linVelocity > 199.99){
            this.linVelocity = 200;
        }
        else if(this.linVelocity < 0.01 && this.linVelocity > -0.01){
            this.linVelocity = 0;
        }

        var linearMove = this.linVelocity * t + 0.5 * actualAcceleration * t * t;

        this.position.x += linearMove * Math.sin(this.chairTop.rotation.y);
        this.position.z += linearMove * Math.cos(this.chairTop.rotation.y);

        this.chairBottom.update(t);
    }

    toggleWireframe() {
        this.chairTop.toggleWireframe();
        this.chairBottom.toggleWireframe();
    }
    
}
