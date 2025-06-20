import React, { useState } from 'react';
import './Gallery.css';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const events = [
  {
  id: 1,
  title: 'Flood Work',
  image: '/images/event1.jpg',
  images: [
    '/images/event_1a.jpg',
    '/images/event_1b.jpg',
    '/images/event_1c.jpg',
    '/images/event_1d.jpg',
    '/images/event_1e.jpg',
    '/images/event_1f.jpg',
    '/images/event_1g.jpg',
    '/images/event_1h.jpg',
    '/images/event_1i.jpg',
    '/images/event_1j.jpg',
    '/images/event_1k.jpg',
    '/images/event_1l.jpg',
    '/images/event_1m.jpg',
    '/images/event_1n.jpg',
    '/images/event_1o.jpg',
    '/images/event_1p.jpg',
    '/images/event_1q.jpg',
    '/images/event_1r.jpg',
    '/images/event_1s.jpg',
    '/images/event_1t.jpg',
    '/images/event_1u.jpg',
    '/images/event_1v.jpg',
    '/images/event_1w.jpg',
    '/images/event_1x.jpg',
  ],
},

  {
    id: 2,
    title: 'Awards at TATA hospital',
    image: '/images/event2.jpg',
    images: ['/images/event_2a.jpg', '/images/event_2b.jpg','/images/event_2c.jpg'],
  },
  {
  id: 3,
  title: 'BGT',
  image: '/images/event3.jpg',
  images: [
    ...Array.from({ length: 26 }, (_, i) => `/images/event_3_image/event_3${String.fromCharCode(97 + i)}.jpg`),
    ...Array.from({ length: 17 }, (_, i) => `/images/event_3_image/event_3_1${String.fromCharCode(97 + i)}.jpg`)
  ]
},

  {
  id: 4,
  title: 'BGT Annual Function',
  image: '/images/event4.jpg',
  images: Array.from({ length: 71 }, (_, i) => `/images/event_4_${i + 1}.jpg`),
},
  {
  id: 5,
  title: 'Cancer Detection Camp',
  image: '/images/event5.jpg',
  images: Array.from({ length: 6 }, (_, i) => `/images/event_5_${i + 1}.jpg`),
},
  {
  id: 6,
  title: 'Media Appreciations',
  image: '/images/event6.jpg',
  images: [
    '/images/event_6a.jpg',
    '/images/event_6b.jpg',
    '/images/event_6c.jpg',
    '/images/event_6d.jpg',
    '/images/event_6e.jpg',
    '/images/event_6f.jpg',
    '/images/event_6g.jpg',
    '/images/event_6h.jpg',
    '/images/event_6i.jpg',
    '/images/event_6j.jpg',
    '/images/event_6k.jpg',
    '/images/event_6l.jpg',
    '/images/event_6m.jpg',
    '/images/event_6n.jpg',
    '/images/event_6o.jpg',
  ],
},

   {
  id: 7,
  title: 'TATA Hospital Service',
  image: '/images/event7.jpg',
  images: Array.from({ length: 10 }, (_, i) => `/images/event_7_${i + 1}.jpg`),
},
  {
    id: 8,
    title: 'Coming Soon',
    image: '/images/event8.jpg',
    images: ['/images/event8.jpg'],
  },
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const openModal = (event) => {
    setSelectedEvent(event);
    setImgIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
    setImgIndex(0);
  };

  const scrollToThumbnail = (index) => {
    setTimeout(() => {
      document.getElementById(`thumb-${index}`)?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }, 50);
  };

  const nextImage = () => {
    if (selectedEvent) {
      setImgIndex((prev) => {
        const next = (prev + 1) % selectedEvent.images.length;
        scrollToThumbnail(next);
        return next;
      });
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setImgIndex((prev) => {
        const next = (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length;
        scrollToThumbnail(next);
        return next;
      });
    }
  };

  const selectImage = (index) => {
    setImgIndex(index);
    scrollToThumbnail(index);
  };

  return (
    <>
      <Navbar />
      <section className="gallery-section">
        <div className="gallery-container">
          <h2 className="gallery-title">Our Events Gallery</h2>
          <div className="event-grid">
            {events.map((event) => (
              <div key={event.id} className="event-box" onClick={() => openModal(event)}>
                <div
                  className="event-thumbnail"
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
                <div className="event-title">{event.title}</div>
              </div>
            ))}
          </div>
        </div>

        {modalOpen && selectedEvent && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>

              <img
                key={imgIndex}
                src={selectedEvent.images[imgIndex]}
                alt="event"
                className="modal-image"
              />

              <div className="thumbnail-nav-wrapper">
                <span className="arrow-button side left" onClick={prevImage}>‹</span>

                <div className="thumbnail-bar">
                  {selectedEvent.images.map((img, index) => (
                    <div
                      key={index}
                      id={`thumb-${index}`}
                      className={`thumbnail-item ${index === imgIndex ? 'active' : ''}`}
                      style={{ backgroundImage: `url(${img})` }}
                      onClick={() => selectImage(index)}
                    />
                  ))}
                </div>

                <span className="arrow-button side right" onClick={nextImage}>›</span>
              </div>

              <div className="modal-caption">{selectedEvent.title}</div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
