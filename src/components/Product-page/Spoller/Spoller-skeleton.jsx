import ContentLoader from "react-content-loader"

const SpollerSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={620}
    height={190}
    viewBox="0 0 620 190"
    backgroundColor="#e6e6e6"
    foregroundColor="#f0f0f0"
    {...props}
  >
    <rect x="0" y="94" rx="0" ry="0" width="600" height="37" /> 
    <rect x="0" y="47" rx="0" ry="0" width="600" height="37" /> 
    <rect x="0" y="141" rx="0" ry="0" width="600" height="37" /> 
    <rect x="0" y="0" rx="0" ry="0" width="600" height="37" />
  </ContentLoader>
)

export default SpollerSkeleton