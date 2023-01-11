import { memo } from "react";
import { comaFormat } from "@helper";

const PromotionComponent = ({ promotions, onClick, created_at }) => {
    return (
        <>
            {/* title */}
            <div className="text-xl text-title font-bold mb-2 md:mb-6">
                Promotions
            </div>
            {/* grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
                {
                    promotions.map(({ images, detail, id, created_at }, i) => {
                        const base = "https://dev.mobilelikemm.com/ml/public/";
                        // console.log("Images ", images);
                        return (
                            <div onClick={() => onClick(id)} key={i} className="flex flex-col items-center cursor-pointer hover:font-semibold">
                                {/* Check for image null */}
                                <div className="flex flex-row justify-center h-[150px]">
                                {
                                    images.length === 0 ?
                                        <img src={require('@assets/products/product3.png')} alt="photos" className="object-contain rounded-xl shadow-lg" />
                                        :
                                        <img src={created_at ? `${base}${images[0].photo_url}` : images[0].photo_url} alt="photos" className="object-contain rounded-xl shadow-lg" />

                                }
                                </div>
                                <div className="text-title mt-1">{comaFormat(detail.discount > 0 ? detail.discount : detail.price)} Kyat</div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
export default memo(PromotionComponent);