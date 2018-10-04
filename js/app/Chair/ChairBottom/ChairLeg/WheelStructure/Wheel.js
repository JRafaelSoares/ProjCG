class Wheel extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0x8080ff, wireframe: true });

        this.geometry = new THREE.TorusGeometry(3, 3, 16, 25);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(6, 6, 0);
        
        this.add(this.mesh);

        this.position.set(x, y, z);
    }

    toggleWireframe() {
        this.material.wireframe = !this.material.wireframe;
    }
}
