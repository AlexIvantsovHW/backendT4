import React from "react";
import Table from "./Table.js";
import { connect } from "react-redux";
import axios from "axios";
import { tableAC,userAC } from "../../redux/TableReducer";
import { compose } from "redux";
import { withAuthNavigate } from "../AuthNavigate.js";

class TableContainer extends React.Component {
  componentDidMount() {
    const url="http://localhost:3001/data";
    axios
        .get(url).then(response=>response.data)
        .then((data)=>{this.props.tableAC({data})});
      }
  componentDidUpdate(prevProps,prevState){if(prevProps.table!==this.props.table){this.setState(this.props.table)}}
    render() {return(<><Table tableAC={this.props.tableAC}{...this.props} userAC={this.props.userAC}/></>)}
}
const mapStateToProps=(state)=>{return{table:state.table}}
export default compose(
  connect(mapStateToProps,{tableAC,userAC}),
  withAuthNavigate)
  (TableContainer) ;

