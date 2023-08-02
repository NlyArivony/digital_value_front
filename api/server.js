const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 5000;

app.use(cors());

// Serve the JSON file based on the provided filename
app.get('/api/volumes/:filename', (req, res) => {
    const { filename } = req.params;
    try {
        const jsonData = require(`./volumes/${filename}.json`); // Use the correct path here
        res.json(jsonData);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        res.status(404).json({ error: 'File not found' });
    }
});

// Get the list of all filenames inside the /api/volumes directory
app.get('/api/categories/id', (req, res) => {
    const directoryPath = './volumes'; // Use the correct path here
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            res.status(500).json({ error: 'Failed to read directory' });
        } else {
            const filenames = files.map((file) => file.replace('.json', ''));
            res.json(filenames);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
