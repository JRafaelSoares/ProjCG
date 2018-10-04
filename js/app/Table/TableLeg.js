class TableLeg extends GraphicalEntity {
    
    constructor(x, y, z){
        super();
        
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        
        this.geometry = new THREE.CylinderGeometry(8, 5, 120);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 60, 0);
        
        this.add(this.mesh);
        this.position.set(x, y, z);
    }

    get height(){
        return this.geometry.parameters.height;
    }

    toggleWireframe() {
        this.material.wireframe = !this.material.wireframe;
    }
}