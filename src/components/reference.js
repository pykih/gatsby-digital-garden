import React from "react";
import { LinkToStacked } from "react-stacked-pages-hook";

import "./reference.css";

const Reference = ({ node }) => {
  return (
    <div className="margin">
      <LinkToStacked to={node.slug} className="reference">
		  {node.title}
          {node.content}
      </LinkToStacked>
    </div>
  );
};

export default Reference;
