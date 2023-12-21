import Navbar from "../../components/Navbar/Navbar";
import aboutUsImg from "../../assets/about us/aboutUs.jpg"
import { GoDot } from "react-icons/go";
import Footer from "../../components/Footer/Footer";

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero" >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={aboutUsImg} className="lg:max-w-lg" data-aos="fade-up" />
                    <div>
                        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Playpen Sans, cursive' }}>Our Mission</h1>
                        <p className="py-6 text-xl" style={{ fontFamily: 'Playpen Sans, cursive' }}>Our mission is to provide a seamless and intuitive task management experience. We are committed to helping individuals and teams become more productive, organized, and ultimately, more successful.</p>
                        <div>
                            <p className="flex gap-2 items-center pl-20" style={{ fontFamily: 'Playpen Sans, cursive' }}><GoDot /> User-Centric Design</p>
                        </div>
                        <div>
                            <p className="flex gap-2 items-center pl-20" style={{ fontFamily: 'Playpen Sans, cursive' }}><GoDot /> Innovation in Productivity</p>
                        </div>
                        <div>
                            <p className="flex gap-2 items-center pl-20" style={{ fontFamily: 'Playpen Sans, cursive' }}><GoDot /> Collaborative Focus</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default AboutUs;