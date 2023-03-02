import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    rtl
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="143" cy="126" r="125" />
    <rect x="0" y="268" rx="10" ry="10" width="260" height="26" />
    <rect x="1" y="312" rx="11" ry="11" width="260" height="84" />
    <rect x="154" y="419" rx="10" ry="10" width="110" height="35" />
    <rect x="9" y="413" rx="10" ry="10" width="135" height="45" />
  </ContentLoader>
)

export default Skeleton