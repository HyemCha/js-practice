function closeWin(win){
    if(win==null || win.closed){
        return;
    } else {
        win.close()
    }
}