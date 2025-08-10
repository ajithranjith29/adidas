import { useEffect } from 'react';
import { useLocation, Outlet, useOutletContext } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const context = useOutletContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <Outlet context={context} />;
};

export default ScrollToTop;