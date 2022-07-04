import React from 'react';
import Book from './book';
import Code from './code';
import Headers from '../pages/Headers'

function Library(props) {
    return (
        <div>
            <Headers />
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
            <Code name="JSX" />
        </div>
    )
}

export default Library;