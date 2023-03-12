const user={
    name:'peeyush' ,
    lastActivityTime : new Date() ,
    posts : []

};

console.log(user.lastActivityTime);

function updateLastUserActivity(){
    return new Promise( (resolve , reject) =>{
        setTimeout( ()=>{
        const dateTime = new Date();
        user.lastActivityTime=dateTime;

        resolve(dateTime);
        },1000)
    })
}



function createPost(post){
    return new Promise( (resolve , reject) =>{
        setTimeout( ()=>{
            user.posts.push(post);
            updateLastUserActivity();
            resolve();
        },1000)
    })
}

function deletePost(){
    return new Promise( (resolve , reject)=>{

        setTimeout( ()=>{
            if(user.posts.length>0){
                const deletedPost=user.posts.pop();
                resolve(deletedPost);
            }
            else{
                reject("ERROR : No post available to be deleted")
            }
        } , 1000)

    })
}

async function testing() {
    try {
      await Promise.all([createPost({ title: 'POST1' }), createPost({ title: 'POST2' }), createPost({ title: 'POST3' }), updateLastUserActivity()]);
  
      console.log(user.lastActivityTime);
      console.log(user.posts);
  
      const deletedPost = await deletePost();
      console.log(user.lastActivityTime);
      console.log(user.posts);
      console.log(`Deleted post: ${JSON.stringify(deletedPost)}`);
    } catch (error) {
      console.log(error);
    }
  }
  
  testing();


// createPost({title:'POST1'})
// .then( ()=>{
//     updateLastUserActivity()
//     .then( ()=>{
//         console.log(user.posts);
//         console.log(user.lastActivityTime);
//     })
// })




// Promise.all([createPost({title:'POST1'}) , createPost({title:'POST2'}) , createPost({title:'POST3'}) , updateLastUserActivity()])
// .then(()=>{

    
//     console.log(user.lastActivityTime);
//     console.log(user.posts);

//     deletePost()
//     .then( ()=>{
//         console.log(user.lastActivityTime);
//         console.log(user.posts);
//     })
// })






