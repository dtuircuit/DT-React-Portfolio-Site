import styles from "./Herostyles.module.css";
import heroImg from "../../assets/Avatar Pic.png";  // Ensure this path is correct
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from '../../assets/linkedin-light.svg';
import LinkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import GithubDark from '../../assets/github-dark.svg';
import MediumLight from '../../assets/MediumLight.svg';
import MediumDark from '../../assets/MediumDark.svg';
import AmazonCertLight from '../../assets/aws-certified-solutions-architect-associate-Kittl.svg';
import AmazonCertDark from '../../assets/aws-certified-solutions-architect-associate-Kittl.svg';
import CV from '../../assets/Dadrion_Tuircuit_CV.pdf';
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme ();

  const themeIcon= theme === 'light' ? sun : moon;
  const linkedinIcon= theme === 'light' ? linkedinLight : LinkedinDark;
  const githubIcon= theme === 'light' ? githubLight : GithubDark;
  const mediumIcon= theme === 'light' ? MediumDark : MediumLight;
  const AmazonCertIcon= theme === 'light' ? AmazonCertLight : AmazonCertDark


  return (
     <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
         className={styles.hero}
         src={heroImg}
         alt="Profile picture of Dadrion Tuircuit" 
         />
         <img 
         className={styles.colorMode}
         src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>     
            <h1>
              Dadrion 
              <br/>
              Tuircuit
            </h1>
            <h2>Cloud Engineer</h2>
            <span>
              <a href="https://linkedin.com/in/dtuircuit"target='blank'>
                <img src={linkedinIcon} alt="LinkedIn icon" />
              </a>
              <a href="https://github.com/dtuircuit"target='blank'>
                <img src={githubIcon} alt="Github icon" />
              </a>
              <a href="https://medium.com/@dtuircuit"target='blank'>
                <img src={mediumIcon} alt="Medium icon" />
              </a>
            </span>
            <p className={styles.description}>
            Build Solutions
            </p>
            <a href={CV} download>
              <button className='hover'>
                Resume
                </button>
            </a>

          </div>


  </section>
  );
}

export default Hero;