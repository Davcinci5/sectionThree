function greatestElement (obj) {
    let greatest = 0;
    let name = '';
    for (const key in obj) {
        if (obj[key] > greatest) {
            greatest = obj[key];
            name = key;
        }
    }
    return { name, greatest };
}

module.exports = greatestElement;
