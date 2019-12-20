function Branch (begin,end) {
    this.begin = begin;
    this.end = end;
    this.displayed = false;


    this.show = () => {
        stroke(255);
        line(this.begin.x, this.begin.y,this.end.x,this.end.y);
    }

    this.fork = (angle, scl) => {
        let vector = p5.Vector.sub(this.end, this.begin);
        vector.rotate(angle)
        vector.mult(scl)
        let newEnd = p5.Vector.add(this.end,vector);
        let newBranch = new Branch(this.end,newEnd)
        this.finished = true;
        return newBranch
    }
}