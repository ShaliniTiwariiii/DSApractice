// 6=>foo,10=>Bar,30=>FooBar,13=>''
function FooBar(n){
    if(n%3==0){
        console.log('Foo')
    }
    if(n%5==0){
        console.log('Bar')
    }

    if(n%5==0 && n%7==0){
        console.log('FooBar')
    }
    if(n%13==0){
        console.log('')
    }
}
console.log(FooBar(35))