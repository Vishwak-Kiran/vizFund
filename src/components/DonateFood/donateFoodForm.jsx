const DonateFoodForm = () => {
    
    return (
        <div id="features" class="containmain" style={{padding: '100px', margin:'20px'}}>
          <div class="contain">
            <form className="formmain" >
              <h1 className="sendpay">SEND ETH DONATION</h1>
              <div className="">
                <div className="form-group">
                  <input
                    name="ether"
                    type="text"
                    className="form-control"
                    placeholder="Amount in ETH"
                  />
                </div>
              </div>
    
              <footer className="form-group">
                <button type="submit" className="btn btn-custom btn-lg">
                  Pay now
                </button>
               
              </footer>
            </form>
          </div>
        </div>
      );
    }
    

 
export default DonateFoodForm;