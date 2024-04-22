import React, { useState } from "react";
import "./checkout.css";
import { useNavigate } from "react-router-dom";
import { strings } from "../../constants/fileWithConstants";

const Checkout = ({ cartItems }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Current location:", { latitude, longitude });
          alert(
            `Current location: Latitude ${latitude}, Longitude ${longitude}`
          );
        },
        (error) => {
          console.error("Error getting current location:", error);
          alert("Error getting current location. Please try again later.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Delivery information:", deliveryInfo);
    setDeliveryInfo({
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
    });
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>{strings.CHECKOUT}</h2>
      <div className="order-summary">
        <h3>{strings.ORDER_SUMMARY}</h3>
        <ul>
          {cartItems?.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="delivery-info">
        <h3>{strings.DELIVERY_INFO}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">{strings.FULL_NAME}</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={deliveryInfo.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">{strings.ADDRESS}</label>
            <input
              type="text"
              id="address"
              name="address"
              value={deliveryInfo.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">{strings.CITY}</label>
            <input
              type="text"
              id="city"
              name="city"
              value={deliveryInfo.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">{strings.ZIP}</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={deliveryInfo.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">{strings.COUNTRY}</label>
            <input
              type="text"
              id="country"
              name="country"
              value={deliveryInfo.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="location-button-container">
            <button
              type="button"
              className="btn-location"
              onClick={handleLocationClick}
            >
              {strings.USE_LOCATION}
            </button>
          </div>
          <button type="submit" className="btn-submit">
            {strings.PLACE_ORDER}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
