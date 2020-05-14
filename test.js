const vm = require('./vm/vmTest');

(async () => {
  var lineStr = "---------------------------------------------------------";
  globalContext = "全局上下文";
  vm.evalTest();
  console.warn(lineStr);
  vm.funcTest();
  console.warn(lineStr);
  vm.runInContextTest();
  console.warn(lineStr);
  vm.runInThisContext();
  console.warn(lineStr);
  vm.runInNewContext();
  console.warn(lineStr);
})();