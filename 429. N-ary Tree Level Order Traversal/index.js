/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let nodeLevel = root ? [root] : [];
    let nodeNextLevel = [];
    let ret = [];
    let valLevel = [];
    while (nodeLevel.length !== 0 || nodeNextLevel.length !== 0) {
        if (nodeLevel.length !== 0) {
            let node = nodeLevel.splice(0, 1)[0];
            valLevel.push(node.val);
            nodeNextLevel = nodeNextLevel.concat(node.children || []);
        }
        if (nodeLevel.length === 0) {
            if (valLevel.length > 0) {
                ret.push(valLevel);
                valLevel = [];
            }
            nodeLevel = nodeNextLevel;
            nodeNextLevel = [];
        }
    }
    return ret;
};