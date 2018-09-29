class Lamp{
    constructor(x,y,z){
        this.lamp = new THREE.Object3D();
        
        this.material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
       
        this.addLampBase(0, 0, 0);
        /*this.addLampBody(lamp, 0, 0, 0);
        this.addLightBulb(lamp, 0, 64, 0);
        this.addLampShade(lamp, 0, 70, 0);*/
        
        this.lamp.position.x = x;
        this.lamp.position.y = y;
        this.lamp.position.z = z;
        
        //scene.add(lamp)
    }

    addLampBase(x, y, z) {
        'use strict';
        
        this.geometry = new THREE.ConeGeometry(20, 10, 15);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(x, y, z);
        this.lamp.add(this.mesh);
    }
}
/*
function addLampBody(obj, x, y, z) {
    'use strict';
    
    var lampHeight = 60;
    
    geometry = new THREE.CylinderGeometry(4, 4, lampHeight);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y + lampHeight / 2, z);
    obj.add(mesh);
}

function addLightBulb(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.SphereGeometry(8, 4, 4);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.scale.set(1,2,1);
    obj.add(mesh);
}

function addLampShade(obj, x, y, z) {
    'use strict';

    geometry = new THREE.CylinderGeometry(8, 30, 50);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}*/