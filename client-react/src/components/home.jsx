import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function home() {
    return (
 <div className='button-group-page' style={{paddingTop:'20%', paddingLeft:'25%', paddingRight:'10%'}}>
        <button type="button" className="btn btn-primary"
        style={{width:'300px',height:'75px', marginRight:'40px'}}>
            Create Outlet
        </button>
        <button type="button" className="btn btn-warning"
        style={{width:'300px',height:'75px', marginRight:'40px'}}>
            Create Food Item
        </button>
 </div>
    )
}

export default home