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
    
    var current = head;
    var previous = head;
    let listlen = 0;
    
    while (current)
    {
        current = current.next;
        listlen += 1;
    }
    
    current = head;
    
    for(let i = 0; i < listlen - n; i++)
    {
        previous = current;
        current = current.next
    }
    
    if (current == head)
    {
        head = head.next;
    }
    else
    {
        previous.next = current.next;
    }
    
    return head;
    
};