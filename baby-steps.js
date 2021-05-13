let args = process.argv.slice(2)
args = args.map(x => parseInt(x))
console.log(args.reduce((x, y) => x + y, 0))