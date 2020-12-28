const solution = (a, b) => {
   return a.map((e, i) => a[i]*b[i]).reduce((total, cur) => total += cur);
}

solution([1,2,3,4], [-3,-1,0,2]);