class WheelConnection extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0xbfbfbf, wireframe: true });

        this.geometry = new THREE.CylinderGeometry(3, 3, 12);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(1.5, 6, 0);
        
        this.add(this.mesh);

        this.position.set(x, y, z);
    }
}
