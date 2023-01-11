import { memo } from "react";
import PromotionScreenLayout from "@layout/PromotionScreenLayout";
import { useNavigate, createSearchParams } from "react-router-dom";

const PromotionScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, Local,
    RouteName, comaFormat,
}) => {
    const navigate = useNavigate();
    const promotions = useSelector(state => state.root.promotions);
    const renderItem = ({ image_url, title }, i) => {
        return (
            <div onClick={() => carouselAction(i)} key={i} className="flex flex-col shadow-lg cursor-pointer rounded-lg md:rounded-xl">
                <div className="flex flex-row">
                    <img src={image_url} className="object-contain rounded-t-lg md:rounded-t-xl" />
                </div>
                <div className="p-2 rounded-b-lg md:rounded-b-xl">{title}</div>
            </div>
        );
    }
    const carouselAction = (id) => {
        const params = { id };
        navigate({
            pathname: RouteName.promotionDetail,
            search: `?${createSearchParams(params)}`
        });
    }
    useEffect(() => {

    })
    return (
        <PromotionScreenLayout
            body={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
                    {
                        promotions.map(({ image_url, title }, i) => renderItem({ image_url, title }, i))
                    }
                </div>
            }
        />
    );
};
export default memo(PromotionScreen);