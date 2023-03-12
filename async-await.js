console.log('person1  : showa ticket');
console.log('person2  : showa ticket');

async function preMovie(){
    const promiseWifeBringingTicket= new Promise( (resolve , reject) =>{
        setTimeout( ()=>{
            resolve(`ticket`);
        },3000);
    });

    let gotTicket=await promiseWifeBringingTicket;

    console.log(`wife: i have the ${gotTicket}`); 
    console.log('husband: we should go in');
    console. log('wife: no i am hungry');

    const getPopcorn = new Promise( (resolve,reject) =>{
        setTimeout( ()=>{
            resolve(`got the popcorn`)
        },5000)
    });

    let gotPopcorn = await getPopcorn;

    console.log(`husband: i have  ${gotPopcorn}`); 
    console.log('husband: we should go in');
    console. log('wife: i need butter on my popcorn');

    let butter = new Promise( (resolve , reject)=>{
        setTimeout(()=>{
            resolve(`got butter on popcorn`)
        } , 7000)
    });

    let gotButter = await butter;
    

    console.log(`husband: i have  ${gotButter}`); 
    console.log('husband: we should go in');
    console. log('wife: okay lets go');




}


preMovie();

console.log('person4 : shows ticket');
console.log('person5 : shows ticket');