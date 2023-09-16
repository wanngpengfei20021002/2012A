const ctx = require.context('.', true, /\.js$/);
const map = {};
const arr = [];

for (const key of ctx.keys()) {
  if (key !== './index.js' && key !== './api.js') {
    Object.keys(ctx(key)).forEach((item) => arr.push(item));
    Object.assign(map, ctx(key));
  }
}

(() => {
  const tmp = [];
  if (Array.isArray(arr)) {
    arr
      .concat()
      .sort()
      .sort((a, b) => {
        if (a == b && tmp.indexOf(a) === -1) tmp.push(a);
      });
  }
  tmp.length !== 0
    ? console.error(`导出的Api方法里出现重复的变量名=>【${[...tmp]}】`)
    : null;
})();

export default map;
