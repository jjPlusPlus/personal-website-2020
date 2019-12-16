import React, { useState, useEffect, useCallback, useRef } from 'react';
import Imgix from "react-imgix";

const HomeSlider = (props) => {

  let items = props.items;

  // force items to an Array with keys as an ID property
  if (typeof items !== Array) {
    const tempArray = [];
    let newItemWithKey;
    debugger;
    Object.keys(items).forEach(key => {
      newItemWithKey = items[key];
      items[key].id = key;
      tempArray.push(newItemWithKey);
    });

    items = tempArray;;
  }

  const totalItems = items.length;

  const viewPortItems = 4;

  const elementRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [currentStartIndex, updateStartIndex] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.clientWidth);
    }
  }, [elementRef]);

  const push = useCallback(
    () => {
      setDistance(distance - width + 75);
      updateStartIndex(currentStartIndex + viewPortItems);
    },[width, distance, currentStartIndex]
  );

  const pull = useCallback(
    () => {
      setDistance(distance + width - 75);
      updateStartIndex(currentStartIndex - viewPortItems);
    }, [width, distance, currentStartIndex]
  );

  const select = useCallback(
    (item) => {
      props.setSelected(item, props.resource);
    }, [props]
  );

  let showRight = viewPortItems + currentStartIndex < totalItems;
  let showLeft = currentStartIndex > 0;

  return (
    <div className="slider-row" ref={elementRef}>
      <div className={"slider " + (props.selected ? "has-selected" : "")}>
        {showLeft ? (
          <div onClick={pull} className="push-arrow-ui push-arrow-left">
            <div className="arrow-left"></div>
          </div>
        ) : null}
        <div className="slider-items" style={{transform: `translate3d(${distance}px, 0, 0)` }}>
          {
            items.map((item, index) => {
              console.log(item.listImage);
              return (
                <div className={"slide-wrapper " + (props.selected && props.selected.item === item ? "selected" : "") } key={index}>
                  <div className="slide" onClick={() => select(item)}>
                    <Imgix
                      src={item.listImage}
                      sizes="10vw"
                      imgixParams={{ ar: "3:4", auto: "format", fit: "crop" }}
                      classNames="full-width"
                    />
                    
                    <div className="slide-overlay">
                      <p className="slide-overlay-title">{item.name}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          { showRight ? (
            <div onClick={push} className="push-arrow-ui push-arrow-right">
              <div className="arrow-right"></div>
            </div>
          ) : null}
        </div>
        
      </div>
    </div>
  )
}

export default HomeSlider;