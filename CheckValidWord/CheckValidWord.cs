using System;
using System.Linq;
using System.Text;


class Program
{
    static void Main(string[] args)
    {
		Console.WriteLine(IsValid("aabcbc"));
    }

	public static bool IsValid(string s) {
        
        if (s[0] != 'a' || s[s.Count() - 1] != 'c')
        {
            return false;
        }
        
        while(s.Count() != 0)
        {
            int last = s.LastIndexOf("abc");
			Console.WriteLine(last);
            if(last != -1)
            {
                s = s.Remove(last, 3);
				Console.WriteLine(s);
            }
            else if (s.Count() != 0 && last == -1)
                return false;
        }
        return true;
    }
}

