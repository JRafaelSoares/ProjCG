/*global THREE, requestAnimationFrame, console*/

var camera1, camera2, camera3, scene, renderer;

var cameraList;

var geometry, material, lampMaterial, mesh, wireframe = true;

var camera_num = 0;

function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    
    scene.add(new THREE.AxisHelper(40));
    
    createLamp(0, 0, 0);
    //createTable(0, 8, 0);
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