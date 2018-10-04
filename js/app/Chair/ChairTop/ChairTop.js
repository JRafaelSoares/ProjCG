class ChairTop extends GraphicalEntity {
    
    constructor(x, y, z) {
        super();

        this.seat = new Seat(0, 0, 0);
        this.back = new Back(0, 0, -45);
        
        this.add(this.seat);
        this.add(this.back);

        this.position.set(x, y, z);
    }

    toggleWireframe() {
        this.seat.toggleWireframe();
        this.back.toggleWireframe();
    }
}
