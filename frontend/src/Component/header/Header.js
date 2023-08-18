import React from "react";
import { connect } from "react-redux";

import { tableAC,userAC } from "../../redux/TableReducer";
import { Logout, navLink} from "../CommonFunc";
const Header = (props) => {
  return (
    <div className="bg-primary.bg-gradient">
      <ul class="nav justify-content-center">
      {props.table.auth.status==='Active'?Logout('/login','Logout',props.userAC):navLink("/login", "Login")}
        {navLink("/", "User management")}
        {navLink("/registration", "Registration")}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {return { table: state.table };};
export default connect(mapStateToProps, { tableAC,userAC })(Header);
