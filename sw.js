var sharedData = null;

onconnect = function(e) {
  console.log(e.ports);
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = e.data;
    console.log(e);
    console.log(workerResult);
    if (e.data.type && (e.data.type == 1 || e.data.type == 2)) {
      sharedData = e.data;
    }
    if (e.data == "get") {
      port.postMessage(sharedData);
    }
  };
};
//要主动获取
