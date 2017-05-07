var resource = [
    { "id": 1, "title": "第一篇", "body": "哈哈哈哈哈", "date": "6/2/2013" },
    { "id": 2, "title": "第二篇", "body": "哈哈哈哈哈", "date": "6/2/2013" },
    { "id": 3, "title": "第三篇", "body": "哈哈哈哈哈", "date": "6/2/2013" },
    { "id": 4, "title": "第四篇", "body": "哈哈哈哈哈", "date": "6/2/2013" }
];
exports.getBlogEntris = function() {
    return resource;
}
exports.getBlogEntry = function(id) {
    for (var i = 0; i < resource.length; i++) {
        if (resource[i].id == id) {
            return resource[i];
        }
    }
}