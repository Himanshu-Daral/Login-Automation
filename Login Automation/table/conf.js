exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    capabilities: {
        browserName: 'chrome'
    },
    specs: [
        '.\table-sort/table_spec.js'
    ],

    jasmineNodeOpts: {
        showColors: true
    }
}