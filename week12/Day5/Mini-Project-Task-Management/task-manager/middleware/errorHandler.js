//creating my middleware handler

const errorHandler = (err, req, res, next) => {
  console.error(err); //to show the error

  //sending a response as a 500 error
  res.status(500).json({message:'We have an error'});
};

export default errorHandler;
