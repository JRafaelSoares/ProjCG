class TableLeg extends GraphicalEntity {
    
    constructor(x, y, z){
        super();
        
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        
        this.geometry = new THREE.CylinderGeometry(6, 6, 100);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(x, y - 3, z);
        
        this.add(this.mesh);
        this.position.set(x, y, z);
    }
}