
import './index.css'

import data from '../../data.js'

function Hero(){

  const hero = data.hero

  return (
    <section className="hero">
      <div className="hero-content">
        <p>{hero.greeting},</p>
        <h1>{hero.iam}</h1>
        <p>{hero.iamDetail}</p>
        <div className="hero-location">
          <i className="fa-solid fa-location-dot"></i>
          <p>{hero.livingPlace}</p>
        </div>
      </div>
    </section>

  )
}

export default Hero
