function addWheelChair(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.TorusGeometry( 10, 10, 16, 40);
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
}
*/

function createChair( x, y, z) {
    'use strict';
    
    var chair = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wirefram: true });
    
    addWheelChair(chair, 0, 0, 0);
    addLegChair(chair, 30, 15, 0);
    //addWheelTriangle(chair, x, y, z);
    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;
    
    scene.add(chair);
}
