class Table extends GraphicalEntity{
    
    constructor(x, y, z){
        super();
        
        this.legMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        this.topMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        
        this.tableLegList = new Array(4);
        
        //Table legs
        for(var i = 0; i<4; i++){
            var geometry = new THREE.CylinderGeometry(8, 5, 120);
            var mesh = new THREE.Mesh(geometry, this.legMaterial);

            this.tableLegList[i] = mesh;
            this.add(this.tableLegList[i]);
        }
        
        this.tableLegList[0].position.set(-160, 60, -40);
        this.tableLegList[1].position.set(-160, 60, 40); 
        this.tableLegList[2].position.set(160, 60, 40); 
        this.tableLegList[3].position.set(160, 60, -40);
        
        //Table Top
        var geometry = new THREE.CubeGeometry(360, 12, 120);
        this.tableMesh = new THREE.Mesh(geometry, this.topMaterial);        
      
        this.add(this.tableMesh);
        this.tableMesh.position.set(0, 126, 0);
        
        console.log(this.tableMesh.position.y);
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        
    }

    update(){
        
    }

    toggleWireframe() {
        this.legMaterial.wireframe = !this.legMaterial.wireframe;
        this.topMaterial.wireframe = !this.topMaterial.wireframe; 
    }

}
