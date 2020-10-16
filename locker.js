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
