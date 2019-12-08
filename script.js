var books = ["book-1", "book-2", "book-3"];

var inner;
function makInner(){
    inner = ""
    for(i = 0; i < books.length; i++){
        inner += "<li><span>" + books[i] + "</span><i class='far fa-times-circle' onclick='removeElement(books, this)'></i></li>";
    };
};

makInner();

function addBook(){
    event.preventDefault();
    // var book = prompt("What's the book name? ");
    var book = document.getElementById("inputName").value;
    if(book != null && book != undefined && book != ""){
        books.push(book);
        makInner();
        update();
        document.getElementById("bookName").reset();
    } else {
        alert("please input a value")
        document.getElementById("bookName").reset();
    }
    
};

// document.getElementById("add-book").addEventListener("click", addBook);
document.getElementById('bookName').onsubmit = function () {
    addBook();
};

function update() {
    document.getElementById("books").innerHTML = inner;
};

update();

function removeElement(array, elem) {
    var elemx = elem.previousSibling.innerHTML;
    var index = array.indexOf(elemx);
    if (index > -1) {
        array.splice(index, 1);   
        makInner()
        update();
    }
}


