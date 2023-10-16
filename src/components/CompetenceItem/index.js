
function CompetenceItem(props){

  const item = props.item

  return (
      <article className="competence">
        <div className="competence-container">
            <div className="competence-detail">
                <div className="competence-detail-image">
                    <img src={`./images/${item.logo}`} alt={item.logoAlt} />
                </div>
                <div className="competence-detail-content">
                    <div className="competence-title">
                        <h3>{item.title}</h3>
                        <p>{item.studyPeriod}</p>
                    </div>
                    <ul className="competence-list">
                    {item.description.map((description, index)=>(
                        <li key={index}>{description}</li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className="competence-techno">
                <ul>
                {item.technologies.map((tech, index)=>(
                    <li key={index}><img src={`./images/icon-${tech.icon}.svg`} alt={tech.name} /><p>{tech.name}</p></li>
                ))}
                </ul>
            </div>
        </div>
      </article>
  )
}

/*
<div className="competence-detail">
    <div className="competence-detail-image">
        <img src={`./images/${item.logo}`} alt={item.logoAlt} />
    </div>
    <div className="competence-detail-content">
        <div className="competence-title">
            <h3>{item.title}</h3>
            <p>{item.studyPeriod}</p>
        </div>
        <ul className="competence-list">
        {item.description.map((description, index)=>(
            <li>{description}</li>
        ))}
        </ul>
    </div>
</div>
<div className="competence-techno">
    <ul>
    {item.technologies.map((tech, index)=>(
        <li><img src={`./images/icon-${tech.icon}.svg`} alt={tech.name} /><p>{tech.name}</p></li>
    ))}
    </ul>
</div>
*/

export default CompetenceItem
