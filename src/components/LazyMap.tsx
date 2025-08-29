'use client';

import React, { useRef } from 'react';

function LazyMap() {
  // const [isVisible, setIsVisible] = useState(false);
  // eslint-disable-next-line no-undef
  const footerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // eslint-disable-next-line no-undef
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.disconnect(); // Отключаем, чтобы не отслеживать дальше
  //       }
  //     },
  //     { threshold: 0.1 }, // Запускаем, когда 10% элемента в области видимости
  //   );
  //
  //   if (footerRef.current) {
  //     observer.observe(footerRef.current);
  //   }
  //
  //   return () => observer.disconnect();
  // }, []);

  return (
    <div ref={footerRef} id="lazy-map">
      {/* {isVisible */}
      {/*  ? ( */}
      {/*    <div className="map-container mx-auto flex justify-center"> */}
      {/*      <div className="mx-auto mt-10"> */}
      {/*        <div className="mapouter"> */}
      {/*          <div className="gmap_canvas"> */}
      {/*            <iframe */}
      {/*              frameBorder="0" */}
      {/*              scrolling="no" */}
      {/*              title="contact map" */}
      {/*              className="max-w-[100%] gmap_iframe" */}
      {/*              width="3840" */}
      {/*              height="450" */}
      {/*              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=B%C4%83l%C8%9Bi%20MD,%20Strada%20%C8%98tefan%20cel%20Mare%2013,%20MD-3100,%20%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0+(%D0%94%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%20%D0%91%D0%B5%D0%BB%D1%8C%D1%86%D1%8B%20%7C%20Meddera%20%7C%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%20%D0%9F%D1%8B%D0%BD%D1%82%D1%8F%20%7C%20Dermatolog%20Balti%20%7C%20Ecaterina%20Pinteaness%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" */}
      {/*            /> */}
      {/*          </div> */}
      {/*        </div> */}
      {/*      </div> */}

      {/*    </div> */}
      {/*  ) : null} */}
      <div className="map-container mx-auto flex justify-center">
        <div className="mx-auto mt-10">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                frameBorder="0"
                scrolling="no"
                title="contact map"
                className="max-w-[100%] gmap_iframe"
                width="3840"
                height="450"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=B%C4%83l%C8%9Bi%20MD,%20Strada%20%C8%98tefan%20cel%20Mare%2013,%20MD-3100,%20%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0+(%D0%94%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%20%D0%91%D0%B5%D0%BB%D1%8C%D1%86%D1%8B%20%7C%20Meddera%20%7C%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%20%D0%9F%D1%8B%D0%BD%D1%82%D1%8F%20%7C%20Dermatolog%20Balti%20%7C%20Ecaterina%20Pinteaness%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LazyMap;
