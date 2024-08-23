let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let button4 = document.getElementById("btn4")
let button5 = document.getElementById("btn5")
let button6 = document.getElementById("btn6")
let button7 = document.getElementById("btn7")
let button8 = document.getElementById("btn8")
let button9 = document.getElementById("btn9")
let button10 = document.getElementById("btn10")
let button11 = document.getElementById("btn11")
let button12 = document.getElementById("btn12")
let button13 = document.getElementById("btn13")
let button14 = document.getElementById("btn14")
let button15 = document.getElementById("btn15")
let button16 = document.getElementById("btn16")
let button17 = document.getElementById("btn17")
let button18 = document.getElementById("btn18")
let button19 = document.getElementById("btn19")
let button20 = document.getElementById("btn20")
user = document.getElementById("user")
let audio1 = new Audio('static/btn_sound2.wav')
let audio2 = new Audio('static/btn_sound1.wav')
let audio3 = new Audio('static/btn_sound3.wav')
try {
  button1.addEventListener('click', () => {
    audio2.play()
    user.value = user.value + 7
  })
  button2.addEventListener('click', () => {

    audio2.play()
    user.value = user.value + 8
  })
  button3.addEventListener('click', () => {
    audio2.play()

    user.value = user.value + 9
  })
  button4.addEventListener('click', () => {
    audio2.play()
    user.value = user.value + "+"
  })
  button5.addEventListener('click', () => {
    audio3.play()
    user.value = user.value + 4

  })
  button6.addEventListener('click', () => {
    audio3.play()
    user.value = user.value + 5

  })
  button7.addEventListener('click', () => {
    audio3.play()
    user.value = user.value + 6

  })
  button8.addEventListener('click', () => {
    audio3.play()
    user.value = user.value + "-"

  })
  button9.addEventListener('click', () => {
    audio3.play()
    user.value = user.value + 1

  })
  button10.addEventListener('click', () => {
    audio2.play()
    user.value = user.value + 2

  })
  button11.addEventListener('click', () => {
    audio2.play()
    user.value = user.value + 3

  })
  button12.addEventListener('click', () => {
    audio2.play()
    user.value = user.value + "÷"

  })
  button13.addEventListener('click', () => {
    audio2.play()
    user.value = user.value + 0


  })
  button14.addEventListener('click', () => {
    audio3.play()
    user.value = user.value + "X"

  })
  button17.addEventListener('click', () => {
    audio2.play()
    user.value = user.value + "%"

  })
  button18.addEventListener('click', () => {
    audio3.play()
    user.value = user.value + "^"

  })
  button19.addEventListener('click', () => {
    audio2.play()
    user.value = user.value + "."

  })
  button20.addEventListener('click', () => {
    audio3.play()
    user.value = user.value + "π"

  })
  button15.addEventListener('click', () => {
    audio3.play()
    user.value = ""
  })
  button16.addEventListener('click', () => {
    audio1.play()
    let str = user.value
    let x = str.search("X")
    let dived = str.search("÷")
    // console.log(dived)
    let power = str.search("^")
    // console.log(power)
    if(power==0){
      power=5
    //   console.log("good")
    }
    let pai = str.search("π")
    if(pai!=-1){
      pai=7
    }
    // console.log(power)
    console.log(pai)

    try {
      if (x != -1) {
        newstr = str.replace(/X/g, "*").replace(/÷/g, "/").replace("π","3.141").replace("^","**")
        // console.log(newstr)
        // console.log("i am in X")
        newstr = eval(newstr)
        user.value = newstr
      }
      else if (dived != -1) {
        // console.log("i am in /")
        dstr = str.replace(/÷/g, "/").replace("^","**").replace("π","3.141")
        // console.log(dstr)
        dstr = eval(dstr)
        user.value = dstr
        
      }
      else if(pai==7){
        // console.log("i am in pai")
        paistr=str.replace("π","3.141")
        paistr=eval(paistr)
        user.value=paistr
      }
      else if(power==5){
        // console.log("i am in power")
        powerstr=str.replace("^","**")
        // console.log(powerstr)
        powerstr=eval(powerstr)
        user.value=powerstr
      }
      else {
        str = eval(str)
        user.value = str

      }
    }catch (errror) {
      user.value = "Invalid input"
    }
    
  })
}
catch(e){
//   console.log("found a error"+ e)
}
