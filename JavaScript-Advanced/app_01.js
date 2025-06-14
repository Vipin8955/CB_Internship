// PROMISES
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
// It allows you to write cleaner and more manageable asynchronous code by avoiding callback hell.
// A Promise can be in one of three states:
// 1. Pending: The initial state when we create a promise, neither fulfilled nor rejected.
// 2. Resolved/Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// 4. Settled: The operation is either fulfilled or rejected (not pending anymore).

// Promises are created using the Promise constructor, which takes a function with two parameters: resolve and reject.
// resolve and reject are functions that you call to change the state of the Promise.

let watchingMovie = false; 
let moviePromise = new Promise((resolve, reject) => { 
    if (watchingMovie) {
        resolve("Popcorns are ready!");
    } else {
        reject("Not watching movie, so no popcorns!");
    }
});

// The resolve function is called when the operation is successful, and the reject function is called when it fails.
// You can handle the result of a Promise using the then and catch methods.

// Example of using a Promise:
moviePromise.then(
    // This function is called when the Promise is resolved - it is actually the resolve function
    function(msg){
        console.log("Success: "+ msg);
    },
    // This function is called when the Promise is rejected - it is actually the reject function
    function(err){
        console.log("Failure: "+ err);
    }
)

// You can also use the catch method to handle errors:
moviePromise
    .then(msg => {
        console.log("Success: " + msg);
    })
    .catch(err => {
        console.log("Failure: " + err);
    });


// when there is any delay in the code execution, we can use a delay function to simulate that delay
// And this delay can be used in the Promise to simulate asynchronous behavior

// This is a simple delay function that blocks the main thread for 1 second
function delay(){
    let currentTime = new Date().getTime();
    while(currentTime+1000> new Date().getTime()){
        // Do nothing, just wait for 1 second
    }
}
// we could have also used callback or setTimeout to achieve the same effect

// Example of using a delay function in a Promise:
let promise = new Promise((resolve, reject ) => {
    console.log("Starting the Promise");
    delay(); // Simulating a delay of 1 second
    resolve("Promise resolved after 1 second");
});


// Using promises in functions
function willYouMarryMe(fightsCount){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(fightsCount > 100) return reject("Not getting married");
            resolve("Getting married");
        }, 3000)
    });
} 

willYouMarryMe(50)
    .then(
        (msg) =>{
            console.log("Success: " + msg);
        },
        (err) =>{
            console.log("Failure: " + err);
        }
    )

// TASK: create a download

function download(url){
    console.log("Download starts....");
    return new Promise((resole, reject) => {
        let downloadedFile = url.split('/').pop();
        setTimeout(()=>{
            console.log("Download ends")
            resole(downloadedFile);
        }, 2000) 
    })
}

function compress(downloadedFile){

}

function upload(compressedFile){

}

download('http://codingblocks.com/home/myfile.mp4')
    .then(
        (downloadedFile => {
            console.log(downloadedFile);
        })
    )
    .catch(
        (err) => {
            console.log(err);
        }
    )

// We could have done this using callback, but we use promises to prevent callback hell
// Promises helps us to synchronise asynchronous tasks.
// In above task, we are downloading, compressing and uploading files - these all are asynchronous tasks
// So we use promise to synchronise them