class Back extends GraphicalEntity {

    constructor(x, y, z) {
    	super();

        this.material = new THREE.MeshBasicMaterial({ color: 0xac7339, wireframe: true });

        this.geometry = new THREE.CubeGeometry(90, 120, 12);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 60, 6);
        
        this.position.set(x, y, z);

        this.add(this.mesh);
    }

    toggleWireframe() {
        this.material.wireframe = !this.material.wireframe;
    }
}
