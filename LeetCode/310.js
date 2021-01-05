/*
node = {
    value : number,
    link : [];
}
*/

const findMinHeightTrees = (n, edges) => {
    const graph = initGraph(n, edges);
    //console.log(graph);
    const answer = searchTree(graph);
    console.log(answer);
    return answer;
}

const initGraph = (n, edges) => {
    let nodes = new Array(n);
    for(let i = 0; i < n; ++i) {
        nodes[i] = [];
    }
    edges.forEach(arr => {
        nodes[arr[0]].push(arr[1]);
        nodes[arr[1]].push(arr[0]);
    });
    return nodes;
}

const searchTree = (graph) => {
    const nodes = Object.keys(graph).map(v => +v);

   while(true) {
        const leafNodes = nodes.filter(k => graph[k].length === 1);

        if(nodes.length <= 2) return nodes;

        leafNodes.forEach(l => {
            const root = graph[l].pop();
            nodes.splice(nodes.indexOf(l), 1);
            graph[root].splice(graph[root].indexOf(l), 1);
        });
    }
}

findMinHeightTrees(1, []);