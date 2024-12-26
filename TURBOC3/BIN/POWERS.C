#include<stdio.h>
void main()
{
int n,s,c;
clrscr();
printf("type a number here:-\t");
scanf("%d",&n);
s=n*n;
c=n*n*n;
printf("square of the number=%d",s);
printf("\ncube of the number=%d",c);
getch();
}