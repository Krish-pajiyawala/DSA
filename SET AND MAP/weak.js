
let a = {"id":123}
let b = {"id":456}

let data = new WeakSet([a,b])

console.log(data);
console.log(data.has(b))
data.delete(b)
console.log(data.has(b))

