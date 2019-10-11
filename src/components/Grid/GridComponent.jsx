import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";

export default function GridComponent(props) {
  const { image, header, description } = props;
  const {user } = useAuth0();
  
  if(!user){
    return (
      <div className="col-md-4 col-sm-12 p-5">
        <img src={image} alt="Default Grey Box" className="mb-3" />
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    );

  }
  return (
    <div className="col-md-4 col-sm-12 p-5">
      <img src={image} alt="Default Grey Box" className="mb-3" />
      <h3>{header}</h3>
      <p>{description}</p>
      
      <button disabled={!user.email_verified}>Order</button>
    </div>
  );
}
