import { useState } from "react";

function useListState([]) {
    const [defaultValue, setDefaultValue] = useState([]);
    const [list, setList] = useState(defaultValue);

    const handlers = {
        append: (el) => {
            setList((old) => {
                let newlist = [...old];
                newlist.push(el);
                return newlist;
            });
        },
        pop: (el) => {
            setList((old) => {
                let newlist = [...old];
                newlist.pop(el);
                return newlist;
            });
        },
        prepend: (el) => {
            setList((old) => {
                let newlist = [...old];
                newlist.unshift(el);
                return newlist;
            });
        },
        shift: (el) => {
            setList((old) => {
                let newlist = [...old];
                newlist.shift(el);
                return newlist;
            });
        },
        insert: (id, el) => {
            setList((old) => {
                let newlist = [...old];
                newlist.splice(newlist.indexOf(id), 0, el);
                return newlist;
            });
        },

        // Array.splice(start, removeCount, newItem, newItem, newItem, ...)
        remove: (id) => {
            setList((old) => {
                let newlist = [...old];
                newlist.splice(newlist.indexOf(id), 1);
                return newlist;
            });
        },
        reorder: (oid, nid) => {
            setList((old) => {
                let newlist = [...old];
                let el = newlist[oid];
                newlist.splice(oid, 1);
                newlist.splice(nid, 0, el);
                return newlist;
            });
        },
        reorderCorrection: (oid, nid) => {
            setList((old) => {
                let newlist = [...old];
                let el = newlist[oid];
                newlist.splice(newlist.indexOf(oid), 1);
                newlist.splice(newlist.indexOf(nid), 0, el);
                return newlist;
            });
        },
        applyAll: (callback) => {
            setList((old) => {
                let newlist = [...old];
                newlist.map((el, _id) => {
                    return callback(el);
                });
                return newlist;
            });
        },
        applyWhere: (callback) => {
            setList((old) => {
                let newlist = [...old];
                newlist[id] = callback(newData[id]);
                return newlist;
            });
        },
        setItemProps: (id, key, value) => {
            setList((old) => {
                let newlist = [...old];
                newlist[id][key] = value;
                return newlist;
            });
        },
        setItem: (id, el) => {
            setList((old) => {
                let newlist = [...old];
                newlist[id] = el;
                return newlist;
            });
        },
        filter: (fn) => {
            setList((old) => {
                let newlist = [...old];
                newlist.filter(fn);
                return newlist;
            });
        },
        set: (arr) => {
            setList((old) => {
                let newlist = [...old];
                newlist.splice(0, newlist, ...arr);
                return newlist;
            });
        },
        setDefault: (newDefault) => {
            setList((old) => {
                let newlist = [...old];
                setDefaultValue(newDefault);
                return newlist;
            });
        },
        reset: (arr) => {
            setList(defaultValue);
        },
    };
    return { list, handlers };
}

export default useListState;
