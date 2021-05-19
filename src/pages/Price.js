import "antd/dist/antd.css";
import React from "react";
import "./Price.css";
import {
  SyncOutlined,
  CreditCardOutlined,
  CodeSandboxOutlined,
  CheckCircleOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { Modal, Button } from "antd";
import { Link } from "react-router-dom";


function Price(props) {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="page">

     <div>


<div>
      {(props.markers.length == 2) ?
      (<div>
      <div>
        <EnvironmentFilled className="icona" />
        <h2>A</h2>
      </div>
      <div className="a">
        <input type="text" className="name" placeholder="Name" />
        <input type="rext" className="mobile" placeholder="Mobile" />
      </div>
      <div>
        <EnvironmentFilled className="iconb" />
        <h2>B</h2>
      </div>
      <div className="b">
        <input type="text" className="name" placeholder="Name" />
        <input type="rext" className="mobile" placeholder="Mobile" />
      </div>
      </div>
      ) 
      : 
      (
      <div> 
        <div>
        <EnvironmentFilled className="icona" />
        <h2>A</h2>
      </div>
      <div className="a">
        <input type="text" className="name" placeholder="Name" />
        <input type="rext" className="mobile" placeholder="Mobile" />
      </div>
      <div>
        <EnvironmentFilled className="iconb" />
        <h2>B</h2>
      </div>
      <div className="b">
        <input type="text" className="name" placeholder="Name" />
        <input type="rext" className="mobile" placeholder="Mobile" />
      </div>
      <div>
        <EnvironmentFilled className="iconc" />
        <h2>C</h2>
      </div>
      <div className="c">
        <input type="text" className="name" placeholder="Name" />
        <input type="rext" className="mobile" placeholder="Mobile" />
      </div> 
    </div>)}
 </div>

      
      <div className="extra">
        <h2>Extra service</h2>

        <Button
          onClick={showModal}
          className="open"
          style={{
            borderRadius: "100%",
            backgroundColor: "black",
            color: "white",
          }}
        >
          +
        </Button>
        <Modal
          title="Extra services"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            <CreditCardOutlined style={{ marginLeft: "30px" }} />
            <h3>COD +50 THB</h3>
            <CheckCircleOutlined style={{ marginLeft: "150px" }} />
          </p>
          <p>
            <SyncOutlined style={{ marginLeft: "30px" }} />
            <h3>Return Trip +100 THB</h3>
            <CheckCircleOutlined style={{ marginLeft: "95px" }} />
          </p>
          <p>
            <CodeSandboxOutlined style={{ marginLeft: "30px" }} />
            <h3>Big parcel +200 THB</h3>
            <CheckCircleOutlined style={{ marginLeft: "105px" }} />
          </p>
        </Modal>
        <h2>*Open popup</h2>
      </div>
      
      </div>

      <SyncOutlined
        className="icon"
        style={{
          position: "absolute",
          left: "850px",
          top: "475px",
        }}
      />
      <CreditCardOutlined
        className="icon"
        style={{ position: "absolute", left: "800px", top: "475px" }}
      />

      <div className="extra">
        <h2 style={{ marginRight: "125px" }}>Total distrance</h2>
        <h2>  {(props.markers.length == 2)? Math.round(props.result.distranseAB).toFixed(1) : (props.markers.length == 3)?  Math.round(props.result.distranseAB + props.result.distranseAB).toFixed(1) : 0} KM</h2>
      </div>
      <div className="extra">
        <h2 style={{ marginRight: "235px" }}>Fee</h2>
        <h2> {(props.markers.length == 2)? Math.round(props.result.distranseAB*15).toFixed(1) : (props.markers.length == 3)?  Math.round((props.result.distranseAB + props.result.distranseAB)*15).toFixed(1) : 0} THB</h2>
      </div>

      <div className="extra">
        <a href="./MapTest.js">  <button
            style={{
              height: "40px",
              width: "175px",
              marginLeft: "78px",
              marginRight: "75px",
              color: "black",
            }}
          >
            Back
          </button></a>
        <a href="./MapTest.js">
          <button
            style={{
              width: "200px",
              backgroundColor: "green",
              color: "white",
              height: "40px",
            }}
          >
            Confirm
          </button>
          </a> 
      </div>
    </div>
    )
}

export default Price
