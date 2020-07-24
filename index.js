// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius
  }
  
  get diameter(){
    return this.radius * 2
  }
  
  get circumference(){
    const pi = piMath.PI;
    2 * pi * this.radius
  }
  
  get area(){
    const pi = piMath.PI;
    pi * (this.radius * this.radius)
  }
}