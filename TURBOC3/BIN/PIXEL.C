	#include<graphics.h>
	#include<stdio.h>
	void main()
	{
	int gdr,gmd,x,y,color;
	gdr=DETECT;
	initgraph(&gdr,&gmd,"c:\\turboc3\\bgi");
	while(!kbhit())
	{
	x=random(getmaxx());
	y=random(getmaxy());
	color=random(16);
	putpixel(x,y,color);
	}
        }