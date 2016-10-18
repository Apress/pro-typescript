var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/books');

var bookSchema = new mongoose.Schema({
    title: String, author: String, isbn: String
});

var Book = mongoose.model('Book', bookSchema);

function list(request, response) {
    Book.find({}, function (err, res) {
        if (err)
            return next(err);
        response.render('book', { 'title': 'Books', 'books': res });
    });
}
exports.list = list;
;

function submit(request, response) {
    var newBook = new Book({
        title: request.body.book_title,
        author: request.body.author,
        isbn: request.body.book_isbn
    });

    newBook.save(function (err) {
        if (err)
            return next(err);
        response.redirect('/book');
    });
}
exports.submit = submit;
//# sourceMappingURL=book.js.map
