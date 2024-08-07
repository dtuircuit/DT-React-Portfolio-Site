import styles from './SkillStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills'className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="AWS" />
          <SkillList src={checkMarkIcon} skill="Terraform" />
          <SkillList src={checkMarkIcon} skill="CI/CD" />
          <SkillList src={checkMarkIcon} skill="IaC" />
          <SkillList src={checkMarkIcon} skill="GitHub Actions" />

        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="JSON" />
          <SkillList src={checkMarkIcon} skill="YAML" />
          <SkillList src={checkMarkIcon} skill="IAM" />
          <SkillList src={checkMarkIcon} skill="VPC" />
        </div>
        <hr/>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Python" />
          <SkillList src={checkMarkIcon} skill="Bash" />
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="SDLC" />
          <SkillList src={checkMarkIcon} skill="CloudFormation" />

        </div>
    </section> 
  )
}

export default Skills