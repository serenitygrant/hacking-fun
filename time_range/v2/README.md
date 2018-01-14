# Time Range Problem v2

## Assumptions

- Allowed to use external libraries (ie. npm libs)
- Time range data is input as objects with fields "start" and "end"
- Time range data is sorted
- O(n) since you only keep track of pointers as to which ranges are valid for subtraction and move the pointers one element forward when the times don't intersect.
