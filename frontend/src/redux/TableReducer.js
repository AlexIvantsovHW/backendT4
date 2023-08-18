const SET_INIT='SET_INIT'
const SET_TABLE='SET_TABLE'
const SET_USER='SET_USER'
let initialState = {
  table:[
    {
    id:null,
  name:null,
  email:null,
  tLog:null,
  tReg:null,
  status:null
  }
],
auth:{
  name:null,
  password:null,
  status:'Blocked',
},
}
const TableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE:debugger;return{...state,table:[...action.state.data]};
    case SET_USER:return{...state,auth:action.auth};
    case SET_INIT:return(state=initialState);
    default:return { ...state };
  }
};
export const tableAC=(state)=>{{return{type:SET_TABLE,state}}}
export const initAC=()=>{{return{type:SET_INIT}}}
export const userAC=(auth)=>{{return {type:SET_USER,auth}}}
export const clearAC=()=>{{return {type:SET_USER}}}
export default TableReducer;