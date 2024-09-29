const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (rewq, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);    
});
app.listen(port, () => console.log(`Server is running on port ${port}`));

