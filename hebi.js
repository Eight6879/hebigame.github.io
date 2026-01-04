var banmen = [
    [ -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 ],
    [ -1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 , -1 ],
    [ -1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 , -1 ],
    [ -1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 , -1 ],
    [ -1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 , -1 ],
    [ -1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 , -1 ],
    [ -1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 , -1 ],
    [ -1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 , -1 ],
    [ -1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 , -1 ],
    [ -1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 , -1 ],
    [ -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 ],
]

var length=1;
var Dir=0;
var time=0;
var my_x=5;
var my_y=8;
var app_x=5;
var app_y=2;
var over=0;

function setup() {
    canvasSize(1100,1100);
    banmen[my_y][my_x] = 1;
    banmen[app_y][app_x] = -2;

}

function mainloop() {
    time++
    fRect(0,0,1100,1100,"black")
    for(y=0;y<11;y++){
        for(x=0;x<11;x++){
            if(banmen[y][x]==-1){
                fRect(100*x+15,100*y+15,70,70,"red")
            }
            else if(banmen[y][x]==length){
                fRect(100*x+15,100*y+15,70,70,"blue")
            }
            else if(banmen[y][x]>0){
                fRect(100*x+15,100*y+15,70,70,"yellow")
            }
            else if(banmen[y][x]==-2){
                fRect(100*x+15,100*y+15,70,70,"white")
            }
        }
    }
    if(key[38] > 0&&Dir!=180 )Dir = 0;
    else if(key[39] > 0&&Dir!=270)Dir =90;
    else if(key[40] > 0&&Dir!=0)Dir =180;
    else if(key[37] > 0&&Dir!=90)Dir =270;
    move();

    if(over>0)gameover();

    
}


function move() {
    
    if(time % 20==0){
        if(Dir==0){
            if(banmen[my_y-1][my_x]==0){
                banmen[my_y-1][my_x]=length+1;
                my_y-=1;
                kesu();
            }
            else if(banmen[my_y-1][my_x]==-2){
                banmen[my_y-1][my_x]=length+1;
                my_y-=1;
                length++
                set_app();
            }
            else over++;
            
        }
        else if(Dir==90){
            if(banmen[my_y][my_x+1]==0){
                banmen[my_y][my_x+1]=length+1;
                my_x+=1;
                kesu();
            }
            else if(banmen[my_y][my_x+1]==-2){
                banmen[my_y][my_x+1]=length+1;
                my_x+=1;
                length++
                set_app();
            }
            else over++;
            
        }
        else if(Dir==180){
            if(banmen[my_y+1][my_x]==0){
                banmen[my_y+1][my_x]=length+1;
                my_y+=1;
                kesu();
            }
            else if(banmen[my_y+1][my_x]==-2){
                banmen[my_y+1][my_x]=length+1;
                my_y+=1;
                length++
                set_app();
            }
            else over++;
            
        }
        else if(Dir==270){
            if(banmen[my_y][my_x-1]==0){
                banmen[my_y][my_x-1]=length+1;
                my_x-=1;
                kesu();
            }
            else if(banmen[my_y][my_x-1]==-2){
                banmen[my_y][my_x-1]=length+1;
                my_x-=1;
                length++
                set_app();
            }
            else over++;
            
        }
        
        
    }
    
}

function kesu() {
    for(y=0;y<11;y++){
        for(x=0;x<11;x++){
            if(banmen[y][x]>0){
                banmen[y][x]--
            }
        }
    }
}

function set_app() {
    
    app_x = rnd(8)+1;
    app_y = rnd(8)+1;
    if(banmen[app_y][app_x]==0)banmen[app_y][app_x]=-2;
    else set_app();

}

function gameover() {
    fText('GAMEOVER',550,550,200,'red')
}