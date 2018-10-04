class Bulb extends GraphicalEntity{

    constructor(x, y, z){
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0xffff1a, wireframe: true });

        this.geometry = new THREE.SphereGeometry(8, 4, 4);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 8, 0);
        this.mesh.scale.set(1,1.5,1);

        this.add(this.mesh);
        this.position.set(x, y, z);
    }

    toggleWireframe() {
        this.material.wireframe = !this.material.wireframe;
    }

}
