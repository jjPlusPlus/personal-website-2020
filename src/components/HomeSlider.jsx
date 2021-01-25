import React, { useState, useEffect, useCallback, useRef } from 'react';
import Imgix from "react-imgix";

const HomeSlider = (props) => {

  let items = props.items;

  const elementRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);
  const [currentStartIndex, updateStartIndex] = useState(0);
  const [distance, setDistance] = useState(0);
  const [viewPortItems, setViewportItems] = useState(2)

  // force items to an Array with keys as an ID property
  if (typeof items !== Array) {
    const tempArray = [];
    let newItemWithKey;

    Object.keys(items).forEach(key => {
      newItemWithKey = items[key];
      if (items[key]) {
        items[key].id = key;
        tempArray.push(newItemWithKey);
      }
     
    });

    items = tempArray;;
  }

  const totalItems = items.length;

  useEffect(() => {
    if (elementRef.current) {
      setElementWidth(elementRef.current.clientWidth);
    }
  }, [elementRef]);

  useEffect(() => {
    let w = window.innerWidth
    setWindowWidth(w)
    if (w < 700) { setViewportItems(2) }
      else if (w < 1000) { setViewportItems(3) }
      else if (w < 1280) { setViewportItems(4) }
      else { setViewportItems(6) }

    if (elementRef.current) {
      setElementWidth(elementRef.current.clientWidth);
    }
    window.addEventListener("resize", () => {
      w = window.innerWidth
      setWindowWidth(w)
      if (w < 700) { setViewportItems(2) }
        else if (w < 1000) { setViewportItems(3) }
        else if (w < 1200) { setViewportItems(4) }
        else { setViewportItems(6) }
      if (elementRef.current) {
        setElementWidth(elementRef.current.clientWidth);
      }
    });

  }, [])

  const push = useCallback(
    () => {
      setDistance(distance - elementWidth + 75);
      updateStartIndex(currentStartIndex + viewPortItems);
    },[elementWidth, distance, currentStartIndex]
  );

  const pull = useCallback(
    () => {
      setDistance(distance + elementWidth - 75);
      updateStartIndex(currentStartIndex - viewPortItems);
    }, [elementWidth, distance, currentStartIndex]
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
        </div>
        { showRight ? (
          <div onClick={push} className="push-arrow-ui push-arrow-right">
            <div className="arrow-right"></div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default HomeSlider;