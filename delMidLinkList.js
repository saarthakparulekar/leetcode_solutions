/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let slow = head;
    let fast = head;
    let prev = null;
    while(fast && fast.next){
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    if(prev){
        prev.next = slow.next;
    } else head = null;
    
    return head;
};
