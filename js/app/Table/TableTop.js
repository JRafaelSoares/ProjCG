class TableTop extends GraphicalEntity {
    
    constructor(x, y, z){
        super();
        
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        
        this.geometry = new THREE.CubeGeometry(360, 12, 120);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(x, y, z);
        
        this.add(this.mesh);
        this.position.set(x, y, z);
    }
}
