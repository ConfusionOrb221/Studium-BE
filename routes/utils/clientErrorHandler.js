module.exports = ( err, req, res, next ) => {
  if( req.xhr ){
    res.logger.info( "Client Error Handler", "Sending out res to user." );
    res.status( err.status || 500 )
      .send( {
        error: "Internal Server Error",
        message: err.userMessage || err.message || "Unknown error message"
      } );
    res.logger.info( "Client Error Handler", "Waiting for next request." );
  }else{
    next( err );
  }
};