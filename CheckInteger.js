//take an input and check whether the input is an integer r not


function checkInt(x){
let pattern =/^-?[0-9]+$/
let res=pattern.test(x)
 return res
}
console.log(checkInt('7'))