var a = 1

const fn = () => {
  console.log(this.a)
}
const obj = {
  fn,
  a: 2
}
obj.fn()