function superbowlWin(record) {
    const win =record.find(game => game.result === "W");
    return win ? win.year :undefined
//    console.log(win)
//    {year: '2015', result; 'W'}
}
