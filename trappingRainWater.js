//LC HARD
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let result = 0;
    while(left < right){
        if(leftMax <= rightMax){
            left++;
            if((leftMax - height[left]) > 0) result += leftMax - height[left];
            if(height[left] > leftMax) leftMax = height[left];
        }else{
            right--;
            if((rightMax - height[right]) > 0) result += rightMax - height[right];
            if(height[right] > rightMax) rightMax = height[right];
        };
    };
    return result;
};
