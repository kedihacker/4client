"use strict";
fetch("https://example.com").catch().then((v) => {
    console.log(v.body?.getReader().read().then((v) => { console.log(toString(v.value)); }));
});
