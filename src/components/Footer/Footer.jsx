import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import logo from "../../assets/users/logo.png"

const Footer = () => {

    const facebookUrl = "https://www.facebook.com/pathik7610ice";
    const instagramUrl = "https://www.instagram.com/pmsaifuzzaman/";
    const linkedinUrl = "https://www.linkedin.com/in/saifuzzaman-pathik-61441217b/";
    const gitHubUrl = "https://github.com/PmSaifuzzaman";
    const stackOverflowUrl = "https://stackoverflow.com/users/23028472/pmsaifuzzaman-pathik";

    return (
        <div className="bg-teal-100">
            <footer className="footer p-10 ">
                <aside>
                    <img className="w-20" src={logo} alt="" />
                    <p className="text-lg">TaskPilot Tech Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 cursor-pointer text-3xl">
                            <FaFacebook />
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 cursor-pointer text-3xl"><FaInstagram /></a>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 cursor-pointer text-3xl"><FaLinkedin /></a>
                        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 cursor-pointer text-3xl"><FaGithub /></a>
                        <a href={stackOverflowUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 cursor-pointer text-3xl"><FaStackOverflow /></a>
                        
                    </div>
                </nav>
            </footer>
            <p className="text-center pb-5">Copyright © 2023 - All right reserved by TaskPilot Tech Ltd.</p>
        </div>

    );
};

export default Footer;