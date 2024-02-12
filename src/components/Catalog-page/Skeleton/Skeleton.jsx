import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={298}
        height={455}
        viewBox="0 0 298 455"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="33" y="276" rx="6" ry="6" width="55" height="16" />
        <rect x="32" y="307" rx="11" ry="11" width="241" height="45" />
        <rect x="22" y="8" rx="11" ry="11" width="255" height="238" />
        <rect x="34" y="373" rx="4" ry="4" width="90" height="20" />
        <rect x="210" y="374" rx="4" ry="4" width="60" height="16" />
        <rect x="30" y="407" rx="5" ry="5" width="250" height="37" />
    </ContentLoader>
)

export default Skeleton

