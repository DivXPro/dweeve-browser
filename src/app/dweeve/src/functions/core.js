const formatn = require('format-number-with-string');

function addFunctions(context) {
    context['isOdd'] = isOdd
    context['concat'] = concat
    context['abs'] = abs
    context['avg'] = avg
    context['ceil'] = ceil
    context['contains'] = contains
    context['daysBetween'] = daysBetween
    context['distinctBy'] = distinctBy
    context['distinctByKeys'] = distinctByKeys
    context['endsWith'] = endsWith
    context['filter'] = filter
    context['filterObject'] = filterObject
    context['find'] = find
    context['flatMap'] = flatMap
    context['flatten'] = flatten
    context['floor'] = floor
    context['startsWith'] = startsWith
    context['map'] = map
    context['mapObject'] = mapObject
    context['readUrl'] = readUrl
    context['__add'] = __add
    context['__indexed'] = __indexed
    context['__format'] = __format

    context['listUrls'] = _listResources
    context['removeUrl'] = _removeResource
    context['switchUrl'] = _switchUrl
}

function isOdd(number) {
    return number % 2 ? true: false;
}

function concat(a,b) {
    return a+b;
}

function abs(num) {
    return Math.abs(num)
}

function avg(list) {
    if (!Array.isArray(list))
        return 0
    try{
        let agg=0;
        list.forEach(m => {
            agg+=m
        });
        return agg/list.length;
    }
    catch (err) {
        return 0;
    }
    return 0;
}

function ceil(num) {
    return Math.ceil(num)
}

function contains(arr, item) {
    return arr.includes(item)
}

function daysBetween(d1, d2){
    try {
        let time = Date.parse(d2) - Date.parse(d1)
        return time / (1000 * 60 * 60 * 24)
    }
    catch (err) {
        throw "Could not process dates for daysBetween:"+ err.message
    }
}

