class Chair extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.createChairTop(0, 80, 0);
        this.createChairBottom(0, 0, 0);
        
        this.add(this.chairTop);
        this.add(this.chairBottom);

        this.attrition = 0.5;

        this.rotSpeed = 0;

        this.linAcceleration = 0;
        this.linVelocity = 0;

        this.position.set(x, y, z);
    }


    createChairTop(x, y, z) {

        this.chairTop = new THREE.Object3D();

        /*  Create Back  */
        this.topMaterial = new THREE.MeshBasicMaterial({ color: 0xac7339, wireframe: true });

        var geometry = new THREE.CubeGeometry(90, 120, 12);
        var mesh = new THREE.Mesh(geometry, this.topMaterial);
        mesh.position.set(0, 60, 6 - 45);

        this.chairTop.add(mesh);


        /*  Create Seat  */
        geometry = new THREE.CubeGeometry(90, 12, 90);
        mesh = new THREE.Mesh(geometry, this.topMaterial);
        mesh.position.set(0, 6, 0);

        this.chairTop.add(mesh);

        this.chairTop.position.set(x, y, z);
    }

    createChairBottom(x, y, z) {
        this.chairBottom = new THREE.Object3D();

        /*  Create Axis  */
        this.chairFrameMaterial = new THREE.MeshBasicMaterial({ color: 0xbfbfbf, wireframe: true });

        var geometry = new THREE.CylinderGeometry(5, 5, 68);
        var mesh = new THREE.Mesh(geometry, this.chairFrameMaterial);
        mesh.position.set(0, 46, 0);
        
        this.chairBottom.add(mesh);


        /*  Create ChairLegs  */
        this.chairWheelStructures = new Array(5);

        for(var i = 0; i < 5; i++){

            var chairLeg = new THREE.Object3D();

            /*  Create Leg  */
            var geometry = new THREE.CubeGeometry(54, 6, 6);
            var mesh = new THREE.Mesh(geometry, this.chairFrameMaterial);
            mesh.position.set(27, 3 + 12, 0);
            
            chairLeg.add(mesh);

            /*  Create WheelStructure  */
            this.chairWheelStructures[i] = this.createWheelStructure(52.5, 0, 0);
            chairLeg.add(this.chairWheelStructures[i]);


            /*  Rotate ChairLeg to proper position  */
            chairLeg.rotation.y = 0.5 * Math.PI + i * (0.4 * Math.PI);
            this.chairWheelStructures[i].rotation.y = -0.5 * Math.PI - (0.5 * Math.PI + i * (0.4 * Math.PI));
            this.chairBottom.add(chairLeg);
        }

        this.chairBottom.position.set(x, y, z);
    }

    createWheelStructure(x, y, z) {
        var wheelStructure = new THREE.Object3D();

        /*  Create Wheel  */
        this.wheelStructureMaterial = new THREE.MeshBasicMaterial({ color: 0x8080ff, wireframe: true });

        var geometry = new THREE.TorusGeometry(3, 3, 12, 12);
        var mesh = new THREE.Mesh(geometry, this.wheelStructureMaterial);
        mesh.position.set(-4.5, 6, 0);
        
        wheelStructure.add(mesh);

        /*  Create WheelConnection  */
        geometry = new THREE.CylinderGeometry(3, 3, 12);
        mesh = new THREE.Mesh(geometry, this.wheelStructureMaterial);
        mesh.position.set(0, 12, 0);
        
        wheelStructure.add(mesh);

        wheelStructure.position.set(x, y, z);

        return wheelStructure;
    }


    set rotationSpeed(v) {
        this.rotSpeed = v;
    }

    set linearAcceleration(a) {
        this.linAcceleration = a;
    }

    update(t) {
        var actualAcceleration = this.linAcceleration - this.attrition * this.linVelocity;

        this.chairTop.rotation.y += this.rotSpeed * t;

        this.linVelocity += actualAcceleration * t;

        /* this.linVelocity max 200 */

        if(this.linVelocity > 199){
            this.linVelocity = 200;
        }
        else if(this.linVelocity < 1 && this.linVelocity > -1){
            this.linVelocity = 0;
        }

        var linearMove = this.linVelocity * t + 0.5 * actualAcceleration * t * t;

        this.position.x += linearMove * Math.sin(this.chairTop.rotation.y);
        this.position.z += linearMove * Math.cos(this.chairTop.rotation.y);

        if(this.linVelocity > 0){
            this.rotateWheels(this.chairTop.rotation.y);
        }
        else if(this.linVelocity < 0){
            this.rotateWheels(this.chairTop.rotation.y + Math.PI);
        }
    }

    toggleWireframe() {
        this.topMaterial.wireframe = !this.topMaterial.wireframe;
        this.chairFrameMaterial.wireframe = !this.chairFrameMaterial.wireframe;
        this.wheelStructureMaterial.wireframe =!this.wheelStructureMaterial.wireframe;
    }

    rotateWheels(w) {
        for(var i = 0; i < 5; i++){
            this.chairWheelStructures[i].rotation.y = w - 0.5 * Math.PI - (0.5 * Math.PI + i * (0.4 * Math.PI));
        }
    }
    
}
