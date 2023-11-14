// Write your JS code here

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="header-home-container">
      <div className="clothes-container">
        <div className="h1-p">
          <h1>Clothes That Get YOU Noticed</h1>
          <div className="paragraph">
            <p className="matter">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
          </div>

          <div>
            <button type="button" className="shop-button">
              Shop Now
            </button>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt=" clothes that get you noticed"
          className="clothes-that-you-get-noticed"
        />
      </div>
    </div>
  </>
)

export default Home
