class Main {

    constructor(){
        'use strict';

        this.keysPressed = [0, 0, 0, 0]; /* Left Right Down Up */
        
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(this.renderer.domElement);
       
        this.createScene();
        this.createCamera();

        this.clock = new THREE.Clock();
        
        this.animate();
    }

    createScene() {
        'use strict';
        
        this.scene = new THREE.Scene();
        
        this.axisHelper = new THREE.AxesHelper(40);

        this.axisHelper.visible = true;

        this.scene.add(this.axisHelper);

        this.chair = new Chair(0, 0, -30);
        //this.lamp = new Lamp(-80, 0, -80);
        this.table = new Table(0, 0, 0);

        this.scene.add(this.chair);
        //this.scene.add(this.lamp);
        this.scene.add(this.table);
    }

    createCamera() {
        'use strict';

        this.cameraList = new Array(3);
        this.cameraNum = 0;

        for(var i = 0; i < 3; i++){

            this.cameraList[i] = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
        
            this.cameraList[i].position.x = 400 * (i == 1 ? 1 : 0);
            this.cameraList[i].position.y = 400 * (i == 0 ? 1 : 0);
            this.cameraList[i].position.z = 400 * (i == 2 ? 1 : 0);

            this.cameraList[i].lookAt(this.scene.position);
        }
    }

    render() {
        'use strict';
        
        this.renderer.render(this.scene, this.cameraList[this.cameraNum]);
    }


    animate() {
        'use strict';

        this.update();
        
        this.render();
        
        requestAnimationFrame(() => this.animate());
    }


    resizeEvent() {
        'use strict';

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        if (window.innerHeight > 0 && window.innerWidth > 0) {
            for (var i = 0; i < this.cameraList.length; i++){
                
                this.cameraList[i].left = window.innerWidth / -2;
                this.cameraList[i].right = window.innerWidth / 2;

                this.cameraList[i].top = window.innerHeight / 2;
                this.cameraList[i].bottom = window.innerHeight / -2;

                this.cameraList[i].updateProjectionMatrix();

            }
        }

    }

    keyboardDownEvent(k) {
        'use strict';

        switch(k) {
            case 65: //A
            case 97: //a
                this.toggleWireframe();
                break;
            case 49: //1
                this.cameraNum = 0;
                break;
            case 50: //2
                this.cameraNum = 1;
                break;
            case 51: //3
                this.cameraNum = 2;
                break;

            case 39: //Right
                this.keysPressed[1] = 1;
                this.chair.rotationSpeed = this.keysPressed[0] - this.keysPressed[1];
                break;
            case 37: //Left
                this.keysPressed[0] = 1;
                this.chair.rotationSpeed = this.keysPressed[0] - this.keysPressed[1];
                break;
            case 38: //Up
                this.keysPressed[2] = 100;
                this.chair.linearAcceleration = this.keysPressed[2] - this.keysPressed[3];
                break;
            case 40: //Down
                this.keysPressed[3] = 100;
                this.chair.linearAcceleration = this.keysPressed[2] - this.keysPressed[3];
                break;

        }
        
    }

    keyboardUpEvent(k) {
        'use strict';

        switch(k) {
            case 39: //Right
                this.keysPressed[1] = 0;
                this.chair.rotationSpeed = this.keysPressed[0] - this.keysPressed[1];
                break;
            case 37: //Left
                this.keysPressed[0] = 0;
                this.chair.rotationSpeed = this.keysPressed[0] - this.keysPressed[1];
                break;
            case 38: //Up
                this.keysPressed[2] = 0;
                this.chair.linearAcceleration = this.keysPressed[2] - this.keysPressed[3];
                break;
            case 40: //Down
                this.keysPressed[3] = 0;
                this.chair.linearAcceleration = this.keysPressed[2] - this.keysPressed[3];
                break;

        }
        
    }

    toggleWireframe() {
        this.chair.toggleWireframe();
        this.table.toggleWireframe();
        this.lamp.toggleWireframe();
    }

    update() {

        var t = this.clock.getDelta();

        this.chair.update(t);
        this.table.update(t);
        //this.lamp.update(t);

    }
}

