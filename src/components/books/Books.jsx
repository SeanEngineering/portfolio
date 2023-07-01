import React, { useEffect, useState } from 'react';
import style from './Books.module.scss';
import { getBooks } from '../../service/book';
import library from '../../assets/images/aboutNS.png';
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
                <img
                    src={library}
                    alt=""
                />
                <h1>Book Recommendations</h1>
                <h3>
                    Not an author yet... have some recommendations while you
                    wait 📚
                </h3>
                <hr className={style.line} />
            </div>

            <div className={style.main__body}>
                <h2>This page is currently under construction 🛠️</h2>
            </div>
        </div>
    );
};

export default Books;
