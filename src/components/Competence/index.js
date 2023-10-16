
import './index.css'

import CompetenceItem from '../CompetenceItem'
import data from '../../data.js'

function Competence(){

  const skill = data.skill

  return (
    <section className="skills" id="competences">
      <h2>{skill.sectionTitle}</h2>
      {skill.items.map((item, index) => (
          <CompetenceItem key={index} item={item} />
      ))}
    </section>
  )
}

export default Competence
