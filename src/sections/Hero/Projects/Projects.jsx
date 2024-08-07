import styles from './ProjectStyles.module.css'
import viberr from '../../../assets/viberr.png';
import JSprojectpic from '../../../assets/JS project pic.jpg';
import hipsster from '../../../assets/hipsster.png';
import fitlift from '../../../assets/fitlift.png';
import ProjectCard from '../../../common/ProjectCard'

function Projects() {
    return(
        <section id= "projects" className={styles.container}>
         <h1 className="sectionTitle"></h1>
         <div className={styles.projectsContainer} >
           <ProjectCard 
           src={viberr} 
           link='https://github.com/dtuircuit/terraform-portfolio-project/tree/master/terraform-portfolio-project'
           h3= "Viberr" 
           p="Streaming App"
           />
           <ProjectCard 
           src={JSprojectpic} 
           link='https://github.com/dtuircuit/terraform-portfolio-project/tree/master/terraform-portfolio-project'
           h3= "Fresh Burger" 
           p="Hamburger"
           />
           <ProjectCard 
           src={fitlift} 
           link='https://github.com/dtuircuit/terraform-portfolio-project/tree/master/terraform-portfolio-project'
           h3= "FitLift" 
           p="Fitness App"
           />
           <ProjectCard 
           src={hipsster} 
           link='https://github.com/dtuircuit/terraform-portfolio-project/tree/master/terraform-portfolio-project'
           h3= "Hipster" 
           p="Glasses Shop"
           />
           
         </div>
        </section>
    )  
}

export default Projects;