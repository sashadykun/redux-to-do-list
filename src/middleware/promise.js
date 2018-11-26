export default (store) => (next) => async (action) => {
    
    if(!action.payload || !action.payload.then ){
        //no payload property
        // or
        //not a promise
        return next(action);
    }
    

    //hes a promise on the payload property


const resp = await action.payload;
    const newAction ={
            ...action,
            payload:resp
    }
        


store.dispatch(newAction)
return resp;
}

//     action.payload.then((resp) => {
//         const newAction ={
//             ...action,
//             payload:resp
//         }

//         store.dispatch(newAction);

//     });

//     return action.payload;


// export default function (store){
//     return function(next){
//         return function(action){
//             //code goes here
//         }
//     }
// }