let books = [
    { title: "the bible", year: 1998, isbn: "10", author: "the monk" },
    { title: "the secret", year: 2010, isbn: "20", author: "lorem ipsum" }
]

let user = {
    "id": 3298734987,
    "fullname": "federico test",
    "books": ["10", "20"]
}

//iteration 2
//find all the isbns that the user owns
var isbnToFind;

//this function receives an isbn and finds it in all the books array
function discoverBookDetails(isbnToFind) {
    for (var i = 0; i < books.length; i++) {
        //if the book is found then we return it and cancel the loop and function for optimisation purposes
        if (books[i].isbn === isbnToFind) {
            return books[i]
        }
    }
}

//we traverse all the user's books array with all the books they own
for (var i = 0; i < user.books.length; i++) {
    isbnToFind = user.books[i]

    //this function discovers the book details in all the books array, and we require it via its custom isbn
    console.log(discoverBookDetails(isbnToFind))
}

