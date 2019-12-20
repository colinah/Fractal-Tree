let width = 400;
let len = 100;
let scl = 0.8;
let angle = 3.14159/8;
let tree = [];


function setup() {
    createCanvas(width,width);
    let a = createVector(width/2,height);
    let b = createVector(width/2,height-len);
    root = new Branch(a,b)
    tree[0] = root;    
  }

  function mousePressed() {
    for(let i = tree.length-1; i >= 0; i--){
      if(!tree[i].finished){
        tree.push(tree[i].fork(angle,scl));
        tree.push(tree[i].fork(-angle,scl))
        console.log(tree)
      }
    }
  }
  
  function draw() {
    background(51)
    for(let i = 0; i < tree.length;i++){
      tree[i].show()
    }
    
  }

