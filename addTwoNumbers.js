//Solved with a bit of help regarding carry
//Solved in 20 mins

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode();
    let curr = res;
    let carry = 0;
    while(l1 || l2){
        let val1 = 0;
        let val2 = 0;
        if(l1)val1 = l1.val;
        if(l2)val2 = l2.val;
        let val = val1 + val2;
        if(carry == 1)val++;
        curr.next = new ListNode(val%10);
        curr = curr.next;
        if(val >= 10){
            carry = 1;
        }else carry = 0;

        if(l1)l1 = l1.next;
        if(l2)l2 = l2.next;
    }
    if(carry)curr.next = new ListNode(1);
    return res.next;
};
