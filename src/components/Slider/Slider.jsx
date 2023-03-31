import { useRef, useEffect } from 'react';
import image1 from '../../assets/hotels-page/results/img_1.png'
import image2 from '../../assets/hotels-page/results/img_2.png'
import image3 from '../../assets/hotels-page/results/img_3.png'
import './Slider.scss';

export const Slider = () => {
    const sliderRef = useRef(null)

    const wheelHandler = (event) => {
        event.preventDefault();
        sliderRef.current.scrollLeft += event.deltaY
    }

    useEffect(() => {
        if (sliderRef.current) sliderRef.current.addEventListener('wheel', wheelHandler)
        return () => sliderRef.current.removeEventListener('wheel', wheelHandler)
    }, [])

    return (
        <div className='slider__wrapper' ref={sliderRef}>
            <div className="slider">
                <img className='slide' src={image1} alt="" />
                <img className='slide' src={image2} alt="" />
                <img className='slide' src={image3} alt="" />
                <img className='slide' src={image1} alt="" />
                <img className='slide' src={image2} alt="" />
                <img className='slide' src={image3} alt="" />
                <img className='slide' src={image1} alt="" />
                <img className='slide' src={image2} alt="" />
                <img className='slide' src={image3} alt="" />
            </div>
        </div>
    )
}