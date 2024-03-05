from typing import List


class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.page = 0

    def turn_page(self, page):
        self.page = page

    def __str__(self):
        return f'{self.title} by {self.author}'


class Library:
    def __init__(self):
        self.books: List[Book]= []

    def add_book(self, book: Book):
        self.books.append(book)

    def find_book(self, title: str):
        try:
            book = next(filter(lambda b: b.title == title, self.books))
            return book
        except StopIteration:
            return None


book = Book("Title1", "Test")
book2 = Book("Title2", "Test2")

library = Library()
print(library.books)
library.add_book(book)
print(library.books)
print(library.find_book('ASD'))
print(library.find_book('title1'))

