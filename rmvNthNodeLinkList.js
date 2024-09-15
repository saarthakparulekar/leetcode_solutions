//19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;
    let count = 1;
    while(count < n){
        fast = fast.next;
        count++;
    }
    let prev = slow;
    while(fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }
    if(slow == head){
        head = slow.next
    }else prev.next = slow.next;
    return head;
};
