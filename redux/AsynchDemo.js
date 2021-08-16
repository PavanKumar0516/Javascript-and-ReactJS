const redux= require("redux");
const reduxLogger=require("redux-logger");
const thunkMiddleware=require("redux-thunk").default;
const axios=require("axios");
const logger=reduxLogger.createLogger();

const createStore=redux.createStore;
const combineReducer=redux.combineReducers;
const applyMiddleWare=redux.applyMiddleware;

//initial state
const initialEmpState={
    loading:false,
    emps:[],
    error:''
}
//action name
const FETCH_EMPS_REQUEST="FETCH_EMPS_REQUEST"
const FETCH_EMPS_SUCCESS="FETCH_EMPS_SUCCESS"
const FETCH_EMPS_FAILURE="FETCH_EMPS_FAILURE"

//-------------------
const fetchEmpRequests=()=>{
    return{
        type:FETCH_EMPS_REQUEST,
        payload:"fetching emp req"
    }
}
const fetchEmpSuccess=()=>{
    return{
        type:FETCH_EMPS_SUCCESS,
        payload:"fetching emp success"
    }
}
const fetchEmpFailure=()=>{
    return{
        type:FETCH_EMPS_FAILURE,
        payload:"fetching emp failure"
    }
}
//---------reducer------------------
const rootReducer=(state=initialEmpState,action)=>{
    console.log("in reducer..."+action.type);
    switch(action.type){
        case FETCH_EMPS_REQUEST:
            return{
                ...state,loading:true
            }
            break;
        case FETCH_EMPS_SUCCESS:
             return{
                loading:false,
                emps:action.payload,
                error:""
                }
        default : return{
            loading:false,emps:[],error:action.payload
        }
    }
}
//action creator
const fetchEmp=()=>{
    return function(dispatch){
        axios.get("http://localhost:3000/emps")
        .then((responseData)=>{
            const es=responseData.data;
            console.log("req proceessed : "+es[0].empId);
            dispatch(fetchEmpSuccess(es));
        })
        .catch((errorRes)=>{
            console.log("req failed : "+errorRes.message);
            dispatch(fetchEmpFailure(errorRes.message));
        });
    }
}
//-----create store----
const store=createStore(rootReducer,applyMiddleWare(logger,thunkMiddleware))
console.log("Initial State :"+store.getState());
store.dispatch(fetchEmp());



