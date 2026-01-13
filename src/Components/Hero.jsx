import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Discover Your <br />
          <span>Perfect Style</span>
        </h1>

        <p>
          Shop the latest trends with exclusive deals and fast delivery.
          Premium quality products just one click away.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">View Offers</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
          alt="ecommerce"
        />
      </div>
    </section>
  );
};

export default Hero;
