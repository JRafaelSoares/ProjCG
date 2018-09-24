/*global THREE, requestAnimationFrame, console*/

var camera1, camera2, camera3, scene, renderer;

var cameraList;

var geometry, material, lampMaterial, mesh, wireframe = true;

var camera_num = 0;

function addTableLeg(obj, x, y, z) {
    'use strict';

    geometry = new THREE.CylinderGeometry(6, 6, 100);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y - 3, z);
    obj.add(mesh);
}

function addTableTop(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(360, 12, 120);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}


function createTable(x, y, z) {
    'use strict';
    
    var table = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
   
    addTableTop(table, 0, 0, 0);
    addTableLeg(table, -150, -50, -48);
    addTableLeg(table, -150, -50, 48);
    addTableLeg(table, 150, -50, 48);
    addTableLeg(table, 150, -50, -48);
    
    scene.add(table);
    
    table.position.x = x;
    table.position.y = y;
    table.position.z = z;
}

function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    
    scene.add(new THREE.AxisHelper(40));
    
    createLamp(0, 0, 0);
    createTable(0, 8, 0);
}

function createCamera() {
    'use strict';
    
    camera1 = new THREE.OrthographicCamera( window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
    
    camera1.position.x = 0;
    camera1.position.y = 20;
    camera1.position.z = 0;
    camera1.lookAt(scene.position);
    
    camera2 = new THREE.OrthographicCamera( window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
    
    camera2.position.x = 380;
    camera2.position.y = 0;
    camera2.position.z = 0;
    camera2.lookAt(scene.position);
    
    camera3 = new THREE.OrthographicCamera( window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
    
    camera3.position.x = 0;
    camera3.position.y = 0;
    camera3.position.z = 140;
    camera3.lookAt(scene.position);
    cameraList= [camera1, camera2, camera3];
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (window.innerHeight > 0 && window.innerWidth > 0) {
        for (var i = 0; i<cameraList.length; i++){
            
            cameraList[i].left = window.innerWidth / -2;
            cameraList[i].right = window.innerWidth / 2;

            cameraList[i].top = window.innerHeight / 2;
            cameraList[i].bottom = window.innerHeight / -2;

            cameraList[i].updateProjectionMatrix();

        }
    }

}

function onKeyDown(e) {
    'use strict';
    
    switch (e.keyCode) {
    case 65: //A
    case 97: //a
        wireframe = !wireframe;
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = wireframe; //!node.material.
            }
        });
        break;
    case 69:  //E
    case 101: //e
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                node.visible = !node.visible;
            }
        });
        break;
    case 49: //1
            camera_num = 0;
            break;
        case 50:
            camera_num = 1;
            break;
        case 51:
            camera_num = 2;
            break;

    }
    
}

function render() {
    'use strict';
    
    renderer.render(scene, cameraList[camera_num]);

}

function init() {
    'use strict';
    
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
   
    createScene();
    createCamera();
    
    render();
    
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';
    
    render();
    
    requestAnimationFrame(animate);
}




/* Lamp */

function addLampShade(obj, x, y, z) {
    'use strict';

    geometry = new THREE.CylinderGeometry(6, 6, 100);
    mesh = new THREE.Mesh(geometry, lampMaterial);
    mesh.position.set(x, y - 3, z);
    obj.add(mesh);
}

function addLightBulb(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.CubeGeometry(360, 12, 120);
    mesh = new THREE.Mesh(geometry, lampMaterial);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLampBase(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.CylinderGeometry(4, 20, 10, 15);
    mesh = new THREE.Mesh(geometry, lampMaterial);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLampBody(obj, x, y, z) {
    'use strict';
    
    var lampHeight = 60;
    
    geometry = new THREE.CylinderGeometry(4, 4, lampHeight);
    mesh = new THREE.Mesh(geometry, lampMaterial);
    mesh.position.set(x, y + lampHeight / 2, z);
    obj.add(mesh);
}


function createLamp(x, y, z) {
    'use strict';
    
    var lamp = new THREE.Object3D();
    
    lampMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
   
    addLampBase(lamp, 0, 0, 0);
    addLampBody(lamp, 0, 0, 0);
    //addLightBulb(lamp, 0, -50, 48);
    //addLampShade(lamp)
    
    scene.add(lamp);
    
    lamp.position.x = x;
    lamp.position.y = y;
    lamp.position.z = z;
}