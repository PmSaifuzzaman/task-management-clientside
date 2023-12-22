import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import banker from "../../assets/users/bankers.jpg"
import doctor from "../../assets/users/Doctor.jpg"
import corporate from "../../assets/users/corporate.jpg"
import developer from "../../assets/users/developers.jpg"

import project_person from "../../assets/users/project-removebg-preview.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination } from 'swiper/modules';

const Users = () => {
    const users = [
        {
            img: banker,
            name: "Banker",


        },
        {
            img: developer,
            name: "Developer",

        },
        {
            img: doctor,
            name: "Doctor",

        },
        {
            img: corporate,
            name: "Corporate-Profetionals",

        },
    ];

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section id="projects-section" className="py-10 ">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    <span className="text-teal-400">Users</span>
                </h3>
                <p className=" mt-3 text-lg">Our Valueable User</p>
            </div>
            <br />
            <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
                <div className="lg:w-2/3 w-full" data-aos="zoom-out-down">
                    <Swiper
                        modules={[Pagination]}
                        slidesperview={1.2}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}

                    >
                        {users.map((user_info, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-fit w-full p-4 bg-teal-100 rounded-xl mb-10">
                                    <img src={user_info.img} alt="" className="rounded-lg h-64 w-full" />
                                    <h3 className="text-xl font-bold my-4">{user_info.name}</h3>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="lg:block hidden">
                    <img src={project_person} alt="" data-aos="zoom-in-left" />
                </div>
            </div>
        </section>
    );
};

export default Users;