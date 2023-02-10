import constant from "../../constant.json";
import './Work.css'

const Work = () => {
  return (
    <section id="Work">
      <div className="work_container">
        {constant.projects.map(
          (project, idx) => (
            // idx % 2 === 0 ?
            <div className="work_project">
              <div className="work_left">
                <a href={project.link} target="_blank">
                  <img src={project.image} alt="" className="work_img" />
                </a>
              </div>
              <div className="work_right">
                <a href={project.link} target="_blank">
                  {project.tittle}
                </a>
                <p className="work_desc">{project.desc}</p>
                <div className="work_skill_container">
                  {project.skills.map((skill) => (
                    <p>{skill}</p>
                  ))}
                </div>
                <div>
                    <a href={project.github} target="_blank">GitHub</a>
                    <a href={project.link} target="_blank">Live</a>

                </div>
              </div>
            </div>
          )
          // : (
          //     <div></div>
          // )
        )}
      </div>
    </section>
  );
};

export default Work;
