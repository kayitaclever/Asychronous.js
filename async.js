// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
//  The function should log the message to the console after the specified delay time.

async function logMessage(message,delaytime){
    const results= await new Promise(resolve=>setTimeout(resolve,delaytime));
    console.log(message);
}

logMessage("Hi Clever",4000);

// You hync.jsave an array of user IDs and a function getUserData(id) that returns a Promise with user data
//  when given a user ID. Write an asynchronous function that fetches and logs the data for each user 
//  ID one by one, in sequence.

// async function getUserData(IDs){
//     for(id of IDs){ 
//     // const id=IDs[i]
//     const userData = await new Promise(resolve=>(getUserData(id)));
//     // const results=await new Promise(resolve=>{userData})   
    
// }
// return {userData}
// }


async function getUserData(IDs) {
    const userDataList = [];
    for (const id of IDs) {
      try {
        const userData = await getUserDataById(id);
        userDataList.push(userData);
      } catch (error) {
        console.error(`Failed to fetch user data for ID ${id}: ${error}`);
      }
    }
    return userDataList;
  }
  const userIds = [1, 2, 3, 4, 5];
getUserData(userIds);

  
    // Implementation that returns a Promise with user data for a given ID


    // You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the 
    // task is successful and rejects if there's an error. Write a function that calls performTask() 
    // and logs a custom success message if the task is successful, and a custom error message if there's 
    // an error.
    
async function performTask(task){
  try{

    await performTask()


      console.log("task completed successfully")
  }
  catch(error){
    console.error("Your task is not sussessful")
  }
}
  
performTask(" Go for lunch")

