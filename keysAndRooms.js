//Solved on own
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let q = [0];
    let visited = new Set();
    while(q.length > 0){
        let n = q.length;
        for(let i = 0; i < n; i++){
            let room = q.shift();
            if(!visited.has(room)){
                visited.add(room);
                q.push(...rooms[room]);
            };
        };
    };
    return visited.size == rooms.length;
};
