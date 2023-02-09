# Linkby

### Name - Mathew Mozaffari
### Time Slot - 11:30 AM to 3:30 PM, 9 February 2023


For problem 5:
The given code snippet would print the value of i every second 5 times. The function passed to setTimeout forms a closure with the outer for loop, and carries a reference to the var i and NOT its value. Since var is "global scoped", by the time the first setTimeout is executed (after 1000 ms), the for loop will have already finished executing and the i = 5, which is why the output is "5" for all 5 log lines.
