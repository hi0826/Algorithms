const merge = (intervals) => {
    intervals.sort((a, b) => 
    {
        if(a[0] !== b[0]) return a[0] - b[0]
        else return a[1] - b[1];
    });

    const answer = intervals.reduce((answer, cur) => {
        if(answer.length === 0) answer.push(cur);
        else if(isInterval(answer[answer.length-1], cur)) answer[answer.length-1] = mergeArr(answer[answer.length-1], cur);
        else answer.push(cur);
        return answer;
    }, []);

    return answer;
}

const isInterval = (arr1, arr2) => (arr1[0] <= arr2[0] && arr2[0] <= arr1[1]) || (arr2[0] <= arr1[1] && arr1[1] <= arr2[1]);

const mergeArr = (arr1, arr2) => [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])];

merge([[1,3],[1,4],[1,2],[15,18]]);