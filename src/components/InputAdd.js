import { Input } from "antd";
import Search from "antd/lib/transfer/search";
import React from "react";
import "./InputAdd.css";
import { useState } from "react";
import { EnvironmentFilled } from "@ant-design/icons";

function InputAdd(props) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  function handleRemove(idx) {
    const input = props.addInputs.splice(idx, 1);
    props.setAddInputs(input);
    props.setMarkers([props.markers[0] , props.markers[1]])
    props.setHideInputC(false)
  }

  return (
    <div>
      {props.index == 0 ? (
        <div>
          <EnvironmentFilled
            style={{ position: "absolute", top: "20px", zIndex: "2" }}
          />
          <input
            className="search"
            type="text"
            value={props.markers[0] ? "A" : value1}
            placeholder="Find Location"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
              zIndex: "2",
            }}
          />
          <div>
            <EnvironmentFilled
              style={{ position: "absolute", top: "75px", zIndex: "2" }}
            />
            <input
              className="search"
              type="text"
              value={props.markers[1] ? "B" : value2}
              placeholder="Find Location"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px",
                top: "50px",
                zIndex: "2",
              }}
            />
          </div>
        </div>
      ) : props.index == 1 ? (
        <div>
          <div>
            <EnvironmentFilled
              style={{ position: "absolute", top: "120px", zIndex: "2" }}
            />
            <input
              className="search"
              type="text"
              value={props.markers[2] ? "C" : value3}
              placeholder="Find Location"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px",
                top: "100px",
                zIndex: "2",
              }}
            />
          </div>
          <div>
        
        <button
            className="removeInput2"
            onClick={handleRemove}
            style={{
              position: "absolute",
              top: "62px",
              zIndex: "2",
              left: "1060px",
            }}
            style={{
              position: "absolute",
              top: "112px",
              zIndex: "2",
              left: "1060px",
            }}
          >
            -
          </button>
        </div>
        </div>
      ) : null
        
      }
    </div>
  );
}

export default InputAdd;
