	#include<stdio.h>
	void main()
	{
	int n,r,i;
	clrscr();
	printf("ENTER YOUR MULTIPLE AND RANGE\t");
	scanf("%d%d",&n,&r);
	i=1;
	while(i<=r)
	{
	printf("\n%d*%d=%d",n,i,n*i);
	i++;
	}
	getch();
	}