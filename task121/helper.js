export const min = (a, b, c) => {
  if(a<=b && a<=c){
    return  a;
  }
  else if(b<=a && b>=c){
    return b;
  }
  else if(c<=a && c<=b){
    return c;
  }
  else{
    return (a,b,c);
  }
}

/*

export const min = (a, b, c) => {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
};

*/