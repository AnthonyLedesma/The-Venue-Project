import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.5095742650035!2d-112.07247898937364!3d33.44604948199467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b121f8a236d67%3A0xefa81a2c4e82deff!2sUS+Airways+Center%2C+201+E+Jefferson+St%2C+Phoenix%2C+AZ+85004!5e0!3m2!1sen!2sus!4v1533146572875" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullscreen
            title="The Venue Project"
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;