function getEarthlyBranch(lunarYear: number) {
    const branches = ['zi', 'chou', 'yin', 'mao', 'chen', 'si', 'wu', 'wei', 'shen', 'you', 'xu', 'hai'];

    const offset = (lunarYear - 3) % 12;

    return branches[(offset || 12) - 1];
}

export default getEarthlyBranch;
