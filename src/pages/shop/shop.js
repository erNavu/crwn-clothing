import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import SHOP_DATA from "./shopData";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections?.length
          ? collections.map(({ id, ...otherCollectionProps }) => (
              <CollectionPreview key={id} {...otherCollectionProps} />
            ))
          : null}
      </div>
    );
  }
}

export default Shop;
