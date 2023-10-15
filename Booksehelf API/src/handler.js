const { nanoid } = require("nanoid");
const books = require("./books");

const addBookHandler = (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
  if (!name) {
    return h
      .response({
        status: "fail",
        message: "Gagal menambahkan buku. Mohon isi nama buku",
      })
      .code(400);
  }
  if (readPage > pageCount) {
    return h
      .response({
        status: "fail",
        message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
      })
      .code(400);
  }

  const id = nanoid(20);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage ? true : false;
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };
  books.push(newBook);

  return h
    .response({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId: id,
      },
    })
    .code(201);
};

const getAllBooksHandler = (request, h) => {
  const formattedBooks = books.map((b) => ({
    id: b.id,
    name: b.name,
    publisher: b.publisher,
  }));

  return h
    .response({
      status: "success",
      data: {
        books: formattedBooks,
      },
    })
    .code(200);
};

const getAllBooksByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return h
      .response({
        status: "fail",
        message: "Buku tidak ditemukan",
      })
      .code(404);
  }
  return h
    .response({
      status: "success",
      data: {
        book: book,
      },
    })
    .code(200);
};

module.exports = { addBookHandler, getAllBooksHandler, getAllBooksByIdHandler };
