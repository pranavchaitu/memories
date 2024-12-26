	#include<stdio.h>
	void main()
	{
	char ch;
	clrscr();
	printf("write any alphabet\n");
	scanf("%c",&ch);
	if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
	printf("it is a vowel");
	else
	printf("not a vowel");
	getch();
	}
