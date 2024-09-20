const fs = require('fs');

const books = () => {
    try {
        const data = fs.readFileSync('bookstore.json', 'utf8');
        const books = JSON.parse(data);
        return books;
    } catch (error) {
        console.error('Error reading bookstore.json:', error);
        return [];
    }
};

module.exports = books;