import React from "react";
import CollectionItem from "../collection-item/CollectionItem.js";
import "./CollectionPreview.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items?.length
          ? items
              .filter((item, idx) => idx < 4)
              .map(({ id, ...otherItemProps }) => (
                <CollectionItem key={items.id} {...otherItemProps} />
              ))
          : null}
      </div>
    </div>
  );
}

export default CollectionPreview;
