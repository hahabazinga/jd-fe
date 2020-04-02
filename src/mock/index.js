const itemDefault = {
    id: 22221111,
    book_name: '安徒生童话',
    book_href: 'https://item.jd.com/65417251592.html',
    book_author: '安徒生',
    img:
        'https://img10.360buyimg.com/n7/jfs/t1/58330/3/7791/58786/5d563f60E8f40fad0/b16a977c69478bfa.jpg',
    imgs: [
        'https://img10.360buyimg.com/n7/jfs/t1/58330/3/7791/58786/5d563f60E8f40fad0/b16a977c69478bfa.jpg',
        'https://img10.360buyimg.com/n7/jfs/t1/58330/3/7791/58786/5d563f60E8f40fad0/b16a977c69478bfa.jpg',
        'https://img10.360buyimg.com/n7/jfs/t1/58330/3/7791/58786/5d563f60E8f40fad0/b16a977c69478bfa.jpg',
        'https://img10.360buyimg.com/n7/jfs/t1/58330/3/7791/58786/5d563f60E8f40fad0/b16a977c69478bfa.jpg'
    ],
    publisher: '人民教育出版社',
    publish_date: '2010-10',
    b_name: '童书',
    b_href: 'https://item.jd.com/65417251592.html',
    s_name: '儿童文学',
    s_href: 'https://item.jd.com/65417251592.html',
    price: 12.33
};

const listItemDefault = {
    id: 1,
    book_name: '安徒生童话安徒生童话安徒生童话安徒生童话安徒生童话',
    price: 12.34,
    description: '英国国家图书奖得主，儿童诗人经典之作',
    img:
        'https://img10.360buyimg.com/n7/jfs/t1/58330/3/7791/58786/5d563f60E8f40fad0/b16a977c69478bfa.jpg',
    comments: '1万+',
    good_rate: '99%'
};

export const getItemList = (currentPage, pageSize) => {
    const data = Array.from({ length: pageSize }).map((item, index) => ({
        ...listItemDefault,
        id: currentPage * pageSize + index + 1
    }));
    return Promise.resolve({
        data,
        code: '200',
        limit: 100
    });
};

export const getItemDetail = id => {
    console.log(id);
    return Promise.resolve({
        data: itemDefault,
        code: '200'
    });
};
