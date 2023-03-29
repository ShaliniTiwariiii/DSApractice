//find unique pairs of element (inside an array)whose sum is equal to k

let arr=[7,2,4,6,9,11,34,2,3,1]
let k=5
function sumTarget(arr,k){
let mp=new Map()
for(let i=0;i<arr.length;i++){
if(mp.has(arr[i])){
    let x=mp.get(arr[i])
    mp.set(arr[i],x+1)
}
else{
    mp.set(arr[i],1)
}
}
let newMp=[]
for(let [key,value] of mp){
    if(mp.has(k-key)){
      newMp.push([key,k-key]) 
    }
}
console.log(newMp)

}
console.log(sumTarget(arr,k))