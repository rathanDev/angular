class Point {
 private x: number;
 private y: number;

 constructor(x?: number, y?:number) { 
  this.x = x;
  this.y = y;
  
  console.log("x: " + x + ", y:" + y);
 }
}
