class Main {

    constructor(){
        'use strict';
        
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(this.renderer.domElement);
       
        this.createScene();
        this.createCamera();
        
        this.animate();
    }

    createScene() {
        'use strict';
        
        this.scene = new THREE.Scene();
        
        this.axisHelper = new THREE.AxesHelper(40);

        this.axisHelper.visible = true;

        this.scene.add(this.axisHelper);

        //this.chair = new Chair();
        this.lamp = new Lamp(0, 0, 0);
        //this.table = new Table();

        //this.scene.add(this.chair);
        this.scene.add(this.lamp);
        //this.scene.add(this.table);
    }

    createCamera() {
        'use strict';

        this.cameraList = new Array(3);
        this.cameraNum = 0;

        for(var i = 0; i < 3; i++){

            this.cameraList[i] = new THREE.OrthographicCamera( window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
        
            this.cameraList[i].position.x = 200 * (i == 1 ? 1 : 0);
            this.cameraList[i].position.y = 200 * (i == 0 ? 1 : 0);
            this.cameraList[i].position.z = 200 * (i == 2 ? 1 : 0);

            this.cameraList[i].lookAt(this.scene.position);
        }
    }

    render() {
        'use strict';
        
        this.renderer.render(this.scene, this.cameraList[this.cameraNum]);
    }


    animate() {
        'use strict';
        
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

    keyboardEvent(k) {
        'use strict';

        switch(k) {
            case 65: //A
            case 97: //a
                /*wireframe = !wireframe;
                scene.traverse(function (node) {
                    if (node instanceof THREE.Mesh) {
                        node.material.wireframe = wireframe; //!node.material.
                    }
                });*/
                console.log("Wireframe");
                break;
            case 49: //1
                this.cameraNum = 0;
                break;
            case 50:
                this.cameraNum = 1;
                break;
            case 51:
                this.cameraNum = 2;
                break;

        }
        
    }
}

