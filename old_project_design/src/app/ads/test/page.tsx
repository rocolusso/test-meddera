import React from 'react';

function Page() {
  return (
    <div>
      <div>
        hello // landing page here
      </div>
      <div className="gmap_canvas">
        <iframe
          frameBorder="0"
          scrolling="no"
          title="contact map"
          className="max-w-[100%] gmap_iframe"
          width="3840"
          height="800"
          src="quiz--url--here"
        />
      </div>
    </div>
  );
}

export default Page;
