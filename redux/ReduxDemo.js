const redux= require("redux");
const reduxLogger=require("redux-logger");

const createStore=redux.createStore;
const combineReducer=redux.combineReducers;
const applyMiddleWare=redux.applyMiddleware;

const logger=reduxLogger.createLogger();

const BUY_CAKE="BUY_CAKE";

const BUY_ICECREAM="BUY_ICECREAM";

const initialCakeState={noOfCakes:10}
const initialIcecreamState={noOfIcecreams:20}

//buy cake action creator
function buyCake() {
    return{
        type:BUY_CAKE,
        payload:"First Redux cake action data"
    }
}
//-----------------------
function buyIcecream() {
    return{
        type:BUY_ICECREAM,
        payload:"First Redux icecream action data"
    }

    
}
//-------reducer---------
const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{...state,noOfCakes:state.noOfCakes-1}
            default:return state;

    }
}

const iceCreamReducer=(state=initialIcecreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{...state,noOfIcecreams:state.noOfIcecreams-1}
            default:return state;

    }
}
//combinr reducer
const rootReducer=combineReducer({cake:cakeReducer,icecream:iceCreamReducer})

//----create a store------
const store=createStore(rootReducer,applyMiddleWare(logger));

console.log("Initial state : "+store.getState())
//dispatch action
store.dispatch(buyCake());
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

