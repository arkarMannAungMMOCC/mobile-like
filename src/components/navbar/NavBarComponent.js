import { useCallback, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import RouteName from '@route/RouteName';
// normal icon list
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdOutlineDeliveryDining, MdDeliveryDining } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { RiAccountCircleFill, RiAccountCircleLine } from "react-icons/ri";
import { BsMegaphone, BsMegaphoneFill } from "react-icons/bs";
import WebViewHeaderComponent from '@components/navbar/WebViewHeaderComponent';
import MobileRootHeaderComponent from './MobileRootHeaderComponent';
import MobileChildHeaderComponent from './MobileChildHeaderComponent';

export const navItems = [
  {
    badge: false,
    path: RouteName.home,
    icon: {
      active: AiFillHome,
      default: AiOutlineHome
    },
    name: 'Home'
  },
  {
    badge: false,
    path: RouteName.promotion,
    icon: {
      active: BsMegaphoneFill,
      default: BsMegaphone
    },
    name: 'Promotions'
  },
  {
    badge: true,
    path: RouteName.cart,
    icon: {
      active: HiShoppingCart,
      default: AiOutlineShoppingCart,
    },
    name: 'Cart'
  },
  {
    badge: false,
    path: RouteName.delivery,
    icon: {
      active: MdDeliveryDining,
      default: MdOutlineDeliveryDining,
    },
    name: 'Delivery'
  },
  {
    badge: false,
    path: RouteName.account,
    icon: {
      active: RiAccountCircleFill,
      default: RiAccountCircleLine,
    },
    name: 'Account'
  },
];
export default function Navbar({
  root = true,
  appBar = { title: '', centerTitle: true, leadingIcon: false, leadingRoute: -1 }
}) {
  const [searchValue, setSearchValue] = useState('');
  const currentRoute = useLocation().pathname;
  const navigate = useNavigate();

  const searchAction = useCallback(() => {
    alert('search');
  }, [searchValue]);

  const navItemAction = (path) => {
    if (path === currentRoute) return;
    navigate(path);
  }
  return (
    <div>
      {/* Mobile View Only md:hidden */}
      {
        root ? <MobileRootHeaderComponent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchAction={searchAction}
        />
          : <MobileChildHeaderComponent {...appBar} />
      }
      {/* Web View Only hidden md:flex */}
      <WebViewHeaderComponent />
    </div>
  );
}