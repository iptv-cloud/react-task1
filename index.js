// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    for (let i=0; i<N -1; i++){
        process.stdout.write("L\n");
    }    
    for (let i=0; i<N; i++){
        process.stdout.write("L");
    }
}
