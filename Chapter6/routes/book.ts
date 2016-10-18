import express = require('express');
import mongoose = require('mongoose');
declare var next: (error: any) => void;

mongoose.connect('mongodb://localhost:27017/books');

var bookSchema = new mongoose.Schema({
    title: String, author: String, isbn: String
});

var Book = mongoose.model<any>('Book', bookSchema);

export function list(request: express.Request, response: express.Response) {
    Book.find({}, (err, res) => {
        if (err) return next(err);
        response.render('book', { 'title': 'Books', 'books': res });
    });
};

export function submit(request: express.Request, response: express.Response) {
    var newBook = new Book({
        title: request.body.book_title,
        author: request.body.author,
        isbn: request.body.book_isbn
    });

    newBook.save(function (err) {
        if (err) return next(err);
        response.redirect('/book');
    });
}