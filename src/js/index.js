import '../styles/index.scss'


import message from './modules/module';

console.log(message);

const userData = {
  name: 'vasya',
  sur: 'vsyes'
}

const user = {
  ...userData
}

console.log(user, 'sadasd');

let a = () => {
  console.log('function');
}

a();

import birdsData from './modules/birds-data';

console.log(birdsData)
