import React, { useState, useEffect } from "react";
import "../styles/sec_hero.css";
import { FaUser, FaPlay } from "react-icons/fa"; // Importamos iconos de react-icons
import image1 from "../assets/fondo1.png";
import image2 from "../assets/fondo2.png";
import image3 from "../assets/fondo1.png";

const SecHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      image: image1, 
      title: "Descubre paisajes increíbles",
      subtitle: "Explora los destinos más impresionantes del mundo" 
    },
    { 
      image: image2, 
      title: "Aventuras inolvidables",
      subtitle: "Vive experiencias únicas en cada viaje" 
    },
    { 
      image: image3, 
      title: "Lugares paradisíacos",
      subtitle: "Encuentra tu próximo destino soñado" 
    }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section">
      {/* Carrusel de imágenes */}
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== currentSlide}
          >
            <div className="image-overlay"></div>
          </div>
        ))}
      </div>

      {/* Controles del carrusel */}
      <button className="carousel-control prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &gt;
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-left">
            <a className="logo" href="#">
              Turismo<span className="logo-highlight">HP</span>
            </a>
          </div>
          
          <div className="navbar-center">
            <a href="#" className="nav-link">Inicio</a>
            <a href="#" className="nav-link">Nosotros</a>
            <a href="#" className="nav-link">Destinos</a>
            <a href="#" className="nav-link">Promociones</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contacto</a>
          </div>
          
          <div className="navbar-right">
            <button className="login-icon">
              <FaUser size={18} />
            </button>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <div className="text-content">
          <p className="intro-text fade-in">{slides[currentSlide].subtitle}</p>
          <h1 className="main-title slide-up">
            <strong>{slides[currentSlide].title}</strong>
          </h1>
          
          <div className="button-group">
            <button 
              className="primary-btn pulse"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? '¡Empezar ahora!' : 'Descubrir más'}
            </button>
            
            <button className="secondary-btn">
              Ver promociones
            </button>
            
            <button className="video-btn">
              <FaPlay size={14} /> Ver tour
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Desplázate para explorar</p>
      </div>
    </section>
  );
};

export default SecHero;