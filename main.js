class Planet {
  set(name) {
    this.name = name;
  }

  get() {
    console.log(this.name);
  }
}

let mercury = new Planet;
mercury.set("mercury");
mercury.get();