function distinctBy(items, criteria) {
    if (items==null || items==undefined)
        throw 'Error: trying to distinctBy on a null/undefined object/array'
    let out = []
    let distinctList =[]
    let ewl = (items['__ukey-obj'])
    for(let key in items) {
        if (key!=='__ukey-obj') {
            let k = key
            let v = items[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            let candidate = JSON.stringify(criteria(v,k))
            if (!distinctList.includes(candidate)) {
                distinctList.push(candidate)
                out.push(v);
            }
        }
    }

    return out;
}

function distinctByKeys(items, criteria) {
    if (items==null || items==undefined)
        throw 'Error: trying to distinctBy on a null/undefined object/array'
    let out = []
    let distinctList =[]
    let ewl = (items['__ukey-obj'])
    for(let key in items) {
        if (key!=='__ukey-obj') {
            let k = key
            let v = items[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            let candidate = JSON.stringify(criteria(v,k))
            if (!distinctList.includes(candidate)) {
                distinctList.push(candidate)
                out.push(criteria(v,k));
            }
        }
    }

    return out;
}

function endsWith(s1,s2) {
    return String(s1).endsWith(s2)
}

function filter(arr, criteria) {
    let out = []
    if (arr==null || arr==undefined)
        throw 'Error: trying to filter on a null/undefined object/array'

    if(!Array.isArray(arr))
        throw new Error(`map can only be used on arrays, type here is '${typeof arr}', try filterObject instead`)


    let ewl = (arr['__ukey-obj'])
    for(let key in arr) {
        if (key!=='__ukey-obj') {
            let k = key
            let v = arr[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            try {
                if (criteria(v,k))
                    out.push(v);
            } catch (err) {
                // errors in filter evaluation will be treated as filter fails, rather than errors
            }
        }
    }

    return out;
}

function filterObject(source, criteria){
    if (source==null || source==undefined)
        throw 'Error: trying to filterObject on a null/undefined object/array'

        let typename = (Array.isArray(source)) ? "array" : (typeof source)
        if(typename != 'object' && source!=null)
            throw new Error(`filterObject can only be used on objects, type here is '${typename}', try filter instead`)
    
    let out = {'__ukey-obj': true};
    let ewl = (source['__ukey-obj'])
    let idx=0;
    for(let key in source) {
        if (key!=='__ukey-obj') {
            let k = key
            let v = source[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            if (criteria(v,k))
            out['__key'+idx++]=({[k]:v});
        }
    }

    return out;
}

function find(arr, matcher){
    if (arr==null || arr==undefined)
        throw 'Error: trying to find on a null/undefined object/array'
    if (Array.isArray(arr)){
        let out = [];
        let ewl = (arr['__ukey-obj'])
        let idx=0;
        for(let key in arr) {
            if (key!=='__ukey-obj') {
                let k = key
                let v = arr[key]
                if (ewl) {
                    k = Object.keys(v)[0]
                    v = Object.values(v)[0]
                }

                k = isNaN(parseInt(k)) ? k : parseInt(k)
                if (String(v).match(matcher))
                out.push(k);
            }
        }

        return out;
    } else if (matcher.source!==undefined) {
        let str = String(arr)
        let out = []
        let gmatcher = new RegExp(matcher.source, 'g')
        let ms = String(str).match(gmatcher)
        let lastidx = 0
        if (ms==null) return out
        ms.forEach(m => {
            let idx = str.indexOf(m, lastidx)
            out.push([idx, idx + m.length ])
            lastidx = idx+1
        });
        return out;
    }  else  {
        let str = String(arr)
        let out = [];
        let gmatcher = new RegExp(matcher, 'g')
        let ms = String(str).match(gmatcher)
        let lastidx = 0
        ms.forEach(m => {
            let idx = str.indexOf(m, lastidx)
            out.push(idx)
            lastidx = idx+1
        });
        return out;
    }
}

function flatMap(source, mapFunc){
    return flatten(map(source, mapFunc))
}

function flatten(source){
 //   if (source==null || source==undefined)
 //       throw 'Error: trying to flatten on a null/undefined object/array'
    if(!Array.isArray(source) && source!=null)
        throw new Error(`flatten can only be used on arrays, type here is '${typeof arr}'`)

    if (source==null || !Array.isArray(source)) return source
    let out = []
    source.forEach(m=> {
        if (Array.isArray(m))
            m.forEach(im=> {
                if (im!=null)
                    out.push(im) } ) 
        else if (m!=null)
            out.push(m)
    })
    return out;
}

function floor(num) {
    return Math.floor(num);
}

function startsWith(s1,s2) {
    return String(s1).startsWith(s2)
}

function map(source, mapFunc){
    if (source==null || source==undefined)
        throw 'Error: trying to map on a null/undefined object/array'

    if(!Array.isArray(source) && source!=null)
        throw new Error(`map can only be used on arrays, type here is '${typeof arr}', try mapObject instead`)
    
    let out = []
    let ewl = (source['__ukey-obj'])
    for(let key in source) {
        if (key!=='__ukey-obj') {
            let k = key
            let v = source[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            out.push(mapFunc(v, k));
        }
    }

    return out;
}

function mapObject(source, mapFunc){
    let typename = (Array.isArray(source)) ? "array" : (typeof source)
    if(typename != 'object' && source!=null)
        throw new Error(`mapObject can only be used on objects, type here is '${typename}', try map instead`)

    if (source==null || source==undefined)
        throw 'Error: trying to mapObject on a null/undefined object/array'
    let out = {'__ukey-obj': true};
    let ewl = (source['__ukey-obj'])
    let idx=0;
    for(let key in source) {
        if (key!=='__ukey-obj') {
            let k = key
            let v = source[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            let mr = (mapFunc(v, k, idx))
            if (mr['__ukey-obj'])
                out['__key'+idx]=mr['__key0']
            else
                out['__key'+idx]=mr;
            idx++
        }
    }

    return out;
}



function setResourceFileContent(name, text, callBack) {
    this.resourceFileContent[name]=text;
    this.changeCallBack['resource'] = callBack;
}

var resourceFileContent = {}
var changeCallBack = {};

function readUrl(path, contentType){
    if (resourceFileContent[path]==undefined || resourceFileContent[path]==null)
    {
        resourceFileContent[path] = ''
        throw new Error("Resource file did not exist, so empty placeholded has been created.")
    }
    try {
        const content = resourceFileContent[path]
        
        if (contentType==="application/json" || (content.trim().startsWith('{') && content.trim().endsWith('}')))
            return JSON.parse(content)

        return content
    } catch (err) {
        err.message="Could not read url: "+ path
        throw err
    }
}

function _switchUrl(path){
    if (resourceFileContent[path]==undefined || resourceFileContent[path]==null)
    {
        resourceFileContent[path] = ''
        throw new Error("Resource file did not exist, so empty placeholded has been created.")
    }
    try {
        const content = resourceFileContent[path]
        if (changeCallBack['resource']!=undefined) 
            changeCallBack['resource'](path, content)

        if (contentType==="application/json" || (content.trim().startsWith('{') && content.trim().endsWith('}')))
            return JSON.parse(content)

        return content
    } catch (err) {
        err.message="Could not read url: "+ path
        throw err
    }
}

function _listResources() {
    return Object.keys(resourceFileContent);
}

function _removeResource(name) {
    if (resourceFileContent[name]) {
        delete resourceFileContent[name]
        if (changeCallBack['resource']!=undefined) 
            changeCallBack['resource']('', '')
        return "Resource file removed"
    } else
        return "Could not find named resource";
}

function __add(lhs, rhs) {
    if (Array.isArray(lhs) && Array.isArray(rhs)) {
        return lhs.concat(rhs)
    } else if (typeof lhs === "object" && typeof rhs === "object") {
        let newObj = {'__ukey-obj' : true}
        let idx=0;
        Object.keys(lhs).forEach(k=>{
            if (k.startsWith('__key'))
                newObj['__key'+idx++] = lhs[k]
            else if (k.startsWith('__dkey'))
                newObj['__dkey'+idx++] = lhs[k]
            else if (!k.startsWith('__'))
                newObj['__key'+idx++] = { [k]: lhs[k]}
        })
        Object.keys(rhs).forEach(k=>{
            if (k.startsWith('__key'))
                newObj['__key'+idx++] = rhs[k]
            else if (k.startsWith('__dkey'))
                newObj['__dkey'+idx++] = rhs[k]
            else if (!k.startsWith('__'))
                newObj['__key'+idx++] = { [k]: rhs[k]}
        })
        return newObj
    } else {
        return lhs + rhs
    }
}

function __indexed(obj, indexer){
    try {
        if (Array.isArray(obj) || obj['__ukey-obj']==undefined)
            return obj[indexer];
        else if (obj['__ukey-obj']) {
            let outval;
            Object.values(obj).forEach(v=>{
                if (Object.keys(v)[0]===indexer) {
                    outval = Object.values(v)[0]
                }
            })
            if (outval!=undefined) return outval
        }
    }
    catch (err) {}
    throw new Error ('Indexer out of bounds or not found')
}

function __format(text, format) {
    return formatn(text, format)
}

module.exports = { addFunctions: addFunctions, setResourceFileContent: setResourceFileContent,
    resourceFileContent: resourceFileContent, changeCallBack: changeCallBack}