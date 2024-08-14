const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

const usersFilePath = './users.json';

app.use(express.static('public'));


// Initialize users.json if it doesn't exist
if (!fs.existsSync(usersFilePath)) {
    fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

const getUsers = () => {
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data);
}


const saveUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

// POST  for registering new users
app.post('/register', async (req, res) => {
    const { name, lastname, email, username, password } = req.body;
    const users = getUsers();

    // Here Im checking if the username already exists or not
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password and save the new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: Date.now(), name, lastname, email, username, password: hashedPassword };
    users.push(newUser);
    saveUsers(users);
    res.status(201).json({ message: 'Hello, your account is now created' });
});

// POST for the login 
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const users = getUsers();
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(400).json({ message: 'Username is not registered' });
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: `Hi ${user.username}, welcome back again` });
});

// GET all users
app.get('/users', (req, res) => {
    const users = getUsers();
    res.status(200).json(users);
});

// GET /users/:id - Get user by ID
app.get('/users/:id', (req, res) => {
    const users = getUsers();
    const user = users.find(user => user.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
});

// PUT for the users's id - Update user by ID 
app.put('/users/:id', (req, res) => {
    const { name, lastname, email } = req.body;
    const users = getUsers();
    const userIndex = users.findIndex(user => user.id === parseInt(req.params.id));

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update user details 
    users[userIndex] = { ...users[userIndex], name, lastname, email };
    saveUsers(users);
    res.status(200).json({ message: 'User updated successfully' });
});

// Error handling middleware. always important to have (do not forget)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
