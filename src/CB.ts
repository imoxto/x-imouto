class CB {
	// constants
	private TierChanges = [1, 4, 11, 31, 41];
	private HP = [
		[4000000, 6000000, 12000000, 19000000, 90000000],
		[6000000, 8000000, 15000000, 20000000, 95000000],
		[8000000, 10000000, 18000000, 21000000, 100000000],
		[10000000, 12000000, 20000000, 23000000, 110000000],
		[12000000, 15000000, 23000000, 27000000, 130000000],
	];

	// variables
	rounds: number[];
	boss: { hp: number; isHittable: boolean }[];
	tier: number;
	minRound: number;
	maxRound: number;

	constructor(startRounds: number[] | number = 1) {
		this.adjustRounds(startRounds);
	}

	// Functions
	adjustRounds(rounds: number[] | number = 1) {
		if (Array.isArray(rounds)) {
			if (rounds.length !== 5) throw new Error('Rounds cannot be greater or less than 5!');
			if (Math.max(...rounds) - Math.min(...rounds) > 2)
				throw new Error('Difference between rounds cannot be greater than 2!');
			this.rounds = rounds;
		} else {
			this.rounds = [rounds, rounds, rounds, rounds, rounds];
		}
		this.sync();
	}

	sync() {
		this.minRound = Math.min(...this.rounds);
		this.maxRound = Math.max(...this.rounds);
		for (let i = this.TierChanges.length - 1; i >= 0; i--) {
			const element = this.TierChanges[i];
			if (this.rounds.every((val) => val >= element)) {
				this.tier = i + 1;
				break;
			}
		}
		this.boss = this.rounds.map((_, idx) => {
			return { hp: this.HP[idx][this.tier - 1], isHittable: true };
		});
	}
}

export default CB;
