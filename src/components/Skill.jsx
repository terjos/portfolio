import useIntersect from '../hooks/useIntersect'
import './Skill.css';

function Skill({ activity, level }) {

  const [ref, entry] = useIntersect({});
  const icon = require(`../images/skill/${activity}.png`).default

  const style = entry.isIntersecting ? {
    animation: 'Animate-skill 4s ',
    animationTimingFunction: 'cubic-bezier(0, 1, 0.3, 1)',
    width: `${level}%`,
    '--skill-end': `${level}%`,
  } : {
    width: `10%`
  };

  return (
    <div className="skill" ref={ref}>
      <img className="skill-img" src={icon} alt={`logo de ${activity}`} width="30" height="30" />
      <div className="skill-activity">
        <div className="skill-level" style={style}>{activity}</div>
      </div>
    </div >
  );
}

export default Skill
