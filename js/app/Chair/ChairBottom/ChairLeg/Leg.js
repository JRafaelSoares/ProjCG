class Leg extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0xbfbfbf, wireframe: true });

        this.geometry = new THREE.CubeGeometry(54, 6, 6);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(27, 3, 0);
        
        this.add(this.mesh);

        this.position.set(x, y, z);
    }

    toggleWireframe() {
        this.material.wireframe = !this.material.wireframe;
    }
}
