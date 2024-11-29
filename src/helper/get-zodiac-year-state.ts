function getZodiacYearState(baseLunarYear: number, compareLunarYear: number) {
    return !((compareLunarYear - baseLunarYear) % 12);
}

export default getZodiacYearState;
