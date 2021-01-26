import React, { useState, useEffect, useCallback, useRef } from 'react';
import Imgix from "react-imgix";
import animateScrollTo from 'animated-scroll-to';

import DelayLink from "components/DelayLink";
import StringGlitch from 'components/StringGlitch';

const HomeSlider = (props) => {

  let { title, items, resource, tags, animating, isDelaying, selected, setSelected } = props;

  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);
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
    if (sliderRef.current) {
      setElementWidth(sliderRef.current.clientWidth);
    }
  }, [sliderRef]);

  useEffect(() => {
    let w = window.innerWidth
    setWindowWidth(w)
    if (w < 700) { setViewportItems(2) }
      else if (w < 1000) { setViewportItems(3) }
      else if (w < 1280) { setViewportItems(4) }
      else { setViewportItems(6) }

    if (sliderRef.current) {
      setElementWidth(sliderRef.current.clientWidth);
    }
    window.addEventListener("resize", () => {
      w = window.innerWidth
      setWindowWidth(w)
      if (w < 700) { setViewportItems(2) }
        else if (w < 1000) { setViewportItems(3) }
        else if (w < 1200) { setViewportItems(4) }
        else { setViewportItems(6) }
      if (sliderRef.current) {
        setElementWidth(sliderRef.current.clientWidth);
      }
    });

  }, [])

  useEffect(() => {
    if (selected && items.includes(selected.item)) {
      setTimeout(() => {
        debugger
        animateScrollTo(wrapperRef.current.getBoundingClientRect().top)
      }, 2000)
    } 
  }, [selected])

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
      setSelected(item, resource);
    }, [props]
  );

  let showRight = viewPortItems + currentStartIndex < totalItems;
  let showLeft = currentStartIndex > 0;

  return (
    <section className="resource-display" ref={wrapperRef}>
      <h1 className="section-title"> <StringGlitch interval={3000} text={title} /> </h1>
      <div className="slider-row" ref={sliderRef}>
        <section className={"header-display " + (animating ? "header-animating" : "")}>
          { selected && items.includes(selected.item) ? (

            <span>
              <Imgix
                src={selected.item.heroImage}
                sizes="(min-width: 1280px) 1280px, 100vw"
                imgixParams={{ ar: "5:2", auto: "format", fit: "crop" }}
                classNames="full-width"
              />
              <div className="header-display--content-wrapper flex flex-column">
                <div className="header-display--content">
                  <h1>{selected.item.name}</h1>
                  <p>{selected.item.snippet}</p>
                  <div className="header-display--content-tags">
                    { selected.item.tags && selected.item.tags.map((tag, index) => (
                      <div className="tag" key={index} style={{ backgroundColor: tags[tag].bgColor || "#007aff", color: tags[tag].color || '#FFF' }}>
                        <p>{tags[tag].name}</p>
                      </div>
                    ))}
                  </div>
                  <DelayLink 
                    delay={333} 
                    className="watch-now-button" 
                    onDelayStart={() => isDelaying(true)} 
                    to={{
                      pathname: `${selected.resource}/${selected.item.key}`, 
                      state: { 
                        resource: selected
                      }
                    }}  
                  >
                    <p>See More</p>
                  </DelayLink>
                </div>
              </div>
            </span>
          ) : (
            <span>
              {/* <HeaderAnimation /> 
              <div className="image--aspect-wrapper--16-9" style={{ backgroundImage: "url(/jjpp-header-slim.svg)" }}></div>*/}
              {/* <Imgix
                src="https://jj-plus-plus.imgix.net/images/jjpp-header-slim.svg"
                sizes="(min-width: 1280px) 1280px, 100vw"
                imgixParams={{ ar: "5:2", auto: "format", fit: "crop" }}
                classNames="full-width"
              />
              <h1 className="header-display--title">This is JJ</h1> */}
            </span>
          )
          }
        </section>
        <div className={"slider " + (selected ? "has-selected" : "")}>
          {showLeft ? (
            <div onClick={pull} className="push-arrow-ui push-arrow-left">
              <div className="arrow-left"></div>
            </div>
          ) : null}
          <div className="slider-items" style={{transform: `translate3d(${distance}px, 0, 0)` }}>
            {
              items.map((item, index) => {
                return (
                  <div className={"slide-wrapper " + (selected && selected.item === item ? "selected" : "") } key={index}>
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
    </section>
  )
}

export default HomeSlider;