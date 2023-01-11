import { memo } from "react"
import RouteName from '@route/RouteName';
import { useSelector } from "react-redux";
import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';
export const tabItems = [
    {
        path: RouteName.home,
        name: 'Home'
    },
    {
        path: RouteName.promotion,
        name: 'Promotions'
    },
    {
        path: RouteName.delivery,
        name: 'Delivery'
    },
];
const TabBarComponent = () => {
    const currentRoute = useLocation().pathname;
    const search = useLocation().search;
    const navigate = useNavigate();
    const categories = useSelector(({ root }) => root.categories);
    const navItemAction = (path) => {
        if (path === currentRoute) return;
        navigate(path);
    }
    const categoryItemAction = ({ id, label }) => {
        const params = { id, label };
        navigate({
            pathname: RouteName.category,
            search: `?${createSearchParams(params)}`
        });
    }
    return (
        <>
            <div className=" mt-[96px] w-screen h-[2px]  fixed  bg-white">
            </div>
            <div className="flex flex-row mt-[98px] w-screen  fixed  pl-20 font-bold bg-primary shadow-xl">
                {/* Home & Delivery & Promotions  */}
                {
                    tabItems.map((item, i) => {
                        return (
                            <div key={i} className="  cursor-pointer select-none ml-4 my-[3px] ">
                                <div onClick={() => { navItemAction(item.path) }} key={i} className={`${currentRoute === item.path ? 'border border-[#FFEB4A] rounded-lg px-2 bg-[#FFEB4A] text-[#4D5E80]' : 'text-white'} `}>
                                    <div className="">{item.name}</div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* Catagories Tab */}
                {
                    categories.map(({ id, name }, i) => {
                        return (
                            <div key={i} className="  cursor-pointer select-none ml-4 my-[3px] ">
                                <div onClick={() => { categoryItemAction({ id, label: name }) }} key={i} className={`${currentRoute + search === `${RouteName.category}?id=${id}&label=${name}` ? 'border border-[#FFEB4A] rounded-lg px-2 bg-[#FFEB4A] text-[#4D5E80]' : 'text-white'} `}>
                                    <div className="">{name}</div>                      { /*          /category?id=4      === /category?id=4            */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default memo(TabBarComponent);