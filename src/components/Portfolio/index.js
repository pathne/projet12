
import './index.css'
import data from '../../data.js'

import PortfolioItem from '../PortfolioItem'

function Portfolio(){
  const portfolio = data.portfolio

  return (
    <section className="portfolio" id="realisations">
      <h2>{portfolio.sectionTitle}</h2>
      <p>{portfolio.presentation}</p>
      <div className="portfolio-item-container">
      {portfolio.items.map((item, index) => (
          <PortfolioItem key={index} item={item}/>
      ))}
      </div>
    </section>
  )
}

export default Portfolio
