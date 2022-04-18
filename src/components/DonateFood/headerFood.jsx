const HeaderFood = (props) => {
    return (
        <header id='header'>
          <div className='intro2'>
            <div className='overlay'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8 col-md-offset-2 intro2-text'>
                    <h1>
                      Donate Food and Clothes
                      <span></span>
                    </h1>
                    <p > Donate food and used clothes to the needy</p>
                    <a
                      href='#features'
                      className='btn btn-custom btn-lg page-scroll'
                    >
                      Scroll to Donate
                    </a>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      );
}
 
export default HeaderFood;