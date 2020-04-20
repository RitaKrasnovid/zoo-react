import React from "react";

import "./section-layout.scss";

const SectionLayout = ({ children }) => {
  return (
    <div className="sectionLayout">
      <section>{children}</section>
    </div>
  );
};

export default SectionLayout;
