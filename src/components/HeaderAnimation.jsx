import React from 'react';

const HeaderAnimation = (props) => {
  return (
    <svg version="1.1" id="headerAnimation"  x="0px" y="0px" viewBox="0 0 1920 770.3" >
      <rect id="back-wall-base" x="498" style={{ fill : "#604EA0" }} width="1422" height="770.3"/>
      <linearGradient id="backwall-cover1" gradientUnits="userSpaceOnUse" x1="1208.9934" y1="770.3339" x2="1208.9934" y2="-9.094947e-13">
        <stop offset="3.864183e-02" style={{ stopColor: "#34225C", stopOpacity: "0.97" }} />
        <stop offset="0.3837" style={{ stopColor: "#4B3A7F", stopOpacity: "0.9579" }} />
        <stop offset="1" style={{ stopColor: "#5C569B", stopOpacity: "0.8" }} />
      </linearGradient>

      <rect id="back-wall-cover" x="498" style={{ fill: "url(#back-wall-cover-1)" }} width="1422" height="770.3" />

      <polygon id="left-wall-base" style={{ fill: "#492F8E" }} points="2.4,0 498,0 497.7,770.3 125.6,770.3 0.8,770.3 "/>

      <linearGradient id="left-wall-cover-1" gradientUnits="userSpaceOnUse" x1="0" y1="385.167" x2="497.9869" y2="385.167">
        <stop offset="5.997596e-02" style={{ stopColor: "#3F247A", stopOpacity: "0.5" }} />
        <stop offset="0.8932" style={{ stopColor: "#503481", stopOpacity :"0.5" }} />
      </linearGradient>

      <polygon id="left-wall-cover" style={{ fill: "url(#left-wall-cover-1)" }} points="1.6,0 498,0 497.7,660.2 125,770.3 0,770.3 "/>

      <path id="chair-back" style={{ fill: "#333333" }} d="M994.6,679.8l35.5-379.9c0,0,1.7-63-59.2-63c-60.9,0-146.6,0-146.6,0h-30.2
        c0,0-85.7,0-146.6,0c-60.9,0-59.2,63-59.2,63l35.5,379.9H994.6z"/>

      <path id="chair-arm" style={{ fill: "#333333" }} d="M662.7,710.9l-74.5,0.5l-10.1-108.2c0,0-1.7-63,59.2-63c60.9,0,82.3,0,82.3,0
        L662.7,710.9z"/>

      <rect id="window" x="1320.7" style={{ fill: "#212121" }} width="599.6" height="441.8"/>
      <path id="hoodie-inside-black" style={{ fill: "#181818" }} d="M699.5,418.7l100.3,55.6l108-55.6c0,0,38.5-155.1,28.5-181.7
        s-30-60.8-57.1-62.2c-27.1-1.4-63.4-24.3-79.5-24.3c-16.1,0-67.2,7.1-76.6,27.1c-9.4,20-59.3,89.2-50.8,117.4
        c8.6,28.1,11.4,51.2,11.4,69.6S699.5,418.7,699.5,418.7z"/>
      <path id="face-base" style={{ fill: "#A0742D" }} d="M825.4,375.7h-53.6c-38.1,0-69-30.9-69-69V253c0-38.1,10.9-102.5,49.1-102.5h101.6
        c38.1,0,41,64.4,41,102.5v53.6C894.5,344.8,863.6,375.7,825.4,375.7z"/>
      <path id="hairs" d="M730.1,168.1c0,0,23.4,9,31.9,6.7c8.5-2.4,16,5.9,18-10c2-15.9,12.7,0.5,21.5-0.5c8.9-1,17.9,5.7,21.7,3.3
        c3.8-2.4,29.4,12.2,31.6,3c2.2-9.2-3.6-34.4-23.5-34.4S730.1,168.1,730.1,168.1z"/>
      <path id="neck" style={{ fill: "#A0742D" }} d="M853.3,364.6c0,0,14.8,73.7,36.1,77.1L805,486.2h-15.7l-86.5-44.4
        c31.6,0,36.1-77.1,36.1-77.1H853.3z"/>
      <path style={{ fill: "#A0742D" }} d="M719.7,279.8c0,0-2.4,31.9,10.4,44.7c12.8,12.8,30.1,22.8,30.1,22.8l8.4-25.7h54.2l14.3,25.7
        l12.8-25.7c0,0,44.8-28.1,39.5-41.9"/>

      <linearGradient id="face-gradient-1" gradientUnits="userSpaceOnUse" x1="702.7612" y1="263.0852" x2="894.4567" y2="263.0852">
        <stop offset="8.133013e-03" style={{ stopColor : "#594609", stopOpacity : "0.5" }} />
        <stop offset="0.7819" style={{ stopColor : "#9D722B", stopOpacity : "0.5" }} />
      </linearGradient>

      <path id="face-gradient" style={{ fill: "url(#face-gradient-1)" }} d="M825.4,375.7h-53.6c-38.1,0-69-30.9-69-69V253
        c0-38.1,10.9-102.5,49.1-102.5h101.6c38.1,0,41,64.4,41,102.5v53.6C894.5,344.8,863.6,375.7,825.4,375.7z"/>

      <path id="hairs-1" d="M730.1,168.1c0,0,23.4,9,31.9,6.7c8.5-2.4,16,5.9,18-10c2-15.9,12.7,0.5,21.5-0.5c8.9-1,17.9,5.7,21.7,3.3
        c3.8-2.4,29.4,12.2,31.6,3c2.2-9.2-3.6-34.4-23.5-34.4S730.1,168.1,730.1,168.1z"/>

      <path id="beard-solid" style={{ fill: "#392612" }} d="M896.3,251.8 M896.3,181.3v125c0,38.7-31.4,70.1-70.1,70.1h-54.5
        c-38.7,0-70.1-31.4-70.1-70.1V200.8l14.5-18.8c0,0-1.8,110.3,1.4,117.6c5.1,11.2,22.2,27,26.1,23.6c3.9-3.4,10.6-21.7,16.9-21.7
        c6.3,0,38.4-4.8,38.4-4.8l38.4,4.8c6.3,0,13,18.3,16.9,21.7c3.9,3.4,21-12.5,26.1-23.6c3.3-7.3,1.4-124.8,1.4-124.8 M768.6,316.4
        l-6.6,13.2l36.7,15.4l36.7-15l-5.8-12.5l-30.6-3.4L768.6,316.4z"/>

      <linearGradient id="beard-1" gradientUnits="userSpaceOnUse" x1="701.6956" y1="275.5532" x2="896.2681" y2="275.5532">
        <stop offset="5.390625e-02" style={{ stopColor : "#020000", stopOpacity : "0.6" }} />
        <stop offset="0.8356" style={{ stopColor : "#4F3D01", stopOpacity : "0.5" }} />
      </linearGradient>

      <path id="beard" style={{ fill: "url(#beard-1)" }} d="M896.3,251.8 M896.3,181.3v125c0,38.7-31.4,70.1-70.1,70.1h-54.5
        c-38.7,0-70.1-31.4-70.1-70.1V200.8l14.5-18.8c0,0-1.8,110.3,1.4,117.6c5.1,11.2,22.2,27,26.1,23.6c3.9-3.4,10.6-21.7,16.9-21.7
        c6.3,0,38.4-4.8,38.4-4.8l38.4,4.8c6.3,0,13,18.3,16.9,21.7c3.9,3.4,21-12.5,26.1-23.6c3.3-7.3,1.4-124.8,1.4-124.8 M768.6,316.4
        l-6.6,13.2l36.7,15.4l36.7-15l-5.8-12.5l-30.6-3.4L768.6,316.4z"/>
      
      <path id="hoodie-base" style={{ fill: "#A9842E" }} d="M760.2,100.6c-9.8,5.7-18.5,6.7-35.6,26.6s-28.5,28.2-35.7,41.4
        c-4.4,8.2-17.8,41-21.2,45c-5.7,6.7-17.6,69-17.6,81.3s-4.7,81.9,7.1,88.1c11.9,6.2,25.3,25.1,25.7,38c0.4,12.8-51,34.5-59.4,45.5
        c-17.5,22.9-19.6,66.6-21.5,77.3c-3.3,18.8-15.6,70.9-7.1,84.5c12.4,19.9,48.3-2.5,48.3-2.5s130.8,0,146.8,0
        c23.5,0,130.4,22.2,168.9,0c46.9-27.1,25.6-101.2,49.9-123.3c13.5-12.3-45.4-24.9-55.3-28.2c-4.8-1.6-38.9-25-35-35.3
        c6.6-17.2,11.9-42.4,15.6-62.6c5.9-32.4,6.9-93.2,9.8-113.2s-17.1-87-24.3-104.1c-7.1-17.1-48.6-42.9-70.6-54
        C825.7,93.2,796.1,92,796.1,92S770,94.9,760.2,100.6z M692.4,364.6c0-18.4,0.4-47.6-8.1-75.7s30.7-80.6,40.1-100.6
        c9.4-20,55.6-37.8,71.7-37.8s52.4,22.8,79.5,24.3c27.1,1.4,47.1,35.7,57.1,62.2c10,26.6-43.2,163.1-43.2,163.1l-93.3,47l-76.6-47.9
        C719.5,399.2,692.4,383,692.4,364.6z"/>

      <linearGradient id="sweater-1" gradientUnits="userSpaceOnUse" x1="608.1054" y1="241.8792" x2="976.2784" y2="610.0521">
        <stop offset="0.116" style={{ stopColor : "#4F3D01", stopOpacity : "0.9" }} />
        <stop offset="0.7644" style={{ stopColor : "#A18A3F", stopOpacity : "0.5" }} />
      </linearGradient>
      
      <path id="sweater" style={{ fill: "url(#sweater-1)" }} d="M760.2,99.4c-9.8,5.7-18.5,6.7-35.6,26.6s-28.5,28.2-35.7,41.4
        c-4.4,8.2-17.8,41-21.2,45c-5.7,6.7-17.6,69-17.6,81.3s-4.7,81.9,7.1,88.1c11.9,6.2,25.3,25.1,25.7,38c0.4,12.8-51,34.5-59.4,45.5
        c-17.5,22.9-19.6,66.6-21.5,77.3c-3.3,18.8-15.6,70.9-7.1,84.5c12.4,19.9,48.3-2.5,48.3-2.5s130.8,0,146.8,0
        c23.5,0,130.4,22.2,168.9,0c46.9-27.1,25.6-101.2,49.9-123.3c13.5-12.3-45.4-24.9-55.3-28.2c-4.8-1.6-38.9-25-35-35.3
        c6.6-17.2,11.9-42.4,15.6-62.6c5.9-32.4,6.9-93.2,9.8-113.2s-17.1-87-24.3-104.1c-7.1-17.1-48.6-42.9-70.6-54
        c-23.5-11.9-53.1-13.1-53.1-13.1S770,93.7,760.2,99.4z M692.4,363.4c0-18.4,0.4-47.6-8.1-75.7c-8.6-28.1,30.7-80.6,40.1-100.6
        c9.4-20,55.6-37.8,71.7-37.8s52.4,22.8,79.5,24.3c27.1,1.4,47.1,35.7,57.1,62.2c10,26.6-43.2,163.1-43.2,163.1l-93.3,47L719.5,398
        C719.5,398,692.4,381.8,692.4,363.4z"/>

      <path style={{ display: "none", fill: "#EEBF27" }} d="M-283.8,203.7l-94.2-58.9c0,0-38-22.6-38-48.4s0.6-66.7-11.4-106.2s43.1-113,56.3-141
        c13.2-28,64.8-54.6,87.4-54.6 M-270.6-285.8c0,0-36.6,4-50.3,12c-13.7,8-25.9,9.3-49.9,37.3s-40,39.5-50,58
        c-6.2,11.5-24.9,57.5-29.7,63.1c-8,9.4-24.6,96.7-24.6,114s-0.9,89.1,15.7,97.7c16.6,8.6,29.7,61,30.4,79
        c0.6,18-71.5,48.3-83.3,63.8c-24.5,32.1-32,93.2-30.1,108.3c7.2,56.6,57.8,115,57.8,115s187.9,13.4,205.9,0"/>

      <polygon id="table-1" style={{ fill: "#269358" }} points="343.8,770.3 556.3,618.4 1454,618.4 1662.3,770.3 "/>

      <linearGradient id="table-cover-1" gradientUnits="userSpaceOnUse" x1="1003.0767" y1="770.3339" x2="1003.0767" y2="618.4363">
        <stop offset="0" style={{ stopColor : "#046137" }} />
        <stop offset="0.9268" style={{ stopColor : "#477596", stopOpacity : "0.5" }} />
      </linearGradient>

      <polygon id="table-cover" style={{ fill: "url(#table-cover-1)" }} points="343.8,770.3 556.3,618.4 1454,618.4 1662.3,770.3 "/>
      <polygon id="keyboard-1" style={{ fill: "#0765A3;"}} points="818.6,711.4 760.2,645.1 858.4,645.1 838,711.4 "/>
      <polygon id="keyboard" style={{ fill: "#0765A3;"}} points="818.6,711.4 760.2,645.1 858.4,645.1 838,711.4 "/>
      
      <linearGradient id="SVGID-1" gradientUnits="userSpaceOnUse" x1="877.8966" y1="755.9642" x2="331.6714" y2="-190.1257">
        <stop offset="0" stop-color="#FFF" stop-opacity="0.8">
          <animate attributeName="stop-opacity" dur="12s" values="0.8; 0; 0.8;" repeatCount="indefinite" />
        </stop>
        <stop offset="0.6" stop-color="#FFF" stop-opacity="0.3">
          <animate attributeName="stop-opacity" dur="12s" values="0.3; 0; 0.3;" repeatCount="indefinite" />
        </stop>
        <stop offset="0.95" stop-color="#FFF" stop-opacity="0" />
      </linearGradient>

      <linearGradient id="SVGID-1-light" gradientUnits="userSpaceOnUse" x1="877.8966" y1="755.9642" x2="331.6714" y2="-190.1257">
        <stop offset="0" stop-color="#AFCFEF" stop-opacity="0.8">
          <animate attributeName="stop-opacity" dur="12s" values="0.8; 0; 0.8;" repeatCount="indefinite" />
        </stop>
        <stop offset="0.6" stop-color="#222123" stop-opacity="0.3">
          <animate attributeName="stop-opacity" dur="12s" values="0.3; 0; 0.3;" repeatCount="indefinite" />
        </stop>
        <stop offset="0.95" stop-color="#FFF" stop-opacity= "0" />
      </linearGradient>

      <polygon id="laptop-glow" style={{ fill: "url(#SVGID-1)" }} points="1208.6,501.8 1019.7,0 2.4,0 0,237 818.6,711.4 1084.8,636.5 "/>

      <path id="laptop-top" style={{ fill: "#0765A3"}} d="M814.9,695.7l61.1-201c1.6-5.1,6.3-8.6,11.6-8.6H1197c8.1,0,14,7.9,11.6,15.6
        l-61.1,201c-1.6,5.1-6.3,8.6-11.6,8.6H826.5C818.4,711.4,812.5,703.5,814.9,695.7z"/>
      
      <linearGradient id="laptop-top-cover-1" gradientUnits="userSpaceOnUse" x1="860.3071" y1="750.2156" x2="1163.1689" y2="447.3538">
        <stop offset="0" style={{ stopColor : "#0765A3", stopOpacity : "0.8" }} />
        <stop offset="0.1519" style={{ stopColor : "#0C68A6", stopOpacity : "0.790 9" }} />
        <stop offset="0.8779" style={{ stopColor : "#00BCF1", stopOpacity : "0.5" }} />
      </linearGradient>

      <path id="laptop-top-cover" style={{ fill: "url(#laptop-top-cover-1)" }} d="M814.9,695.7l61.1-201c1.6-5.1,6.3-8.6,11.6-8.6H1197
        c8.1,0,14,7.9,11.6,15.6l-61.1,201c-1.6,5.1-6.3,8.6-11.6,8.6H826.5C818.4,711.4,812.5,703.5,814.9,695.7z"/>
      <polygon style={{ fill: "#664118" }} points="1306.9,0 1321.6,0 1321.6,431 1920.3,431 1920.3,441.8 1306.9,441.8 "/>

      <linearGradient id="window-2" gradientUnits="userSpaceOnUse" x1="1878.3491" y1="-41.9842" x2="1363.1455" y2="473.2194">
        <stop offset="0%" stop-color="#3B5DAB" stop-opacity="0.9">
          <animate attributeName="stop-color" dur="12s" values="#3B5DAB; #e08546; #3B5DAB;" repeatCount="indefinite" />
        </stop>
        <stop offset="80%" stop-color="#1A0B00" stop-opacity="0.3">
          <animate attributeName="stop-color" dur="12s" values="#1A0B00; #e0d577; #1A0B00;" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stop-color="#0D0500" stop-opacity="0.3" >
          <animate attributeName="stop-color" dur="12s" values="#0D0500; #eae4a7; #0D0500;" repeatCount="indefinite" />
        </stop>
      </linearGradient>

      <rect id="window-1" x="1321.2" style={{ fill: "url(#window-2)" }} width="599.2" height="431.2">
        
      </rect>

      <linearGradient id="SVGID-2" gradientUnits="userSpaceOnUse" x1="1296.5349" y1="641.0226" x2="1235.7137" y2="701.8438">
        <stop offset="0" style={{ stopColor : "#046137" }} />
        <stop offset="0.9268" style={{ stopColor : "#477596", stopOpacity : "0.5" }} />
      </linearGradient>

      {/* mug shadow */}
      <path style={{ fill: "url(#SVGID-2)" }} butt="poop" d="M1245.4,656.1c0,0-31.1,14.9-29.8,19.5c1.2,4.7,4.1,16.2,22.5,21.6c18.4,5.3,44.1,5,50,0
        c5.9-5,26.2-38.4,26.2-38.4S1255.7,650.8,1245.4,656.1z"/>
      
      {/* mug? */}
      <path style={{ fill: "#DAC026" }} d="M1279.8,665c-34.4,0-34.4-8.9-34.4-8.9v-27.7v-2.1v-28.4c0,0,0-11.1,34.2-11.1h1.3
        c34.7,0,33.4,11.1,33.4,11.1v28.4v2.1v27.7C1314.3,656.1,1314.3,665,1279.8,665"/>

      {/* mug handle? */}
      <path style={{ fill: "#DAC026" }} d="M1314.3,607.5h7.8c0,0,5.7,3.3,5.7,10.5c0,7.1-2.3,24.3-13.5,30.9
        C1303.1,655.5,1314.3,607.5,1314.3,607.5z"/>

      <linearGradient id="SVGID-3" gradientUnits="userSpaceOnUse" x1="1245.3654" y1="625.8716" x2="1314.2603" y2="625.8716">
        <stop offset="5.026042e-02" style={{ stopColor : "#DAC026", stopOpacity : "0.9" }} />
        <stop offset="0.5028" style={{ stopColor : "#BD8B2C", stopOpacity : "0.82" }} />
      </linearGradient>

      <path style={{ fill: "url(#SVGID-3)" }} d="M1279.8,665c-34.4,0-34.4-8.9-34.4-8.9v-27.7v-2.1v-28.4c0,0,0-11.1,34.2-11.1h1.3
        c34.7,0,33.4,11.1,33.4,11.1v28.4v2.1v27.7C1314.3,656.1,1314.3,665,1279.8,665"/>

      <path style={{ fill: "#986C29" }} d="M1279.5,590.1c27.8,0,27.8,5.3,27.8,7.2l0,0c0,1.9-4.2,3.4-27.8,3.4h-0.8c-21.1,0-27-1.5-27-3.4l0,0
        C1251.7,595.4,1251.7,590.1,1279.5,590.1"/>

      <path style={{fill: "#DAC026"}} d="M588.4,640.3l-34.9,43.4v6.2l6.1-1.2l32.5-46.6C592.1,642.2,591.1,639.7,588.4,640.3z"/>
      <linearGradient id="SVGID-4" gradientUnits="userSpaceOnUse" x1="594.4112" y1="644.161" x2="551.0627" y2="687.5095">
        <stop offset="5.026042e-02" style={{ stopColor : "#DAC026", stopOpacity : "0.9" }} />
        <stop offset="0.5028" style={{ stopColor : "#BD8B2C", stopOpacity : "0.82" }} />
      </linearGradient>
      <path style={{ fill: "url(#SVGID-4)" }} d="M588.4,640.3l-34.9,43.4v6.2l6.1-1.2l32.5-46.6C592.1,642.2,591.1,639.7,588.4,640.3z"/>
      <path style={{ fill: "#DAC026" }} d="M596.2,641.8l-20.8,51.7l1.8,5.9l5.5-2.9l17.6-54C600.2,642.4,598.5,640.4,596.2,641.8z"/>
      <linearGradient id="SVGID-5" gradientUnits="userSpaceOnUse" x1="590.8576" y1="697.7017" x2="547.5091" y2="741.0502" gradientTransform="matrix(0.9571 -0.2896 0.2896 0.9571 -164.5979 147.0074)">
        <stop offset="5.026042e-02" style={{ stopColor : "#DAC026", stopOpacity : "0.9" }} />
        <stop offset="0.5028" style={{ stopColor : "#BD8B2C", stopOpacity : "0.82" }} />
      </linearGradient>
      <path style={{ fill: "url(#SVGID-5)" }} d="M596.2,641.8l-20.8,51.7l1.8,5.9l5.5-2.9l17.6-54C600.2,642.4,598.5,640.4,596.2,641.8z"/>
      <linearGradient id="SVGID-6" gradientUnits="userSpaceOnUse" x1="1613.6058" y1="444.8036" x2="1613.6058" y2="427.9683">
        <stop offset="0" style={{ stopColor : "#AA732A", stopOpacity : "0.5" }} />
        <stop offset="1" style={{ stopColor : "#F7941D", stopOpacity : "0" }} />
       </linearGradient>
      <polygon style={{ fill: "url(#SVGID-6)" }} points="1306.9,444.8 1326.8,428 1920.3,428 1920.3,444.8 "/>
      <linearGradient id="SVGID-7" gradientUnits="userSpaceOnUse" x1="1200.0109" y1="106.8673" x2="1422.8966" y2="329.753">
        <stop offset="0" style={{ stopColor : "#AA732A", stopOpacity : "0.5" }} />
        <stop offset="1" style={{ stopColor : "#603913", stopOpacity : "0" }} />
       </linearGradient>
      <polygon style={{ fill: "url(#SVGID-7)" }} points="1321.2,0 1306.9,0 1306.9,441.8 1321.6,431 "/>
    </svg>

  )
}
export default HeaderAnimation;