import React from "react";


const DataName = (props) => {
    return (
        <div className="flex justify-center mt-10 text-[50px] font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {
              props.data && [props.data].map(post => {
                return(
                  <div key="locationName">
                    <h1>{post.name.split(",")[0]}</h1>
                  </div>
                )
            })}
            <div>
              
            </div>
        </div>
    )
}

export default DataName;