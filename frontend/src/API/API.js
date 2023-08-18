import axios from "axios";
const baseUrl='http://localhost:3001/data'

const updateData=(tableAC)=>{
  const url=baseUrl;
    axios
        .get(url).then(response=>response.data)
        .then((data)=>{tableAC({data})}); 
}
const userRequest=(method,name,url,data,tableAC)=>{
  axios({
    method: method,
    name: name,
    url: url,
    data: data,
    config: { headers: { "Content-Type": "multipart/form-data" } },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
    updateData(tableAC);
}
const API = {
  getForm(fData,values,) {
    axios({
      method: "post",
      url: "http://localhost:3001/form",
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response.response.data);
      })
    console.log("Form submit data", values);

  },
  getBlock(isChecked,tableAC) {
    let numbArr=isChecked.map((string)=>parseInt(string))
    const url="http://localhost:3001/block";
    userRequest('post','block',url,numbArr,tableAC)
  },

  getUnBlock(isChecked,tableAC) {
    let numbArr=isChecked.map((string)=>parseInt(string))
    const url="http://localhost:3001/active";
    userRequest('post','unblock',url,numbArr,tableAC)
  },
  getDelete(isChecked,tableAC) {
    let numbArr=isChecked.map((string)=>parseInt(string))
    const url="http://localhost:3001/delete";
    userRequest('post','delete',url,numbArr,tableAC)
  },
  getDelAll(tableAC) {
    const data = "dataTable";
    const url="http://localhost:3001/allDelete";
    userRequest('post','deleteAll',url,data,tableAC)
  },
  getLog(fData,tableAC) {
    debugger;
    axios({
      method:'post',
      url: 'http://localhost:3001/log',
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
      debugger;
      updateData(tableAC);
  },
};
export default API;
