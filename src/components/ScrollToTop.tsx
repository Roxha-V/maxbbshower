import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll inmediato al top cuando cambia la ruta o se carga la página
    window.scrollTo(0, 0);
    
    // También hacer scroll suave después de un pequeño delay para mejor UX
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  // También hacer scroll al top cuando se monta el componente (carga inicial)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;

