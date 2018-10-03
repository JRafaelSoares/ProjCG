class WheelConnection extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0x8080ff, wireframe: true });

        this.geometry = new THREE.CylinderGeometry(3, 3, 12);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 6, 0);
        
        this.add(this.mesh);

        this.position.set(x, y, z);
    }
}
