const http = (url)=>{
    return {
        get(){ return `GET: ${url}`},
        post(){ return `POST: ${url}`}
    }
}

const http$ = http("google.com");

console.log(http$);
console.log(http$.get());
console.log(http$.post());