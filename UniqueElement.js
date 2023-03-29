//remove duplicate
let arr=[1,2,3,4,1,2,3,1,2,1,15]
function RemoveElement(arr){
let mp=new Map()
for(let i=0;i<arr.length;i++){
    if(mp.has(arr[i])){
        let x= mp.get(arr[i])
        mp.set(arr[i],x+1)
    }
    else{
        mp.set(arr[i],1)
    }
}
let newArr=[]
mp.forEach((value,key)=>{
    if(value==1){
      newArr.push(key)
    }
})
return newArr
}
console.log(RemoveElement(arr))