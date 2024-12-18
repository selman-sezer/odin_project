// OPERATIONS
const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};


const multiply = function(args) {
  return args.reduce((a,b)=> { return a*b}, 1);
};

const div = function(a,b)
{
    return a/b;
}
