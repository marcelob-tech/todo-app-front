import React from 'react';

const IF = (props) => {
    if (props.test) {
        return props.children;
    } else {
        return false;
    }
};

export default IF;
