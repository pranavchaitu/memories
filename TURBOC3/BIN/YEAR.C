	#include<stdio.h>;
	void main()
	{
	int y;
	clrscr();
	printf("enter the year here\t");
	scanf("%d",&y);
	(y%4==0)?printf("it's a leap year"):printf("it is not a leapyear");
	getch();
	}