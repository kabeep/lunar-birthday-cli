function getHeavenlyStem(lunarYear: number) {
    const stems = ['jia', 'yi', 'bing', 'ding', 'wu', 'ji', 'geng', 'xin', 'ren', 'kui'];

    const offset = (lunarYear - 3) % 10;

    return stems[(offset || 10) - 1];
}

export default getHeavenlyStem;
