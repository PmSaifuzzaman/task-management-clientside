import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="hero" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="lg:max-w-lg" data-aos="fade-up" />
                <div data-aos="fade-down">
                    <h1 className="text-5xl font-bold" style={{ fontFamily: 'Playpen Sans, cursive' }}>Organize your  <span className="text-teal-400">Work</span> & life</h1>
                    <p className="py-6 text-xl" style={{ fontFamily: 'Playpen Sans, cursive' }}>Become organized, focused and clam with task management app</p>
                    
                    <Link to={"/manageToDo"} className="btn btn-outline border border-teal-400 text-teal-400">Let’s Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;