import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import axios from 'axios';
import { userAC,tableAC } from '../../redux/TableReducer';

class LoginContainer extends React.Component{
    componentDidMount() {
        const url="https://t4-backend.onrender.com/data";
        axios
            .get(url).then(response=>response.data)
            .then((data)=>{this.props.tableAC({data})});}
    render(){ return(<Login table={this.props.table}  tableAC={this.props.tableAC} userAC={this.props.userAC}/>)         
    }
}
const mapStateToProps=(state)=>{return{table:state.table}}
export default connect(mapStateToProps,{userAC,tableAC}) (LoginContainer);