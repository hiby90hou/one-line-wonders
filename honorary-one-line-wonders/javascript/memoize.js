const memoize = f =>{var c={};return x => {if (x in c)return c[x];return (c[x]=f(x))}}
