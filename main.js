class Planet {
  set(name) {
    this.name = name;
  }

  get() {
    console.log(this.name);
  }
}

let arr_planet = []; //just push planets into this array
let mercury = new Planet;
mercury.set("mercury");
mercury.get();