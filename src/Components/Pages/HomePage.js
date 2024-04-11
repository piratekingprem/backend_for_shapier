import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Phase8 from '../Phase8'
import Phase7 from  '../Phase7'
import './HomePage.css'
import coverPhoto from '../../assets/cover.png';
import Phase6 from '../Phase6'
import contractorImage from '../../assets/HomePageAssets/contractor.jpg';
import plumberImage from '../../assets/HomePageAssets/plumber.jpg';
import LandImage from '../../assets/HomePageAssets/landscrapers.jpg';
import HavcImage from '../../assets/HomePageAssets/HVAC.jpg';
import carpainterImage from '../../assets/HomePageAssets/carpainter.jpg';
import ElectricianImage from '../../assets/HomePageAssets/electrician.jpg';
import ServiceCard from '../ServiceCard';
import Phase2 from '../Phase2'
import Phase3 from '../Phase3'
import Phase4 from '../Phase4'


export default function HomePage() {

    // Define an array with titles and image sources
    const serviceItems = [
        { title: "General Contractors", imageSrc: contractorImage },
        { title: "Specialized Plumber", imageSrc: plumberImage },
        { title: "Certified Electricians", imageSrc: ElectricianImage },
        { title: "Experienced Landscrapers", imageSrc: LandImage },
        { title: "HVAC Technicians", imageSrc: HavcImage },
        { title: "Skilled Carpainters", imageSrc: carpainterImage },
        // Add other items as needed
    ];

    // Function to dynamically import images
    // const importImage = (imageName) => {
    //     return require(`../../assets/HomePageAssets/${imageName}`).default;
    // };


    return (
        <div>
            <Header />
            <div className='container mt-3'>

                {/* this is Phase-I Container */}
                <div className='container'>
                    <h2>Streamline construction<br />projects</h2>
                    {/* from this point the first container code begin of choose service */}
                    <div className='inner-container'>
                        <div className='content'>
                            <h5>What are you looking for ?</h5>


                            {/* from this the services categories code begin */}
                            <div className="row">
                                
                                    {serviceItems.map((item, index) => (
                                        <ServiceCard
                                            key={index} // Don't forget to provide a unique key
                                            imageSrc={item.imageSrc}
                                            title={item.title}
                                            className="service-item"
                                        />
                                    ))}
                                
                            </div>

                            {/* button code start from here  */}
                            {/* Buttons */}
                            <div className="buttons-container">
                                <button className="book-now-button">Book Now</button>
                                <button className="explore-now-button">Explore Now</button>
                            </div>



                        </div>



                        {/* from this , code for the first page image that three images */}
                        <div className=' image-container'> {/* Add a separate container for image */}
                            <img src={coverPhoto} alt='[Image description]' />
                        </div>

                    </div>

                </div>

                <Phase2/>
                <Phase3/>
                <Phase4/>

            </div>
            <Phase6/>
            <Phase7/>
            <Phase8/>
            <Footer />
        </div>
    )
}