import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'
import style from './Scroll.module.css'

const Scroll = (props) => {
    const { children, width = "100%", height = "100%" } = props
    const scrollContainerRef = useRef(null)
    const [hasScroll, setHasScroll] = useState(false);

    console.log('hasScroll', hasScroll);

    useEffect(() => {
        const container = scrollContainerRef.current
        // console.log(container.scrollHeight, container);
        // console.log(container.firstChild.firstChild.clientHeight, container.firstChild.firstChild);


        setHasScroll(container.firstChild.firstChild.clientHeight > container.scrollHeight);

        // console.log(container.firstChild.firstChild)


        const handleScroll = (e) => {
            if (container.scrollHeight > container.clientHeight) {
                e.preventDefault();
                container.scrollTop += e.deltaY;

            }
        }
        container.addEventListener('wheel', handleScroll);
        return () => {
            container.removeEventListener('wheel', handleScroll)
        }

    }, [])

    return (
        <div
            ref={scrollContainerRef}
            style={{ height, width }}
            className={style.customScroll}
        >
            <div className={cn(style.customScrollContent,
                { [style.withScroll]: hasScroll }
            )}>
                {children}
            </div>
        </div >
    );
};

Scroll.propTypes = {};

export default Scroll;