/**
 * initialize your data structure here.
 */
var MinStack = function() {

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (!this.head || !this.tail) {
        this.head = this.tail = {
            min: x,
            val: x
        }
    } else {
        this.tail.next = {
            prev: this.tail,
            min: x < this.tail.min ? x : this.tail.min,
            val: x
        };
        this.tail = this.tail.next;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.tail) {
        this.tail = this.tail.prev;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let t = this.tail;
    return t ? t.val : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let t = this.tail;
    return t ? t.min : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */