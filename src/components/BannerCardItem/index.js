// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList
  return (
    <li className={`bg-container ${className}`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
