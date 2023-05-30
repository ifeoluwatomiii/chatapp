import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.png";
import Slider from "react-slick";

const MovieSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 1800,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		fade: true,
		accessibility: true,
		pauseOnHover: true,
	};

	const sliderItems = [
		{
			bgImg: movie1,
			heading: "Avatar",
			text: "Watch Now",
		},
		{
			bgImg: movie2,
			heading: "Inception",
			text: "Watch Now",
		},
		{
			bgImg: movie3,
			heading: "Guardian of the Galaxy",
			text: "Watch Now",
		},
	];
	return (
		<>
			<div className="overflow-hidden">
				<Slider {...settings}>
					{sliderItems.map((item, index) => (
						<div key={index}>
							<div
								className="h-[55vh] bg-center bg-cover text-center"
								style={{ backgroundImage: `url(${item.bgImg})` }}>
								<div className="slide-content bg-black/75 h-[55vh] w-full text-white flex flex-col items-start justify-center px-8 pt-12 ">
									<h3 className="font-bold text-[60px] leading-[68px] mb-4">
										{item.heading}
									</h3>
									<p className="mb-4  text-[20px]">{item.text}</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default MovieSlider;
