class Foot extends GraphicalEntity{

    constructor(x, y, z){
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });

        this.geometry = new THREE.CylinderGeometry(4, 4, 240);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 120, 0);

        this.add(this.mesh);
        this.position.set(x, y, z);
    }

    get height(){
        return this.geometry.parameters.height;
    }

}