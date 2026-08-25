import { useEffect, useRef, useState } from 'react'

const CountUp = ({ end, duration = 1800, suffix = '', className }) => {
    const [count, setCount] = useState(1);
    const elementRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const node = elementRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const startTime = performance.now();

                    const tick = (now) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const value = progress >= 1 ? end : Math.round(1 + eased * (end - 1));
                        setCount(value);

                        if (progress < 1) {
                            requestAnimationFrame(tick);
                        }
                    };

                    requestAnimationFrame(tick);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <div className={className} ref={elementRef}>
            {count}{suffix}
        </div>
    );
}

export default CountUp
