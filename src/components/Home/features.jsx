export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="features-text">
          <h2>What you can do</h2>
        </div>
        <div className="features-content">
          <p>
            Donate to poor people in the most safest and secure possible with
            the help of blockchain technology so that no corporation or charity
            middleman can misuse your money and get it to those who desperately
            need it.
          </p>
          <div className="a-tag">
          <a href="/donate" className="btn btn-custom btn-lg">
            Donate money
          </a>
          </div>
          <p>
            Donate food and other necessities to your desired banks, our
            partners will come to you to pick up the things and faithfully
            deliver it to your prefered food banks.
          </p>
          <div className="a-tag">
          <a href="/donateFood" className="btn btn-custom btn-lg">
            Donate Food
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};
