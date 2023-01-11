import { memo } from "react";
import { comaFormat } from "@helper";
const PolularItemComponent = ({ popularItems, onClick, title }) => {
    return (
        <>
            {/* title */}
            <div className="text-xl text-title font-bold mb-2 md:mb-6">
                {title}
            </div>
            {/* grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
                {
                    popularItems.map(({ id, images, detail, created_at }, i) => {
                        let spec = '';
                        const key = ["sim", "color", "memory", "storage"];
                        key.map((k, i) => {
                            if (detail[k]) spec += detail[k] + `${k === "memory" || k === "storage" ? 'G' : ''}${key.length - 1 !== i ? ' | ' : ''}`;
                        })
                        const base = "https://dev.mobilelikemm.com/ml/public/";
                        return (
                            <div onClick={() => onClick(id)} key={i} className="flex flex-col items-center cursor-pointer hover:font-semibold bg-white rounded-xl shadow-lg p-2">
                                {/* Check for image null */}
                                <div className="flex flex-row justify-center h-[170px]">
                                {
                                    images.length === 0 ?
                                        <img src={require('@assets/products/product3.png')} alt="photos" className="object-contain rounded-xl" />
                                        :
                                        <img src={created_at ? `${base}${images[0].photo_url}` : images[0].photo_url} alt="photos" className="object-contain rounded-xl" />

                                }
                                </div>
                                <div className="text-xs h-8 overflow-hidden">{spec}</div>
                                <div className="text-title mt-1">{comaFormat(detail.discount > 0 ? detail.discount : detail.price)} Kyat</div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
export default memo(PolularItemComponent);