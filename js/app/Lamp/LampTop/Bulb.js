class Bulb extends GraphicalEntity{

    constructor(x, y, z){
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });

        this.geometry = new THREE.SphereGeometry(8, 4, 4);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 8, 0);
        this.mesh.scale.set(1,2,1);

        this.add(this.mesh);
        console.log(y);
        this.position.set(x, y, z);
    }

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
}


function createLamp(x, y, z) {
    'use strict';
    
    var lamp = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
   
    addLampBase(lamp, 0, 0, 0);
    addLampBody(lamp, 0, 0, 0);
    addLightBulb(lamp, 0, 64, 0);
    addLampShade(lamp, 0, 70, 0);
    
    lamp.position.x = x;
    lamp.position.y = y;
    lamp.position.z = z;
    
    scene.add(lamp);
}