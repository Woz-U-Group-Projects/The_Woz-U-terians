import React from "react";

import axios from "axios";

class Phones extends React.Component {
  state = {
    phoneData: [],
  };

  fetchPhoneData = () => {
    var encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then((response) => {
      this.setState(() => {
        return {
          phoneData: response.data,
        };
      });
    });
  };

  componentDidMount() {
    this.fetchPhoneData();
  }

  render() {
    console.log(this.state.phoneData);
    if (this.state.phoneData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }
    const phones = this.state.phoneData.map(phone => (
      <div key={phone.phone_model}>
        <ul>
          <h2><em>{phone.phone_model}</em>:</h2>
          <li>Phone Manufacturer: {phone.phone_manufacturer}</li>
          <li>Storage Capacity: {phone.storage_capacity}</li>
          <li>Phone Color: {phone.color}</li>
          <li>Qty. on hand: {phone.quantity_on_hand}</li>
          <li>Qty. on order: {phone.on_order}</li>
          <li>Qty. in transit: {phone.in_transit}</li>
          <li>Qty anitipated to be sold: {phone.anticipated_sales}</li>       
        </ul>
      </div>
    ));
    return <div>{phones}</div>;
  }
}

export default Phones;
