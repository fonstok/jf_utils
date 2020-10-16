// This creates a lock variable and will set it to false for a passed amount of time
// const sl = new locker(600);
// sl.lock = true // result in 600 ms sl.lock will be set to false
/*
if (sl.locked === false) {
  sl.lock(); // lock variable the class has set sl.locked to true;
	} else {
		// unlocked the class will set sl.locked to false after 600 ms;
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
