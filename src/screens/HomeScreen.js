import { memo } from "react";
import HomeScreenLayout from "@layout/HomeScreenLayout";
import { useNavigate, createSearchParams } from "react-router-dom";
import Carousel from "@components/homeScreen/CarouselComponent";
import CategoryComponent from "@components/homeScreen/CategoryComponent";
import PromotionComponent from "@components/homeScreen/PromotionComponent";
import PolularItemComponent from "@components/homeScreen/PolularItemComponent";
const HomeScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, Local,
    RouteName
}) => {
    const navigate = useNavigate();
    const {
        user: { name, token },
        promotions: carousels,
        categories,
        popularItems,
        promotionItems
    } = useSelector(({ root }) => root);
    // business logic
    // Action 
    const itemDetailAction = (id) => {
        const params = { id };
        navigate({
            pathname: RouteName.productDetail,
            search: `?${createSearchParams(params)}`
        });
    }
    const carouselAction = (id) => {
        const params = { id };
        navigate({
            pathname: RouteName.promotionDetail,
            search: `?${createSearchParams(params)}`
        });
    }


    // Action 
    useEffect(() => {

        const universe = {
            galaxy: null,
            world: {
                asia: {
                    myanmars: [
                        {
                            yangon: {
                                humans: [
                                    { name: 'a mie mie lwin', age: 23 },
                                    { name: 'unknown', age: null },
                                    { name: 'Arkar Mann aung', age: 26 }
                                ]
                            }
                        },
                        {
                            mandalay: {
                                humans: [
                                    { name: 'thu zar linn', age: 23 },
                                    { name: 'တွတ်ပီ', age: null }
                                ]
                            }
                        }
                    ]
                },
                america: null, africaa: null, europe: null
            },
        }
        const { world: { asia: { myanmars: [{ yangon: { humans: [amie, f, arkar] } }, { mandalay: { humans: [thuzarlin, pigStick] } }] } } } = universe;
        // console.log({amie,arkar,thuzarlin,pigStick});
    })
    return (
        <HomeScreenLayout
            carousel={<Carousel onClickItem={carouselAction} carouselPhotos={carousels} />}
            category={<CategoryComponent categories={categories} />}
            promotions={<PromotionComponent promotions={promotionItems} onClick={itemDetailAction} />}
            popularItems={
                <PolularItemComponent popularItems={popularItems} onClick={itemDetailAction} title="Popular Items" />
            }
        />
    );
};
export default memo(HomeScreen);
