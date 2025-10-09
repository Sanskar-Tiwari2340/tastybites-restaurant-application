import {Link} from 'react-router-dom';  // Import Link from react-router-dom
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {   // Functional component
    return (
        <section className='about' id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we're serious about is food.</p>
                    </div>
                    <p className='mid'>
                        At our restaurant, we believe that great food brings people together. Our chefs use only the freshest ingredients to craft dishes that delight your senses and create memorable experiences. Whether you're joining us for a family dinner, a celebration, or a casual meal, our warm atmosphere and attentive service ensure you feel right at home. Discover flavors inspired by tradition and innovation, and let us make every visit special.
                    </p>
                    <Link to={"/"}>
                        Explore Menu
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>
                <div className='banner'>
                    <img src="./about.png" alt="about" />
                </div>
            </div>
        </section>
    );
};  // End of About component

export default About;   // Exporting the component
