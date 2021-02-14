let addTwoNumbers = (l1, l2) => {
    //create a variable sum which keeps track of the sum of one single index of both lists
    let sum = 0;
    let current = new ListNode(0); //current will add up with .next and be returned as result
    let result = current; 
    //loop through both lists until both are traversed
    while(l1 || l2) {
        if(l1) { //if the current element has a value, add it to sum
            sum += l1.val; 
            l1 = l1.next; //after sum is updated go on to the next num in l1
        }
        
        if(l2) {
            sum += l2.val; 
            l2 = l2.next; 
        }
        
        current.next = new ListNode(sum % 10); //take the remainder of sum divided by 10 to check if sum is greater than 10
        current = current.next; //current will equal the remainder and traverse to the next place in current
        sum = sum > 9 ? 1 : 0; //reset sum to equal 1 or 0 depending on if sum is greater than 9
    }
    //there's the possibility that result will grow in size depending on the sum, so there needs to be a check at the end
    //if sum is defined
    if(sum) {
        current.next = new ListNode(sum); 
    }
    return result.next; 
};
