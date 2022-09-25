import React from 'react';
import { Pagination ,Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { productData } from '../../Database/produtsData';
const SingleProduct = () => {
	return (
		<div className="product-container">
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					'@0.00': {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					'@0.75': {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					'@1.00': {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					'@1.50': {
						slidesPerView: 4,
						spaceBetween: 50,
					},
				}}
				modules={[Pagination]}
				className="mySwiper">
				{productData.map((item) => {
					return (
						<SwiperSlide className="swiper-container">
							<img src={item.img} alt="" className="product-img" /> 
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default SingleProduct;
