class Shade extends GraphicalEntity{

    constructor(x, y, z){
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });

        this.geometry = new THREE.CylinderGeometry(12, 50, 80, 20, 10, true);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 15, 0);

        this.add(this.mesh);
        this.position.set(x, y, z);
    }

    toggleWireframe() {
        this.material.wireframe = !this.material.wireframe;
    }

}