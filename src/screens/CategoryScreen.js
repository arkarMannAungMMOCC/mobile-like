import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryScreenLayout from "@layout/CategoryScreenLayout";
import PolularItemComponent from "@components/homeScreen/PolularItemComponent";
import { useNavigate, createSearchParams } from "react-router-dom";

const CategoryScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, Local,
    RouteName, comaFormat,
}) => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const label = searchParams.get('label');
    const [filteredItems, setFilteredItems] = useState([]);
    const items = useSelector(({ root }) => root.items);
    const navigate = useNavigate();
    //Action
    const itemDetailAction = (id) => {
        const params = { id };
        navigate({
            pathname: RouteName.productDetail,
            search: `?${createSearchParams(params)}`
        });
    }
    // business logic
    useEffect(() => {
        const temp = items.filter(({ sub_category: { category_id: categoryId } }) => categoryId == id);
        if (filteredItems.length === 0 && temp.length > 0) {
            setFilteredItems(temp);
            // console.log(temp);
        }
    }, [filteredItems]);
    // business logic
    return (
        <CategoryScreenLayout
            label={label}
            categoryItems={
                filteredItems.length === 0 ?
                    <div className="text-center text-gray-500 mt-4 text-lg">There is no item</div>
                    : <PolularItemComponent popularItems={filteredItems} onClick={itemDetailAction} title={label} />
            }
        />
    );
};
export default memo(CategoryScreen);
