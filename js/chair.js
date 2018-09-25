function addChairWheel(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.TorusGeometry(10, 10, 16, 40);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
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
    
    geometry = new THREE.CubeGeometry(90, 12, 80);
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

function addLegChair(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.CylinderGeometry( 10, 10, 100, 13, 1, false, 0, 3.15);
    mesh = new THREE.Mesh(geometry,material);
    mesh.rotation.z = ( Math.PI * 7) / 12;
    
    mesh.position.set(x,y,z);
    obj.add(mesh);
}

/*
function addWheelTriangle(obj, x, y, z) {
    'use strict';
    
    var geometry = new THREE.CylinderGeometry( 30, 5, 1, 3, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    mesh.rotation.z = Math.PI/2;
    mesh.position.set(x, y, z);
    obj.add(mesh);
}*/

function createChair( x, y, z) {
    'use strict';
    
    var chair = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wirefram: true });
    
    addChairWheel(chair, 0, 0, 0);
    addChairSeat(chair, 0, 60, 0);
    addChairBack(chair, 0, 114, -34);
    //addChairWheelAxis(chair, 0, 60, 0);
    addLegChair(chair, 30, 15, 0);
    //addWheelTriangle(chair, x, y, z);
    
    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;
    
    scene.add(chair);
}
