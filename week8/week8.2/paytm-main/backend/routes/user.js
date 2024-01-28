const { Router } = require('express');
const z = require('zod');
const { User, Account } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { authMiddleware } = require('../middleware');

const router = Router();

const signupBody = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string().min(8),
});

router.post('/signup', async (req, res) => {
  console.log('Received a POST request to /api/v1/user/signup');
  const { username, password, firstName, lastName } = req.body;
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: 'Email already taken / Incorrect inputs',
    });
  }

  const existingUser = await User.findOne({
    username: username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: 'Email already taken / Incorrect inputs',
    });
  }

  const user = await User.create({
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: 'User created successfully',
    token: token,
  });
});

const signinBody = z.object({
  username: z.string().email(),
  password: z.string().min(8),
});
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: 'Incorrect inputs',
    });
  }
  const user = await User.findOne({
    username: username,
    password: password,
  });
  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: 'Error while logging in',
  });
});

const updateBody = z.object({
  password: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});
router.put('/', authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: 'Error while updating information',
    });
  }
  await User.updateOne(req.body, {
    _id: req.userId,
  });
  res.json({
    message: 'Updated successfully',
  });
});

router.get('/bulk', async (req, res) => {
  const filter = req.query.filter || '';

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
