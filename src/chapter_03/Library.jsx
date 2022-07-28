import React from 'react';
import Book from './Book'

const Library = (props) => {
    return (
        <div>
            <Book name={'처음 만나는 리액트'} numOfPage={100} />
            <Book name={'처음 만나는 aws'} numOfPage={150}/>
            <Book name={'처음 만나는 파이썬'} numOfPage={200} />
        </div>
    );
};

export default Library;