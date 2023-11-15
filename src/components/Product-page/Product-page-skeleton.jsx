import React from "react"
import ContentLoader from "react-content-loader"

const ProductPageSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1280}
    height={1842}
    viewBox="0 0 1280 2000"
    backgroundColor="#e6e6e6"
    foregroundColor="#f0f0f0"
    {...props}
    style={{"marginBottom": "130px", "marginTop": "20px"}}
  >
  <rect x="-4" y="22" rx="3" ry="3" width="550" height="20" /> 
    <rect x="0" y="91" rx="0" ry="0" width="800" height="55" /> 
    <rect x="1130" y="91" rx="0" ry="0" width="150" height="26" /> 
    <rect x="1130" y="123" rx="0" ry="0" width="150" height="26" /> 
    <rect x="0" y="190" rx="0" ry="0" width="600" height="400" /> 
    <rect x="637" y="188" rx="0" ry="0" width="120" height="30" /> 
    <rect x="637" y="237" rx="0" ry="0" width="350" height="55" /> 
    <rect x="637" y="300" rx="0" ry="0" width="160" height="14" /> 
    <rect x="638" y="350" rx="0" ry="0" width="200" height="32" /> 
    <rect x="637" y="422" rx="0" ry="0" width="150" height="20" /> 
    <rect x="637" y="457" rx="0" ry="0" width="600" height="40" /> 
    <rect x="637" y="504" rx="0" ry="0" width="600" height="40" /> 
    <rect x="637" y="551" rx="0" ry="0" width="600" height="40" /> 
    <rect x="637" y="598" rx="0" ry="0" width="600" height="40" /> 
    <rect x="637" y="683" rx="0" ry="0" width="286" height="50" /> 
    <rect x="1000" y="683" rx="0" ry="0" width="162" height="50" /> 
    <rect x="0" y="800" rx="0" ry="0" width="130" height="23" /> 
    <rect x="43" y="630" rx="0" ry="0" width="117" height="103" /> 
    <rect x="175" y="630" rx="0" ry="0" width="117" height="103" /> 
    <rect x="307" y="630" rx="0" ry="0" width="117" height="103" /> 
    <rect x="439" y="630" rx="0" ry="0" width="117" height="103" /> 
    <rect x="0" y="877" rx="0" ry="0" width="1130" height="200" /> 
    <rect x="0" y="1145" rx="0" ry="0" width="110" height="25" /> 
    <rect x="420" y="1145" rx="0" ry="0" width="110" height="25" /> 
    <rect x="843" y="1145" rx="0" ry="0" width="110" height="25" /> 
    <rect x="0" y="1192" rx="0" ry="0" width="375" height="75" /> 
    <rect x="420" y="1192" rx="0" ry="0" width="375" height="75" /> 
    <rect x="843" y="1192" rx="0" ry="0" width="375" height="75" /> 
    <rect x="-3" y="1415" rx="0" ry="0" width="600" height="47" /> 
    <rect x="1135" y="1417" rx="0" ry="0" width="45" height="45" /> 
    <rect x="1191" y="1417" rx="0" ry="0" width="45" height="45" /> 
    <rect x="6" y="1515" rx="0" ry="0" width="282" height="445" /> 
    <rect x="322" y="1515" rx="0" ry="0" width="282" height="445" /> 
    <rect x="639" y="1516" rx="0" ry="0" width="282" height="445" /> 
    <rect x="960" y="1516" rx="0" ry="0" width="282" height="445" />
  </ContentLoader>
)

export default ProductPageSkeleton

