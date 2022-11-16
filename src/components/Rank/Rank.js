import React from "react";

const Rank = ({name, entries}) => {
  return(
    <div>
      <div className='white f3'>
        {`Hello ${name}! Your current entry count is ...`}
      </div>
      <div className='white f3'>
        {entries}
      </div>
      <p className="f6 link dim black db pointer">This rank counter also doesn't work (yet).</p>
    </div>
  )
}

export default Rank