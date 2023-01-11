import { memo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ProductDetailScreenLayout from '@layout/ProductDetailScreenLayout';
import ImageCard from "@components/productDetail/ImageCardComponent";
import MobileInfo from "@components/productDetail/MobileInfoComponent";
import Feature from "@components/productDetail/RevisedFeatureComponent";
// store
import { setCartCount } from "@store/reducer/rootSlice";
// store
const ProductDetailScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, Local,
    RouteName, comaFormat,
}) => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const [detailItem, setdetailItem] = useState(null);
    const [photoIndex, setPhotoIndex] = useState(0);
    const items = useSelector(({ root: { items } }) => items);
    const navigate = useNavigate();
    const local = Local({ setCartCount, dispatch });

    // Action
    const next = useCallback(() => {
        if ((detailItem.images.length - 1) === photoIndex) { // this is end
            setPhotoIndex(0);
        } else {
            setPhotoIndex(photoIndex + 1);
        }
    }, [photoIndex, detailItem]);

    const prev = useCallback(() => {
        if (photoIndex === 0) { // this is first index
            setPhotoIndex(detailItem.images.length - 1);
        } else {
            setPhotoIndex(photoIndex - 1);
        }
    }, [photoIndex, detailItem]);
    const addToCartAction = () => {
        const base = "https://dev.mobilelikemm.com/ml/public/";
        const cart = {
            id: detailItem.id,
            price: detailItem.detail.discount > 0 ? detailItem.detail.discount : detailItem.detail.price,
            name: detailItem.name,
            quantity: 1,
            sku: detailItem.detail.SKU,
            imageUrl: detailItem.created_at ? (detailItem.images.length===0? '' : `${base}${detailItem.images[0].photo_url}`) : detailItem.images[0].photo_url
        };
        if (local.getCart()) {
            const checks = local.getCart().filter((item) => item.id === detailItem.id);
            if (checks.length === 0) {
                local.addCart(cart);
            }
        } else {
            local.setCart([cart]); // [ ] new
        }
        // TODO: go to cart screen
        navigate(RouteName.cart);
    }
    // Action
    useEffect(() => {
        const [filteredItem] = items.filter((item) => item.id === parseInt(id));
        setdetailItem(filteredItem);
        console.log(filteredItem)
    }, [detailItem]);
    return (
        <ProductDetailScreenLayout
            imageCard={
                detailItem && detailItem.images.length > 0 &&
                <ImageCard next={next} prev={prev} photoIndex={photoIndex} detailItem={detailItem} setPhotoIndex={setPhotoIndex} />
            }
            feature={
                detailItem ? detailItem.feature !== null && <Feature {...detailItem.feature} /> : <></>
            }
            mobileInfo={
                <MobileInfo detailItem={detailItem} addToCartAction={addToCartAction} />
            }
            addToCartAction={addToCartAction}
        />
    );
}
export default memo(ProductDetailScreen);