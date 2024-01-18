import { RequestHandler } from 'express';

export const getMe : RequestHandler= (req, res, next) => {
  try {
    
    const { _id, email, name } = req.user;

    return res.status(200).json({
      user: {
        _id,
        email,
        name
      },
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "An error occured while fetching your user"
    });
  }
  return next();
};
