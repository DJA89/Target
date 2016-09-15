class HelloController {
  constructor(Example) {
    this.message = 'hello world';
    this.Example = Example;
  }

  clickme(){
    alert(this.Example.all());
  }
}

export { HelloController }
