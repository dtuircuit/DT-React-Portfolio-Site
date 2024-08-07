import styles from './ProjectStyles.module.css'
import Cloudformation from '../../../assets/Cloudformation.png';
import JSprojectpic from '../../../assets/Reac Website.png';
import Terraform  from '../../../assets/Terraform.png';
import FoodDelivery from '../../../assets/Food Deliver Infrastructure.png';
import ProjectCard from '../../../common/ProjectCard'

function Projects() {
    return(
        <section id= "projects" className={styles.container}>
         <h1 className="sectionTitle"></h1>
         <div className={styles.projectsContainer} >
           <ProjectCard 
           src={Cloudformation} 
           link='https://github.com/dtuircuit/Cloud-Formation'
           h3= "VPC CloudFormation" 
           p="AWS Cloud"
           />
           <ProjectCard 
           src={JSprojectpic} 
           link='https://github.com/dtuircuit/DT-React-Portfolio-Site'
           h3= "Portfolio React Site" 
           p="JavaScript"
           />
           <ProjectCard 
           src={Terraform} 
           link='https://github.com/dtuircuit/terraform-portfolio-project/tree/master'
           h3= "Next.js Terraform Deployment" 
           p="AWS Cloud"
           />
           <ProjectCard 
           src={FoodDelivery} 
           link='https://github.com/CloudFoodDelivery/order_app/tree/Dadrion'
           h3= "Food Distribution Infrastructure" 
           p="AWS Cloud"
           />
           
         </div>
        </section>
    )  
}

export default Projects;