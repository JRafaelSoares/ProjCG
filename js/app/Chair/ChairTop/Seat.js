class Seat extends GraphicalEntity {

    constructor(x, y, z) {
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0xac7339, wireframe: true });

        this.geometry = new THREE.CubeGeometry(90, 12, 90);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 6, 0);
        
        this.position.set(x, y, z);

        this.add(this.mesh);
    }

    
}
