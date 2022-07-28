import React from 'react';
import Comment from './Comment';

const comments = [
    {
    name : '야롱',
    comment : '나는 고양이'
    },
    {
    name : '밤송',
    comment : '나는 강아지'
    },
    {
    name : '지현',
    comment : '나는 사람'
        }
]

const CommentList = (props) => {
    return (
        <div>
            <Comment name='야롱' comment="나는 고양이" />
            <Comment name='밤송' comment="나는 강아지" />
            <Comment name='지현' comment="나는 사람" />
        </div>
    );
};

export default CommentList;
