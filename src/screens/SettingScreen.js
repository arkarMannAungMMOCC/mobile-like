import { memo } from "react";
import SettingScreenLayout from "@layout/SettingScreenLayout";
import { BsFillEmojiSmileFill, BsFileEarmarkRuledFill } from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
const SettingScreen = ({ useEffect, useState, useRef, useCallback,
    useSelector, dispatch, setUser,
    RouteName, comaFormat, Local }) => {
    const navigate = useNavigate();
    const account = {
        title: 'Account',
        listTiles: [
            {
                icon: BsFillEmojiSmileFill,
                label: 'My Account',
                action: () => { navigate(RouteName.account); }
            },
            {
                icon: MdOutlineDriveFileRenameOutline,
                label: 'Change name',
                action: () => { navigate(RouteName.changeName); }
            },
            {
                icon: RiLockPasswordFill,
                label: 'Change password',
                action: () => { navigate(RouteName.changePwd); }
            },
        ]

    }
    const about = {
        title: 'About',
        listTiles: [
            {
                icon: BsFileEarmarkRuledFill,
                label: 'Our Policy',
                action: () => { navigate(RouteName.policy) }
            },
            {
                icon: AiFillInfoCircle,
                label: 'About Us',
                action: () => { console.log("About ") }
            },
        ]

    }
    return (
        <>
            <SettingScreenLayout
                account={
                    <SettingComponent card={account} />
                }
                about={
                    <SettingComponent card={about} />
                }
            />
        </>
    )
}
export default memo(SettingScreen);

const SettingComponent = ({ card: { title, listTiles } }) => {
    return (
        <div className="p-4 rounded-2xl bg-white ">
            <div className="text-title font-bold text-[21px] mb-2">{title}</div>
            {
                listTiles.map(({ icon: Icon, label, action }, i) => {
                    return <div key={i} onClick={action} className={`flex flex-row  text-[#8E99AF] items-center pt-1 pb-2 ${i < listTiles.length - 1 ? 'border-b-[2px] border-gray-200' : ''}`}>
                        <Icon size={25} /><div className="ml-3 text-title">{label}</div>
                    </div>
                })
            }

        </div>
    )
}