import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const EventSlider = ({ images, eventName }) => {
  return (
    <div className=" w-[360px]  border-4 border-black rounded-xl slider-shadow">
      <Swiper
        className="slider-shadow"
        spaceBetween={30}
        effect={'fade'}
        speed={3000}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        // pagination={{ clickable: true }}
      >
        {images.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[360px] h-[230px] cursor-pointer group">
              <img
                src={slide.url}
                alt={`Slide ${index + 1}`}
                className="w-[400px] h-[230px] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/60 via-black/10 to-black flex items-end justify-start px-5 py-3">
                <div className="text-white font-bold lg:text-2xl text-xl">{eventName}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSlider;