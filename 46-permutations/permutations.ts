function permute(nums: number[]): number[][] {
    let permutes: number[][] = [];

    const generatePerm = (c: number[], tab: number[]) => {
        if (tab.length === 0) {
            permutes.push([...c]); 
            return;
        }

        for (let i = 0; i < tab.length; i++) {
            const n = tab[i];
            generatePerm([...c, n], tab.filter((_, index) => index !== i));
        }
    };

    generatePerm([], nums);
    return permutes;
}