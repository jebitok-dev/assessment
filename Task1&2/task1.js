// Given an array K with N integers from 1 to N+1 such that the array has exactly one integer missing, write
// a Java function that returns the missing integer.
// e.g. given K = [3,5,4,1], the function should return 2

function missingInterger(nums) {
    let n = nums.length;
    for(let i = 1; i < n; i++) {
        while (nums[i] != i) {
            if(nums[i] < 0 || nums[i] >= n )
                break;

                if(nums[i] == nums[nums[i]])
                    break;
                let char = nums[i];
                nums[i] = nums[char];
                nums[char] = char;
        }
    }
    for (let i = 1; i < n; i++) {
        if(nums[i] != i)
            return i;
    }
    return n;
}


console.log(missingInterger([3, 5, 4, 1]))
console.log(missingInterger([7, 4, 9, 1]))
console.log(missingInterger([1, 2, 0]))