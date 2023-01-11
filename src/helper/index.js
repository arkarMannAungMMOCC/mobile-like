export const comaFormat = (number) => {
    return Intl.NumberFormat('en-US').format(number);
}
export const scrollUp = (props = { top: 0 }) => {
    window.scrollTo({
        ...props
    });
}
export const dateFormatter = (date)=>{
    const strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const d = date.getDate();
    const m = strArray[date.getMonth()];
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
}

export const sleep = (ms) => new Promise(_ => setInterval(_, ms));
/*
    @12/31/2022 end of 2022
    @author Ackerman Aaung and A mie mie Lwin
    @params 
        name<string> @default="field"
        value<string>, 
        setErrValue<function>  @default=()=>{}
        rule<object> 
            required<bool>,
            min<number>,
            max<number>,
            specialChar<bool>,
            isEmail<bool>,
*/
export const validator = ({
    value,
    setErrValue = () => { },
    rule,
    name = "field"
}) => {
    const rules = Object.keys(rule);
    setErrValue('');
    let isValidate = true;
    // required
    if (rules.includes('required') && rule["required"]) {
        if (!value) {
            setErrValue(`your ${name} is required!`);
            return false;
        }
    }
    // min
    if (rules.includes('min') && rule['min']) {
        if (value.length < rule['min']) {
            setErrValue(`please enter ${name} length min ${rule['min']}!`);
            return false;
        }
    }
    // max
    if (rules.includes('max') && rule['max']) {
        if (value.length > rule['max']) {
            setErrValue(`please enter ${name} length max ${rule['max']}!`);
            return false;
        }
    }
    // specialChar
    if (rules.includes('specialChar') && rule['specialChar']) {
        const sChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!sChar.test(value)) {
            setErrValue(`${name} must be include special character!`);
            return false;
        }
    }

    // isEmail
    if (rules.includes('isEmail') && rule['isEmail']) {
        const char = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(value.toLowerCase());
        if (!char.test(value.toLowerCase())) {
            setErrValue(`${name} must be Email!`);
            return false;
        }
    }


    console.log('bottom success');
    return isValidate;
}