async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

/* 
 * You need to call async wait() and wait to get 10 and return it
 * You can't use "await"!
 */
function f() {
    // ...what to write here?
    return Promise.resolve(wait())
}

module.exports = f;