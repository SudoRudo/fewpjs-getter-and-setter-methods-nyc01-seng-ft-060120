// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius
  }
  
  get diameter(){
    return this.radius * 2
  }
  
  get circumference(){
    return 2 * piMath.PI * this.radius
  }
  
  get area(){
    const pi = piMath.PI;
    return pi * (this.radius * this.radius)
  }
}