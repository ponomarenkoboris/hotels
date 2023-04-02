import { useRef, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import './Slider.scss';

export const Slider = () => {
    const sliderRef = useRef(null)
    const { images } = useSelector(store => store.booking, customEqual)

    const wheelHandler = (event) => {
        event.preventDefault();
        sliderRef.current.scrollLeft += event.deltaY
    }

    useLayoutEffect(() => {
        if (sliderRef.current) sliderRef.current.addEventListener('wheel', wheelHandler)
        return () => sliderRef.current.removeEventListener('wheel', wheelHandler)
    }, [])

    return (
        <div className='slider__wrapper' ref={sliderRef}>
            <div className="slider">
                {images.map(({ id, src }) => 
                    <img className='slide' key={id} src={src} alt="" />
                )}
            </div>
        </div>
    )
}