
function Book(props) {
    return (
        <div className="Book" onClick={() => props.goToBook(props.bookId)}>
           <h2 className="Book_title">{props.title}</h2>
           <h2 className="Book_set">{props.set}</h2>
        </div>
    );
}

export default Book;
