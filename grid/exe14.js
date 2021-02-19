let global_ = (function(global) {
    let originalSet = global.setTimeout;
    let root = document.getElementById('results');
    const result = (text, pass) => {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    };
    let assert = (pass, message) => root.appendChild(result(message, pass));

    function setTimeout(newCb, time, ...args) {
        function customizedCB(subRoot) {
            return function() {
                root = subRoot;
                newCb(...args);
                root = parent;
            };
        }
        originalSet(customizedCB(root), time);
    }

    function test(description, testBlock) {
        const parent = root;
        root = assert(undefined, description)
            .appendChild(document.createElement('ul'));
        testBlock();
        root = parent;
    }
    global.assert = assert;
    global.test = test;
    global.setTimeout = setTimeout;
    return { assert, test, setTimeout };
})(window);

module.exports = global_;