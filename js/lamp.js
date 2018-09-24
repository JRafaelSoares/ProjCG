var geometry, material, mesh;

function addLampShade(obj, x, y, z) {
    'use strict';

    geometry = new THREE.CylinderGeometry(6, 6, 100);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y - 3, z);
    obj.add(mesh);
}

function addLightBulb(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.CubeGeometry(360, 12, 120);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLampBase(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.CylinderGeometry(4, 20, 10, 15);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLampBody(obj, x, y, z) {
    'use strict';
    
    var lampHeight = 60;
    
    geometry = new THREE.CylinderGeometry(4, 4, lampHeight);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y + lampHeight / 2, z);
    obj.add(mesh);
}


function createLamp(x, y, z) {
    'use strict';
    
    var lamp = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
   
    addLampBase(lamp, 0, 0, 0);
    addLampBody(lamp, 0, 0, 0);
    //addLightBulb(lamp, 0, -50, 48);
    //addLampShade(lamp)
    
    lamp.position.x = x;
    lamp.position.y = y;
    lamp.position.z = z;
    
    return lamp;
}