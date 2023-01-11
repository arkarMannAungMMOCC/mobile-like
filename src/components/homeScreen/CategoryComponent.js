import { memo } from "react";
import { useNavigate, createSearchParams } from 'react-router-dom';
import RouteName from '@route/RouteName';
const CategoryComponent = ({ categories }) => {
    const navigate = useNavigate();
    const categoryItemAction = ({ id, label }) => {
        const params = { id, label };
        navigate({
            pathname: RouteName.category,
            search: `?${createSearchParams(params)}`
        });
    }
    return (
        <div className="md:ml-10 grid grid-cols-3 lg:grid-cols-2 my-4 md:mt-20 lg:my-0 gap-4 md:gap-6">
            {
                categories.map(({ id, photo_url: photo, name: label }) => {
                    return (
                        <div onClick={() => categoryItemAction({ id, label })} key={id} className="flex flex-row justify-center cursor-pointer hover:font-bold">
                            <div className="flex flex-col items-center">
                                <img src={photo} alt="photos" className="w-[150px] h-[100px] rounded-xl shadow-lg" />
                                <div className="text-[#4D5E80] mt-2">{label}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default memo(CategoryComponent);