int mySqrt(int x) {
    int racine = 0;
    int sous = 1;
    while (x >= sous){
        x -= sous;
        sous += 2;
        racine++;
    }
    return racine;
}