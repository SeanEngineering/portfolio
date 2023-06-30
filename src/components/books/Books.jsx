import React, { useEffect, useState } from 'react';
import style from './Books.module.scss';
import { getBooks } from '../../service/book';
import { getBookList } from '../../service/portfolio';

const Books = () => {
    const [bookItems, setBookItems] = useState([]);

    useEffect(() => {
        (async () => {
            const bookList = await getBookList();
            setBookItems(bookList);
            console.log(bookItems);
        })();
    }, []);

    return (
        <div className={style.main}>
            <div className={style.main__intro}>
                <h1>Book Recommendations</h1>
                <h3>
                    Not an author yet... have some recommendations while you
                    wait 📚
                </h3>
            </div>

            <div className={style.main__body}>
                <h2></h2>
            </div>
        </div>
    );
};

export default Books;
