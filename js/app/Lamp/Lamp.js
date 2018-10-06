class Lamp extends GraphicalEntity{

    constructor(x, y, z){
        super();

        this.lampBase = this.createLampBase(0, 10, 0);
        this.lampFoot = this.createLampFoot(0, 120, 0);
        this.lampTop = this.createLampTop(0, this.lampFoot.geometry.parameters.height, 0);

        this.add(this.lampBase);
        this.add(this.lampFoot);
        this.add(this.lampTop);

        this.position.set(x, y, z);
    }

    createLampBase(x, y, z){

        this.baseMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });

        var geometry = new THREE.ConeGeometry(40, 20, 15);
        var mesh = new THREE.Mesh(geometry, this.baseMaterial);
        mesh.position.set(x, y, z);

        return mesh;
    }

    createLampFoot(x, y, z){

        this.footMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });

        var geometry = new THREE.CylinderGeometry(4, 4, 240);
        var mesh = new THREE.Mesh(geometry, this.footMaterial);
        mesh.position.set(x, y, z);

        return mesh;
    }

    createLampTop(x, y, z){

        var lampTop = new THREE.Object3D();

        this.lampBulb = this.createBulb(0, 8, 0);
        this.lampShade = this.createShade(0, 15, 0);
        
        lampTop.add(this.lampBulb);
        lampTop.add(this.lampShade);

        lampTop.position.set(x, y, z);

        return lampTop;
    }

    createBulb(x, y, z){

        this.bulbMaterial = new THREE.MeshBasicMaterial({ color: 0xffff1a, wireframe: true });

        var geometry = new THREE.SphereGeometry(8, 4, 4);
        var mesh = new THREE.Mesh(geometry, this.bulbMaterial);
        mesh.position.set(x, y, z);
        mesh.scale.set(1,1.5,1);

        return mesh;
    }

    createShade(x, y, z){

        this.shadeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });

        var geometry = new THREE.CylinderGeometry(12, 50, 80, 20, 10, true);
        var mesh = new THREE.Mesh(geometry, this.shadeMaterial);
        mesh.position.set(x, y, z);

        return mesh;
    }

    toggleWireframe() {
        this.baseMaterial.wireframe = !this.baseMaterial.wireframe;
        this.footMaterial.wireframe = !this.footMaterial.wireframe;
        this.bulbMaterial.wireframe = !this.bulbMaterial.wireframe;
        this.shadeMaterial.wireframe = !this.shadeMaterial.wireframe;
    }
}