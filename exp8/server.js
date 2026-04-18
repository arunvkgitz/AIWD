const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Initialize Database
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
    const stmt = db.prepare("INSERT INTO items (name) VALUES (?)");
    stmt.run("Node.js");
    stmt.run("Express");
    stmt.run("SQLite");
    stmt.finalize();
});

app.get('/', (req, res) => {
    res.send('<h1>Experiment 8: Node.js & SQLite</h1><p>Visit <a href="/items">/items</a> to see database content.</p>');
});

app.get('/items', (req, res) => {
    db.all("SELECT * FROM items", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ items: rows });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Database initialized in memory.');
});
