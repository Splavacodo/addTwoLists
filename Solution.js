let addTwoNumbers = (l1, l2) => {
    //create a variable sum which keeps track of the sum of one single index of both lists
    let sum = 0;
    let current = new ListNode(0); //current will add up with .next and be returned as result
    let result = current; 
    
    while(l1 || l2) {
        if(l1) {
            sum += l1.val; 
            l1 = l1.next; 
        }
        
        if(l2) {
            sum += l2.val; 
            l2 = l2.next; 
        }
        
        current.next = new ListNode(sum % 10); 
        current = current.next; 
        sum = sum > 9 ? 1 : 0;
    }
    
    if(sum) {
        current.next = new ListNode(sum); 
    }
    
    return result.next; 
};
