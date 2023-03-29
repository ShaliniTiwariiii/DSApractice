let arr=[1,2,1,3,1,2,3]
function freqMax(arr){
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
  console.log(mp)  
}
console.log(freqMax(arr))