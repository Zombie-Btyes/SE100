// console.log("Step 1");
// setTimeout(() => {
//     console.log("Step 2");
// }, 1000);
// console.log("Step 3");


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved after 2 seconds");
//     }, 2000);
// });

// const anotherPrimise = new Promise((resolve, reject) => {
//     const complexResule = 1+2
//     // resolve("Some random string")
//     // reject("an error occurred")
// });

// anotherPrimise.then((resolvedValue) => {
//     console.log(resolvedValue);
// }, (rejectedValue) => {
//     console.log("this is the rejected value: ", rejectedValue);
// }).catch((rejectedValue) => {
//     console.log("Error caught:", rejectedValue);
// }).finally(() => {
//     console.log("This will always run, regardless of success or failure.");
// });

// //Exercise 1
// function getNumberPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(10);
//         }, 2000);
//     });
// }

// Test the function
// getNumberPromise().then((value) => {
//     console.log(value); // Should log 10 after 2 seconds
// });

// const task1 = () => new Promise((resolve) => setTimeout(() => resolve("Task 1 complete"), 1000));
// const task2 = () => new Promise((resolve) => setTimeout(() => resolve("Task 2 complete"), 1000));
// const task3 = () => new Promise((resolve) => setTimeout(() => resolve("Task 3 complete"), 1000));

// task1()
//   .then((result1) => {
//     console.log(result1);
//     return task2();
//   })
//   .then((result2) => {
//     console.log(result2);
//     return task3();
//   })
//   .then((result3) => {
//     console.log(result3);
//   })
//   .catch((error) => console.error("Error occurred:", error));

//   exercise 2

function fetchData(){
    // Write your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data retrieved");
        }, 1000);
    });
}
function processData(data){
    // Write your code here
    const formattedData = data + " and processed";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Processed: ${formattedData}`);
        }, 2000);
    });
}

function displayData(data) {
    // Write your code here
    console.log(data);
}
function displayData(data) {
    // Write your code here
    console.log(data);
}

// Chaining the functions
// fetchData()
//     .then((data) => processData(data))
//     .then((processedData) => displayData(processedData)); //data retrieved and processed



const payload = {
    ticker: 'APPL',
    name: 'Apple Inc',
    price: 171.48,
}
fetch(
    "https://www.alphavantage.co/query?function=OVERVIEW&symbol=GOOG&apikey=7FSBLYKDMB41QDX3",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "symbol": "AMD"
        })
    }
).then(response =>{
    return response.json();
})
.then(data => {
    console.log(data);
    const annualEarnings = data["AnnualEarnings"]
    for(let i = 0; i < annualEarnings.length; i++){
        if(annualEarnings[i]["fiscalDateEnding"] === "2022-12-31"){
            console.log("Earnings per share for 2022: ", annualEarnings[i]["reportedEPS"])
            return
        }
    }
})
// .catch(errorMessage => {
//     console.error("Error fetching data:", errorMessage);
// });