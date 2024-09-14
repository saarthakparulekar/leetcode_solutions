//Was asked in an interview and failed to answer it
//Was able to solve now and beats 95%, also solved under 10 mins

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let noloop = true;
    while(fast && fast.next && fast.next.next && noloop){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            noloop = false;
        }
    }
    if(!noloop){
        slow = head;
        while(slow !== fast){
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }else return null;
};
