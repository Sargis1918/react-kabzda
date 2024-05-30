
import React from "react";
import preloader from "../../asetts/images/loader-gray.gif"
const Preloader=(props)=>{
   return (
     <div className="preloader">
       <img className="users__loader" src={preloader} />
     </div>
   );
}
export default Preloader