import styles from './ProjectStyles.module.css'
import Govtech from '../../../assets/Govtech.png';
import JSprojectpic from '../../../assets/Reac Website.png';
import Terraform  from '../../../assets/Terraform.png';
import FoodDelivery from '../../../assets/Food Delivery Infrastructure.png';
import ProjectCard from '../../../common/ProjectCard'

function Projects() {
    return(
        <section id= "projects" className={styles.container}>
         <h1 className="sectionTitle"></h1>
         <div className={styles.projectsContainer} >
           <ProjectCard 
           src={Govtech} 
           link='https://github.com/dtuircuit/Secure-and-Complaint-infrastructure-for-Government-Application'
           h3= "Secure and Compliant Government Application Infrastructure " 
           p="GovTech Infrastructure"
           />
           <ProjectCard 
           src={JSprojectpic} 
           link='https://github.com/dtuircuit/DT-React-Portfolio-Site'
           h3= "Portfolio React Site" 
           p="Dynamic Website"
           />
           <ProjectCard 
           src={Terraform} 
           link='https://github.com/dtuircuit/Web_Application_Backend_Infra'
           h3= "Secure Backend Application Infrastructure" 
           p="Backend Infrastructure"
           />
           <ProjectCard 
           src={FoodDelivery} 
           link='https://github.com/CloudFoodDelivery/order_app'
           h3= "Real-Time Food Distribution Infrastructure" 
           p=""
           />
           
         </div>
        </section>
    )  
}

export default Projects;