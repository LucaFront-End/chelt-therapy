import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.querySelectorAll('.reveal').forEach((child) => {
                        child.classList.add('reveal--visible');
                    });
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
