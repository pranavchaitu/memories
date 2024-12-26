	/*w.a.p to calculate total and avg. of 3 subjects*/

	#include<stdio.h>
	void main()
	{
	int sub1 = 56,sub2 = 63,sub3 = 42,tot,avg;
	clrscr();
	tot=sub1+sub2+sub3;
	avg=tot/3;
	printf("total marks=%d",sub1,sub2,sub3);
	printf("\naverage = %d",avg,tot);
	getch();
	}