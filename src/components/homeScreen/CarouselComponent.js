import { memo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const CarouselComponent = ({
    carouselPhotos,
    onClickItem = (some) => { console.log('click', some) }
}) => {
    return (
        <>
            <div className="">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    onClickItem={onClickItem}
                >
                    {
                        carouselPhotos.map(({ image_url }, i) => {
                            return (
                                <div key={i} className="">
                                    <img className="rounded-lg md:rounded-3xl " src={image_url} alt="" />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}
export default memo(CarouselComponent);