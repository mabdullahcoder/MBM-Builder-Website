import { Service_mock_data } from "../mockData/service_mock-data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const Service = () => {

    return (
        <section className="serviceSection">
            <div className="service-content">
                <h2 className="service-title">
                    Our Service
                </h2>
                <p className="service-description">
                    At M.B.M Construction, we provide a wide range of services tailored to meet the needs of residential, commercial, and industrial construction projects. Our expert team ensures quality, safety, and timely delivery, making us a trusted partner in every project.
                </p>
            </div>
            <div className="service-carousel-wrapper">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="service-swiper"
                >
                    {
                        Service_mock_data.map((curVal) => {
                            const { id, name, description, icons: Icon } = curVal
                            return (
                                <SwiperSlide key={id}>
                                    <div className="service-card">
                                        <div className="service-icon">
                                            {Icon && <Icon />}
                                        </div>
                                        <div className="service-card-content">
                                            <h3 className="serivce-card-title">{name}</h3>
                                            <p className="service-card-description">{description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    );
}
