import { NavLink } from "react-router-dom";
export function dbName(arr){
  let arrName=[];
  for (let i=0;i<arr.length;i++){
    arrName.push(arr[i].name)
  }
  return arrName;
}
export function dbId(arr){
  let arrId=[];
  for (let i=0;i<arr.length;i++){
    arrId.push(arr[i].id)}
return arrId;
}
export function dbPassword(arr){
  let arrPassword=[];
  for (let i=0;i<arr.length;i++){
    arrPassword.push(arr[i].password)
  }
  return arrPassword;
}
export function targetUser(data, el) {
  let target;
  for(let i=0;i<data.length;i++){
    console.log(`data i:${data[i]}`, `data type :${typeof(data[i])}`)
    console.log(`el :${el}`, `el type :${typeof(el)}`)
    console.log(`Result :${el===data[i]}`)
      if(([data[i]]===el)===true){return target=i}else{return target=-1}
    }
  }   
export function Btn(Link, name) {
  return (
    <NavLink to={Link}>
      <button type="button" className="btn btn-secondary">
        {name}
      </button>
    </NavLink>
  );
}
export function navLink(link, Name) {
    return (
      <li class="nav-item">
        <NavLink className="nav-link active" to={link}>
          {Name}
        </NavLink>
      </li>
    );
  }
  export function Logout(link, Name,AC) {
    return (
      <li class="nav-item">
      <NavLink className="nav-link active" to={link}onClick={()=>{AC({name:null,password:null,status:'Blocked'})}}>
        {Name}
      </NavLink>
    </li>);
  }
  export const deleteSVG=(
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>);
export const unblockSVG=(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
<path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>)
export const blockSVG=(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
</svg>)
export const deleteAllSVG=(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bucket-fill" viewBox="0 0 16 16">
<path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z"/>
</svg>)
export const submitSVG=(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>)