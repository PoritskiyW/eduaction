const gerQuantityPostsByAuthor = require('../getQuantityPostsByAutor');

let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
]

describe("Tests for gerQuantityPostsByAuthor function", function () {

    test('if arguments are not array, returns undefined', function () {
        expect(gerQuantityPostsByAuthor(125, 'asda')).toBe(undefined);
    })
    test('if arguments are not string, returns undefined', function () {
        expect(gerQuantityPostsByAuthor([1, 2, 3], 125)).toBe(undefined);
    })
    test('YES case', function () {
        expect(gerQuantityPostsByAuthor(listOfPosts2, 'Rimus')).toStrictEqual({posts: 1, comments: 3});
    })
})