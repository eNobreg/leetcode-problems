using System;

class Program
{
    public bool IsPalindrome(int x) {
        string number = x.ToString();
        
        for(int i = 0; i < number.Length / 2; i++)
        {
            if (number[i] != number[number.Length - i - 1])
                return false;
        }
        return true;
    }
}

