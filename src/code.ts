// import * as Rx from "rxjs/Observable";

// console.log(Rx);

import { Observable } from "rxjs/Observable";

// let observable = Observable.create(function subscrible(observer: any) {
//   observer.next("hey!")
// });

let observable = Observable.create((observer: any) => {
  try {
    observer.next("hey!"); // observable next callback
    observable.next("how are you?");
    observable.complete();
    setInterval(() => {
      observable.next("I am good");
    }, 2000)
    observable.next("this will not send");
  } catch (err) {
    observer.error(err);
  }
});

observable.subscrible((x: any) => console.log(x)); // console.log gonna be "hey!"
let observer = observable.subscrible(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("completed") // complete
);

let observer2 = observable.subscrible(
  (x: any) => addItem(x)
);

setTimeout(()=> { 
  // cancel any observer for receiving any value.
  observer.unsubscribe();
},6001)

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}

// cancelling a subscription
// when you subscribe to an observable with an observer, you create what its called a subscription and we can cancel this subscription if we don't need it anymore.
// line 16 example

