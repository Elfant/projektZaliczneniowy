import * as React from "react";

interface OwnProps {
  text: string;
}

const SectionHeader: React.FC<OwnProps> = (props) => {
  return (
    <div className="section-header">
      <h5 className="section-header__text">{props.text}</h5>
      <hr className="section-header__line" />
    </div>
  );
};

export default SectionHeader;
