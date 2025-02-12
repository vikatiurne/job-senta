import { useRef, useEffect, useState } from 'react';
import cn from 'classnames'

import style from './Scroll.module.css'

const Scroll = (props) => {

    const { children, classContent, width = "100%", height = "100%" } = props;
    const scrollContainerRef = useRef(null);
    const [hasScroll, setHasScroll] = useState(false);

    useEffect(() => {
        const container = scrollContainerRef.current
        const checkScroll = () => {
            setHasScroll(container.firstChild.firstChild.clientHeight > container.scrollHeight);
        };

        checkScroll();

        const handleScroll = (e) => {
            if (container.scrollHeight > container.clientHeight) {
                e.preventDefault();
                container.scrollTop += e.deltaY;

            }
        };
        container.addEventListener('wheel', handleScroll);
        container.addEventListener('resize', checkScroll);

        return () => {
            container.removeEventListener('wheel', handleScroll);
            container.removeEventListener('resize', checkScroll);
        }

    }, [children])

    return (
        <div
            ref={scrollContainerRef}
            style={{ height, width }}
            className={style.customScroll}
        >
            <div className={cn(style.customScrollContent, classContent,
                { [style.withScroll]: hasScroll && height }
            )}>
                <div className={style.scrollWrap}>
                    {children}
                </div>
            </div>
        </div >
    );
};


export default Scroll;