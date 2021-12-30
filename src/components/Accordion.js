import React, { useState } from "react";

const Accordion = ({ list }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const renderlist = list.map(({ title, content }, index) => {
    const active = activeIndex===index?'active':''
    return (
      <React.Fragment key={index}>
        <div className={`title ${active}` } onClick={()=>{setActiveIndex(index)}}>
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className={`content ${active}`}>
          <p className="transition ">
            {content}
          </p>                                               
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion" style={{ marginTop: "50px" }}>
      {renderlist}
    </div>
  );
};

export default Accordion;
