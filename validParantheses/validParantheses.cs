using System;
using System.Collections;
using System.Linq;

class Program
{
	public bool IsValid(string s) {
		Stack<char> opened = new Stack<char>();
		for (int i = 0; i< s.Count(); i++)
		{
			if (s[i] == '(' || s[i] == '[' || s[i] == '{')
				opened.Push(s[i]);
			else if (opened.Count != 0)
			{
				if (s[i] == ')')
				{
					char ch = opened.Peek();
					opened.Pop();
					if (ch != '(')
						return false;
				}
				if (s[i] == ']')
				{
					char ch = opened.Peek();
					opened.Pop();
					if (ch != '[')
						return false;
				}
				if (s[i] == '}')
				{
					char ch = opened.Peek();
					opened.Pop();
				if (ch != '{')
					return false;
				}
			}   
			else
				return false;
		}
		if (opened.Count == 0)
			return true;
		else
			return false;
	}
}
