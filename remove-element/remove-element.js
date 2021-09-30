var removeElement = function(nums, val) {
    
    var moved = 0;
    
    for (var i = 0; i < nums.length; i++)
    {
        if (nums[i] != val)
        {
            nums[moved] = nums[i];
            moved++;
    
        }
    }   
    return (moved);
};