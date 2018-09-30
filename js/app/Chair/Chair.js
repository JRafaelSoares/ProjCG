class Chair extends GraphicalEntity {
    var chairTop;
    var chairBottom;
    
    constructor() {
        chairTop = new ChairTop();
        chairBottom = new ChairBottom();
        
        this.add(chairTop);
        this.add(chairBottom);
    }
}




var wheels;

function addChairWheel(obj, x, y, z) {
    'use strict';
    
    var chairWheelGeometry = new THREE.TorusGeometry(3, 3, 16, 25);
    var chairWheelMesh = new THREE.Mesh(chairWheelGeometry, material);
    
    var wheelSupportGeometry = new THREE.CylinderGeometry(3, 3, 12);
    var wheelSupportMesh = new THREE.Mesh(wheelSupportGeometry, material);
    
    wheelSupportMesh.position.set(-3, 6, 0);
    
    chairWheelMesh.add(wheelSupportMesh);
    
    chairWheelMesh.position.set(x, y, z);
    obj.add(chairWheelMesh);
    
    return chairWheelMesh;
}

function addChairLeg(obj, x, y, z) {
    'use strict';

    var legGeometry = new THREE.CubeGeometry(54, 6, 6);
    var legMesh = new THREE.Mesh(legGeometry, material);
    //legMesh.rotation.z = Math.PI / 24;
    
    addChairWheel(legMesh, -27, -9, 0);
    
    legMesh.position.set(x,y,z);
    obj.add(legMesh);
}

function addChairBack(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.CubeGeometry(90, 120, 12);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairSeat(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.CubeGeometry(90, 12, 90);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairWheelAxis(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.CylinderGeometry(15, 15, 50);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createChair(x, y, z) {
    'use strict';
    
    var chair = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wirefram: true });
    
    //addChairWheel(chair, -48, 6, 0);
    addChairSeat(chair, 0, 86, 0);
    addChairBack(chair, 0, 140, -39);
    //addChairWheelAxis(chair, 0, 60, 0);
    addChairLeg(chair, -27, 15, 0); //8.52
    //addWheelTriangle(chair, x, y, z);
    
    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;
    
    scene.add(chair);
}
