import { memo } from "react";

const FeatureComponent = ({ feature }) => {
    const convert = (key) => {
        return key === 'screen_size' ? 'screen' :
            key === 'operating_system' ? 'os' : key;
    }
    const generate = () => {
        const filtered = Object.keys(feature)
            .filter((key) => !((key.includes("id")) || (key.includes("_at"))))
            .reduce((obj, key) => {
                return Object.assign(obj, {
                    [key]: feature[key]
                });
            }, {});
        // console.log("filtered Keys feature ", filtered);
        // console.log(('Object By Key: ' + JSON.stringify(filtered)));
        // const data = Object.entries(filtered);
        const data = (Object.values(filtered)) && Object.entries(filtered) // [ [key,value],[key,value],[key,value] ]
            .filter(([key, value]) => value);

        let generated = [];
        data.map(([key, value], i) => {
            generated = [...generated, [key, value]];
            if (i !== data.length - 1) {
                generated = [...generated, ['amie', 'amie']];
            }
        })
        return generated;
    }
    return (
        <>
            <div className="flex flex-row w-full justify-between items-center text-sm h-14">
                {
                    generate()
                        .map(([key, value], i) => (
                            key !== 'amie' ?
                                <div key={i} className="flex flex-row">
                                    <div className="flex flex-col items-center ">
                                        <div className="text-primary">{convert(key)}</div>
                                        <div className="mt-1 font-semibold ">{value}</div>
                                    </div>
                                </div>
                                :
                                // vertical divider
                                <div key={i} className="flex flex-col h-10 bg-gray-300 w-0.5 rounded-full">

                                </div>
                        ))
                }
            </div>
        </>
    )
}
export default memo(FeatureComponent);