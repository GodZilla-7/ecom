import React from "react";
function Heading(props){
    return(
        <div className="flex flex-col items-center justify-between mt-12">
        <h1 className="text-[rgb(95,15,42)] text-lg">{props.Heading}</h1>
        </div>
    );
}
export default Heading;