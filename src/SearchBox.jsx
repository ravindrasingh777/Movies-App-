import React from 'react';
const SearchBox = (props) => {
    return (
        <>
              <div className="container mt-2">
              <div className="row">
              <div className="col-11 mx-auto">
              <input onChange={(e)=> props.puttingvalue(e.target.value)} type="text" placeholder='Enter Your Movie Name Here...'  className='form-control' />
              </div>
               </div>
            </div>
        </>
    );
}

export default SearchBox;
