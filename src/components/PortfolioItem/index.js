
function PortfolioItem(props){
  const item = props.item

  return (
    <article className="portfolio-item">
        <div className="portfolio-item-image">
            <img src={`./images/${item.image}`} alt="toto" />
        </div>
        <div className="portfolio-item-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul className="portfolio-item-content-techno">
                {item.technologies.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
            <ul className="portfolio-item-link">
                {item.links.map((link, index) => (
                    <li key={index}><a target="_blank" href={link.url}><p>{link.name}</p><img src="./images/icon-external-link.svg" alt="external link" /></a></li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default PortfolioItem
