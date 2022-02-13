function getQuantityPostsByAuthor(array, author){
    if (!Array.isArray(array) || array.length === 0 || typeof author !== 'string' || author.length === 0) {
        return undefined;
    }

    let commentsAmount = 0;
    let postsAmount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].author === author){
            postsAmount += 1;
        }
        if (array[i].hasOwnProperty('comments')){
            const commentsArray = array[i].comments;
            for (let j = 0; j < commentsArray.length; j++) {
                if (commentsArray[j].author === author) {
                    commentsAmount += 1;
                }
            }
        }
    }
    return {posts: postsAmount, comments: commentsAmount};
}

module.exports = getQuantityPostsByAuthor;