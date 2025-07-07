//127. Word Ladder
//Requires intuition and pattern
//BFS Problem

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)){
        return 0;
    }
    let adj = {};
    for(let word of wordList){
        for(let i = 0; i < word.length; i++){
            let pattern = word.slice(0,i) + '*' + word.slice(i+1);
            if(adj[pattern] == undefined){
                adj[pattern] = [word];
            }else adj[pattern].push(word);
        };
    };
    let visit = new Set();
    visit.add(beginWord);
    let q = [beginWord];
    let res = 1
    while(q.length > 0){
        let n = q.length;
        let newQ = [];
        for(let i = 0; i < n; i++){
            let curWord = q.pop();
            if(curWord == endWord){
                return res;
            }
            for(let j = 0; j < curWord.length; j++){
                let pattern = curWord.slice(0,j) + '*' + curWord.slice(j+1);
                for(let word of (adj[pattern] || [])){
                    if(!visit.has(word)){
                        visit.add(word);
                        newQ.push(word);
                    }
                }
            }
        }
        q = newQ;
        res++;
    }
    return 0;
};
