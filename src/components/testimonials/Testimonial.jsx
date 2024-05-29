
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import '../testimonials/testimonial.css'

const Testimonials = () => {

    const testimonials = [
        {
            text: `"Working with LinkStar was a game-changer for our business. Their team not only delivered on their promises but went above and beyond to ensure our satisfaction. Their innovative strategies and attention to detail resulted in a remarkable improvement in our online visibility and customer engagement. We couldn't be happier with the results!"`,
            user: "Abhay Shrestha",
            rating: "/img/rating.png",
            image: "/image/user.jpg"
        },
        {
            text: `"LinkStar is simply outstanding! Their professionalism and expertise shone through every step of the process. They took the time to understand our unique challenges and delivered a tailored solution that perfectly aligned with our goals. Thanks to LinkStart, we've seen a significant increase in our search engine rankings and online revenue. We highly recommend their services to anyone looking to stay ahead in the digital landscape."`,
            user: "Deepa Bhatta",
            rating: "./img/rating.png",
            image: "/image/user.jpg"
        },
        {
            text: `"Choosing LinkStart was one of the best decisions we made for our business. Their team's strategic approach and in-depth knowledge of digital marketing made a huge impact on our bottom line. They not only helped us reach our target audience but also provided valuable insights to optimize our online presence. With LinkStart's support, we've experienced steady growth and are excited about the future possibilities."`,
            user: "Debraj Joshi",
            rating: "./img/rating.png",
            image: "/image/user.jpg"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Transition speed (1 second)
        // slidesToShow: 3, // Display three cards in one row
        slidesToScroll: 1, // Scroll one card at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000 // Autoplay speed (3 seconds)

    };

    return (
        <div className="container">
            <div className="testimonials">
                {/* <div className="left_testimonial">
                    <img src="./img/testimonials.png" alt="" />
                </div> */}
                <div className="right_testimonial">
                    <div className="testimonialsData">
                        <h3 className="secondryHeading">Our Happy Clients</h3>
                        <h3>We Appreciate Your Feedbacks Very Much</h3>    </div>


                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonialsCard">
                                <div className="testimonials_usersDetails">
                                    <img className="testimonial_User" src={testimonial.image} alt="" />
                                    <div>
                                        <h2>{testimonial.user}</h2>
                                        <Link to={'#'} target="_blank"><p>{testimonial.website}</p></Link>
                                    </div>
                                    <img className="rating" src={testimonial.rating} alt="" />
                                </div>
                                <p>{testimonial.text}</p>
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
