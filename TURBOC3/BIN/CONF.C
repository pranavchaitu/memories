	#include<stdio.h>
	void main()
	{
	int p,t,r,si;
	clrscr();
	printf("enter p t r values respectively:-\n");
	scanf("%d%d%d",&p,&t,&r);
	si=p*t*r/100;
	printf("simple interest=%d",si);
	getch();
	}