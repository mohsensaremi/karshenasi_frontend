import React, {useState, useRef, useEffect} from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectField = (props) => {

    const {
        label,
        children,
        margin,
        fullWidth,
        className,
        variant,
        name,
        ...otherProps
    } = props;


    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        if (variant === "outlined") {
            setLabelWidth(inputLabel.current.offsetWidth);
        }
    }, []);

    const selectProps = {};
    if (variant === "outlined") {
        selectProps.input = (
            <OutlinedInput name={name} labelWidth={labelWidth}/>
        );
    }

    return (
        <FormControl margin={margin} fullWidth={fullWidth} className={className} variant={variant}>
            <InputLabel ref={inputLabel}>{label}</InputLabel>
            <Select
                {...otherProps}
                {...selectProps}
            >
                {children}
            </Select>
        </FormControl>
    );
};

export default SelectField;
