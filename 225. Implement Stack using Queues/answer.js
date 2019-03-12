/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    if (this.tail) {
        this.tail.next = {
            val: x,
            prev: this.tail
        };
        this.tail = this.tail.next;
    } else {
        this.head = this.tail = {
            val: x
        }
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.tail) {
        let ret = this.tail.val;
        this.tail = this.tail.prev;
        return ret;
    }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.tail ? this.tail.val : null;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.tail;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */