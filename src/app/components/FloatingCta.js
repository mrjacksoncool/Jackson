import { useEffect, useState } from 'react';
import styles from './floatingcta.module.css';

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setExpanded(scrollY > 150);
  };

    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
      <>
        {/* <div className=>

        </div>

        <div>
          <div>

            </div>
        </div> */}
      </>
    )
  };
