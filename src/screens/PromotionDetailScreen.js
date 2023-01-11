import { memo } from "react";
import PromotionDetailScreenLayout from '@layout/PromotionDetailScreenLayout';
import { useSearchParams } from "react-router-dom";

const PromotionDetailScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, Local,
    RouteName, comaFormat,
}) => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const [promotion, setPromotion] = useState(null);
    const promotions = useSelector(state => state.root.promotions);
    useEffect(() => {
        if (promotions[id]) {
            setPromotion(promotions[id]);
        }
    }, [promotions]);
    return (
        <PromotionDetailScreenLayout
            image={
                promotion && <>
                    <img src={promotion.image_url} alt="promotion_photo" className="rounded-t-2xl" />
                </>
            }
            title={promotion ? promotion.title : ''}
            description={promotion ? promotion.body : ''}
        />
    );
}

// :<><div className="flex flex-row h-44 items-center justify-center animate-pulse">Loading . . . </div></>

export default memo(PromotionDetailScreen);