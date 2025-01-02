function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "chaicode", url: "https://www.chaicode.com"})
        }, 1000);
    })
}

async function getUserData(){
    try {
        console.log("fetching user data...");
        const userData = await fetchUserData() // await keyword only used when the function was created using async keyword
        console.log("user data fetched successfully");
        
        console.log("User Data: ", userData);
    } catch (error) {
        console.log("Error fetching data", error);
        
    }
}

getUserData();