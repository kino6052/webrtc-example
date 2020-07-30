// class Client {
//   isHost = false;
//   messaging: Messaging;
//   connection: Connection;
//   constructor() {}
//   hostOrConnect = () => {
//     this.connection.reset();
//     const successCallback = () => {
//       this.isHost = true;
//     };
//     const failureCallback = (id: string) => {
//       this.isHost = false;
//     };
//     this.messaging.sendRequestToHost(successCallback, failureCallback);
//   };
//   stopHosting = () => {
//     this.isHost = false;
//   };
// }

// class Connection {
//   constructor() {}
// }
