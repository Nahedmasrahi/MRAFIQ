import React from 'react';

const MapSection = () => {
  return (
    <section className="w-full">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title="King Khalid International Airport Map"
          width="100%"
          height="450"
          className="rounded-lg w-full border-2 border-gray-200 shadow-md"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.672922150737!2d46.69843407513913!3d24.957453741304392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efb309c9e8c89%3A0xa56d9a20b7649c5f!2sKing%20Khalid%20International%20Airport!5e0!3m2!1sen!2ssa!4v1721066844666!5m2!1sen!2ssa"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
