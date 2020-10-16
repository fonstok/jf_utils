// This creates a lock variable and will set it to false for a passed amount of time
// const sl = new locker(600);
// sl.lock = true // result in 600 ms sl.lock will be set to false
/*
if (sl.locked === false) {
  // lock variable
  sl.lock();
  // locked and the class has set it sl.locked to true;
	} else {
		// unlocked and the class has set it sl.locked to false;
 }
 sl.unlock()// will unlock the sl.locked at anytime.
//*/
class locker {
	constructor(_lockTime) {
		this.locked = false;
		this.time = _lockTime;
	}
	unlock() {
		this.locked = false;
		clearTimeout(this.tO);
	}
	lock() {
		let me = this;
		if (!me.locked) {
			me.tO = setTimeout(function () {
				me.unlock();
			}, me.time);
			me.locked = true;
		}
	}
}
