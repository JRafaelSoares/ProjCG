class Axis extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0xbfbfbf, wireframe: true });

        this.geometry = new THREE.CylinderGeometry(5, 5, 68);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 34, 0);
        
        this.add(this.mesh);

        this.position.set(x, y, z);
    }

    toggleWireframe() {
        this.material.wireframe = !this.material.wireframe;
    }
}
