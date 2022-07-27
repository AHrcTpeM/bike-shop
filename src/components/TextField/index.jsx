import React from 'react';
import { Input } from './styled';

function TextField({placeholder, error, errorlabel, ...rest}) {
    return (
        <Input placeholder={error ? errorlabel : placeholder} error={error}  {...rest}/>
    )
}

export default TextField;