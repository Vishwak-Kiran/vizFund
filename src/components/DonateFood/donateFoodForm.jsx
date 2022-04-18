
const DonateFoodForm = () => {
    
    return (
        <div id="features" class="containmain" style={{padding: '100px', margin:'20px'}}>
          <div class="contain">
            <form className="formmain" >
              <h1 className="sendpay">SEND BOOKS , CLOTHES OR FOODS</h1>
              <div className="">
                <div className="form-group">
                <h4>Shipping Address</h4>

<p>You can click the button below to use your current location as your shipping address</p>

<div id="map">
</div>

<p id="current_position" style={{padding: '10px'}}></p>

<button id="showMe" class="btn center-align" style={{margin:'7px' ,padding: '12px' ,backgroundColor:'#000ff354',color:'#fff'}}>

  Use My Location
</button>



<br></br>
                  <input 
                    name="ether"
                    type="text"
                    className="form-control"
                    placeholder="Pickup Address"
                    style={{height: '80px'}}
                  />
                  
                  <label style={{marginTop:'20px'}} > Select Nearby Food Bank </label>  
<select style={{margin: '30px'}}>  
<option value = "Chennai" > Chennai Food Bank
</option>  
<option value = "Bangalore"> Bangalore Good Shepherd 
</option>  
<option value = "Madurai"> Madurai Namma Bank
</option>  
<option value = "Kerala"> Kerala  
</option>  
</select>  
                </div>
              </div>
    
              <footer className="form-group">
                <button type="submit" className="btn btn-custom btn-lg">
                  Donate 
                </button>
               
              </footer>
            </form>
          </div>
        </div>
      );
    }
    

 
export default DonateFoodForm;