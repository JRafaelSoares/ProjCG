class Base extends GraphicalEntity{

    constructor(x, y, z){
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });

        this.geometry = new THREE.ConeGeometry(30, 20, 15);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 10, 0);

        this.add(this.mesh);
        this.position.set(x, y, z);
    }

}