import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function ProfileSlider() {
    return (
        <Carousel variant={'dark'}>
            <Carousel.Item className={'slide_profile'}>
                <img
                    className="d-block photo_profile_avatar"
                    src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className={'slide_profile'}>
                <img
                    className="d-block photo_profile_avatar"
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className={'slide_profile'}>
                <img
                    className="d-block photo_profile_avatar"
                    src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ProfileSlider;