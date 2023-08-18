import React from "react";
import Registation from './Registation';
import { connect } from "react-redux";
import { userAC } from "../../redux/TableReducer";


class RegistationContainer extends React.Component{
    render(){return(<><Registation userAC={this.props.userAC}/></>)}
}

const mapStateToProps=(state)=>{return{table:state.table}}
export default connect(mapStateToProps,{userAC})(RegistationContainer) ;