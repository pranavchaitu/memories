-	#include<stdio.h>
	void main()
	{
	int i;
	clrscr();
	for(i=1;i<=74;i++)
	{
	clrscr();
	gotoxy(i,1);
	textbackground(16);
	textcolor(i);
	sound(500);
	cprintf("PRANAV>>");
	delay(50);
	}
	nosound();
	for(i=1;i<=22;i++)
	{
	clrscr();
	gotoxy(71,i);
	textbackground(i);
	textcolor(16);
	sound(10000);
	cprintf("CHAITU\n||");
	delay(150);
	}
	nosound();
	for(i=72;i>=1;i--)
	{
	clrscr();
	gotoxy(i,25);
	textbackground(i);
	textcolor(i);
	sound(1900);
	cprintf("<<PRANAV");
	delay(50);
	}
	nosound();
	for(i=25;i>=1;i--)
	{
	clrscr();
	gotoxy(1,i);
	textbackground(2);
	textcolor(i);
	sound(9999);
	cprintf("||\nCHAITU");
	delay(150);
	}
	nosound();
	getch();
	}





