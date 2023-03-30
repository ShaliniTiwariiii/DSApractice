const radius=[7,21,14,3]

function calculate(radius,logic){
 const output=[]
 for(let i=0;i<radius.length;i++){
    output.push(logic(radius[i]))
 }

 return output
}

function area(radius){
    return Math.PI*radius*radius
}
function circumFerence(radius){
    return Math.PI*2*radius
}
console.log(calculate(radius,circumFerence))
console.log(calculate(radius,area))

