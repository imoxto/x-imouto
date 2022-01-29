import CB from '../src/CB';

describe('CB', () => {
	const cb = new CB();
	const cb1 = new CB(1);
	const cb2 = new CB([1, 1, 1, 1, 1]);
	test('constructor() sets proper rounds', () => {
		expect(cb.rounds).toStrictEqual([1, 1, 1, 1, 1]);
		expect(cb.tier).toStrictEqual(1);
		expect(cb.boss).toStrictEqual([
			{ hp: 4000000, isHittable: true },
			{ hp: 6000000, isHittable: true },
			{ hp: 8000000, isHittable: true },
			{ hp: 10000000, isHittable: true },
			{ hp: 12000000, isHittable: true },
		]);
		expect(cb1).toStrictEqual(cb);
		expect(cb2).toStrictEqual(cb);
	});

	test('adjustRounds() sets proper rounds', () => {
		cb.adjustRounds();
		expect(cb2).toStrictEqual(cb);
	});

	test('should throw error on incorrect constructor', () => {
		try {
			new CB([1, 2, 4, 3, 2]);
		} catch (error) {
			expect(error.message).toBe('Difference between rounds cannot be greater than 2!');
		}
		try {
			new CB([1, 2, 3]);
		} catch (error) {
			expect(error.message).toBe('Rounds cannot be greater or less than 5!');
		}
	});
});
