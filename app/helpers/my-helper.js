import Helper from '@ember/component/helper';

export default class MyHelper extends Helper {
  compute([number]) {
    return "Hello World: " + number;
  }
}

