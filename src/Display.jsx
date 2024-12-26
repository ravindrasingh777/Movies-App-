import React from 'react';

const Display = (props) => {
    return (
        <>
        <div className="container-fluid my-4">
            <div className="row">
                {
                    props.Movies.map(
                        (movie)=>{
                            return(
                                <div className="col-6 col-md-4 col-lg-3   mb-3">
                                <div className="box position-relative d-flex flex-column align-items-center">
                                <img width="90%" height="50%" src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt="" />

                                <div className="box-content  border position-absolute  bg-white">
                                    <div className="box-title text-danger fs-5 fw-bold px-2">
                                        <div>{movie.title}</div> 
                                        <div className='rate'><i class="fa-solid fa-star"></i>{movie.vote_average}</div>
                                    </div>
                                    <div className="box-description px-2">
                                        <h5 className='m-0 overview'>Overview:-</h5>
                                        <p>{movie.overview}</p>
                                    </div>

                                </div>
                                </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
            
        </>
    );
}

export default Display;
