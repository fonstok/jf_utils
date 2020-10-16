class ddFinder {
  constructor() {
    this.remember = [];
    this.old = 0;
    this.current = 0;
    this.distance = 0;
    this.direction = 0;
    this.arrayLimit = 3;
  }
  update(_val) {
    const me = this;
    me.remember.push(_val);
    me.current = _val;
    me.old = me.remember[me.remember.length - me.arrayLimit];
    if (me.remember.length > me.arrayLimit) {
      me.remember.shift();
    }
    if (me.old > me.current) {
      me.direction = -1;
    } else if (me.old < me.current) {
      me.direction = 1;
    }
    me.distance = me.current - me.old;
  }
}
