for(let i=1;i<=100;i++){
    if((i % 3 ===0) && (i%5 === 0)){
        console.log(“FIZZBUZZ”);
    }else if(i % 5 ===0){
        console.log(‘BUZZ’);
    }else if(i % 3 ===0){
        console.log(“FIZZ”);
    }else {
        console.log(i);
    }
}

let n = 13;
n++
while(true){
    let isprime =true;
    for(let i=2; i<=n; i++){
        if(n%i===0){
            isprime =false;
            break;
        }
    }
    if(isprime){
        console.log(‘the next prime number’,n);
        break;
    }
    n++ // until we find the next prime
}

let n = 13;
// Increment n until the next prime is found
n++;
while (true) {
    let isPrime = true;
    // Check if the number is prime
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    // If the number is prime, log it and break the loop
    if (isPrime) {
        console.log(“The next prime after is: “, n);
        break;
    }
    // Increment n to check the next number
    n++;
}