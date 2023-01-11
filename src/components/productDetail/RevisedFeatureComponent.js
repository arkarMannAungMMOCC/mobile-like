import { memo } from "react";

const RevisedFeatureComponent = ({
    screen_size: screenSize,
    storage,
    operating_system: os,
    camera,
    battery
}) => {
    const features = [
        {
            label: 'Screen Size',
            value: screenSize
        },
        {
            label: 'Storage',
            value: storage
        },
        {
            label: 'Opeating System',
            value: os
        },
        {
            label: 'Camera',
            value: camera
        },
        {
            label: 'Battery',
            value: battery
        },
    ];
    return (<>
        <div className="bg-white rounded-2xl ">
            {
                features.map(({ label, value }, i) => {
                    return (
                        value && <div key={i} className={`flex flex-row justify-between container mx-auto h-16 items-center flex-grow ${features.length - 1 === i ? 'border-0' : 'border-b-2'} border-[#D0D0D0]`} >
                            <div className="flex-[2] font-bold">{label}</div>
                            <div className="flex-[3] flex flex-row justify-end text-right">{value}</div>
                        </div>)
                })
            }
        </div>
    </>);
}
export default memo(RevisedFeatureComponent);