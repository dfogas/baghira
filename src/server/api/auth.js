import express from 'express';

const router = express.Router();

// login handling logic stored here, interesting
router.route('/login')
  .post((req, res, next) => {

    const {password} = req.body;

    // Simulate DB checks here.
    setTimeout(() => {
      if (password !== 'pass1')
        res.status(400).end();
      else
        res.status(200).end();
    }, 1000);

  });

export default router;
