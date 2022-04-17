export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro1">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro1-text">
                <h1>
                  VizFund
                  <span></span>
                </h1>
                <p>
                  VizFund is the perfect way to help our poorest brothers
                  and sisters.
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Scroll to Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
