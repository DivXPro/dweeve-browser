const vm = require('vm-browserify');
const selectorFunctions = require('../functions/selectors')
const coreFunctions = require('../functions/core') 
 

function addFunctions(context) {
    context['__execDoScope'] = __execDoScope
}

function __execDoScope(code, args) {
    coreFunctions.addFunctions(args)
    addFunctions(args)
    selectorFunctions.addFunctions(args)
    const script = new vm.Script(code + '\n var result=doScope()');
    
    const context = new vm.createContext(args);
    script.runInContext(context);

    return context.result
}

module.exports = { __execDoScope: __execDoScope, addFunctions: addFunctions};