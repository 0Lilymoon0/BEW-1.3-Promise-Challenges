/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 *    I'm not sure how much delay 2000 means in real time, but I assume it's
 *    at least enough so that step 2 will go through before step 1, if not also
 *    step 2 and 3 before 1.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 *    Step 1
 *    Step 3
 *    Step 2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *    Step 1, Step 2, then Step 3, since there is no delay time now and that's the natural
 *    order in which they're meant to be printed without delay.
 * 
 *    It seems I was incorrect... the order is still 1 3 2.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

