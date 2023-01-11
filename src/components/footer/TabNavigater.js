import { memo } from "react";
// store
import { useSelector } from "react-redux";
// store

const TabNavigater = ({
    navItems, 
    navItemAction,
    currentRoute
}) => {
    const cartCount = useSelector(state => state.root.cartCount);
    const { token, id } = useSelector( ({root: {user} })=> user );
    const renderItem = ({ i, item }) => {
        return (
            item.badge ? <div key={Math.random()} onClick={() => navItemAction(item.path)} className="flex flex-col items-center w-fit py-2 px-2">
                <div className={`relative ${currentRoute.includes(item.path) ? 'text-primary' : 'text-gray-500'}`}>
                    {currentRoute.includes(item.path) && <item.icon.active size={35} />}
                    {!currentRoute.includes(item.path) && <item.icon.default size={30} />}
                    <div className="absolute text-sm text-white -top-1.5 -right-2 py-0 px-1.5 bg-yellow-500 rounded-full">{cartCount}</div>
                </div>
                <div className="text-sm">
                    {item.name}
                </div>
            </div>
            : item.path==='/account'? 
            <div key={Math.random()} onClick={() => navItemAction(item.path)} className="flex flex-col items-center w-fit py-2 px-2">
                <div className={`${currentRoute === item.path ? 'text-primary' : 'text-gray-500'}`}>
                    {currentRoute === item.path && <item.icon.active size={35} />}
                    {currentRoute !== item.path && <item.icon.default size={30} />}
                </div>
                <div className="text-sm">
                    {token && id? item.name : 'SignUp'} 
                </div>
            </div>
            : <div key={Math.random()} onClick={() => navItemAction(item.path)} className="flex flex-col items-center w-fit py-2 px-2">
                <div className={`${currentRoute === item.path ? 'text-primary' : 'text-gray-500'}`}>
                    {currentRoute === item.path && <item.icon.active size={35} />}
                    {currentRoute !== item.path && <item.icon.default size={30} />}
                </div>
                <div className="text-sm">
                    {item.name}
                </div>
            </div>
        );
    }
    return (
        <>
            <div className="fixed bottom-0 flex flex-row md:hidden justify-around w-screen h-20 border-2 border-b-0 bg-white border-gray-300 rounded-t-3xl">
                <div className="container mx-auto flex flex-row justify-around">
                    {
                        navItems.map((item, i) => {
                            return renderItem({ i, item });
                        })
                    }
                </div>
            </div>
        </>
    );
}
export default memo(TabNavigater);