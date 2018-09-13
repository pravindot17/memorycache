console.log('inside file');
module.exports = function() {
    let cache = {};
    console.log('inside function');
    return {
        init: async (jsonConfig) => {
            console.log('inside init function');
            cache = jsonConfig;
        },
        getCache: (key) => {
            if(key) return cache[key] || null;
            else return cache;
        },
        setCache: (key = null, value = null) => {
            if(key && value) {
                cache[key] = value;
            } else {
                cache = value;
            }
        }
    }
}();
