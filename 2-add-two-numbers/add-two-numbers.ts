/*
class ListNode {
     val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
      }
 }
 */


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head:ListNode =new ListNode(0)
    let current:ListNode = head
    let ret:number = 0
    while(l1 || l2){
        let v1:number = l1 ? l1.val : 0
        let v2:number = l2 ? l2.val : 0
        let total:number = v1+v2+ret
        ret = Math.trunc(total/10)
        current.next = new ListNode(total%10)
        current = current.next
        if (l1)
            l1 = l1.next
        if(l2)
            l2 = l2.next
    }
    if(ret)
        current.next = new ListNode(ret)
    return head.next
};