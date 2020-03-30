function setup() {

  let my_array = []

  for (let i=0; i<4; i++) { //repeat(4)

    let r = random(0,100)
    my_array.push(r)

  }

for (let item of my_array) {
    print(item)
}

}
