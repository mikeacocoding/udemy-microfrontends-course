import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        // Se carga el microfront cuando se monte el effecto.
        mount(ref.current);
    });

    return <div ref={ref} />;
};