const vm = require('vm');

/* 沙盒机制*/

/*
拥有当前全部上下文
*/
module.exports.evalTest = function () {
  var globalVar = 11
  eval('globalVar *= 2')
  console.log(globalVar)
  console.log(globalContext);
};


/*
封闭执行，只拥有当前传入的上下文
*/
module.exports.funcTest = function () {
  try {
    var globalVar = 11
    var globalVar2 = 11

    console.log(globalVar)
    var fn = new Function("globalVar", 'globalVar *= 2;globalVar2 *=2; return globalVar')
    var a = fn(globalVar)
    console.log(a) //22
    console.log(globalContext);
  } catch (error) {
    console.error(error);
  }
};



/*
封闭执行，只拥有当前传入的上下文
*/
module.exports.runInContextTest = () => {
  try {

    const sandbox = {
      animal: 'cat',
      count: 2,
      globalVar: 99
    };
    vm.createContext(sandbox)
    //必须传入第二个参数，sandbox或context
    vm.runInContext('globalVar *= 2;globalVar2 *=2;', sandbox);
    console.log(sandbox);
    console.log(globalContext);
  } catch (error) {
    console.error(error);
  }


};


/*
只能访问全局上下文
*/
module.exports.runInThisContext = () => {

  try {

    vm.runInThisContext('globalContext += 2;console.log("====")');

    console.log(globalContext)

    var aaa = 11;//本地

    vm.runInThisContext('aaa *= 2');

    console.log(aaa)
  } catch (error) {
    console.error(error);
  }

};

/*
只接受传入上下文，甚至屏蔽了全局上下文
*/
module.exports.runInNewContext = () => {

  try {

    var sandbox = {
      globalVar: 11,
      filename: ""
    }

    //必须传入第二个参数，sandbox或context
    vm.runInNewContext('globalVar *= 2;', sandbox);
    console.log(sandbox)
  } catch (error) {
    console.error(error);
  }

};