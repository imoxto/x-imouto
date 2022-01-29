import CB from '../src/CB';

console.log('Here!');

describe('CB', () => {
	const cb = new CB();
	const cb1 = new CB(1);
	const cb2 = new CB([1, 1, 1, 1, 1]);
	test('proper rounds', () => {
		expect(cb.rounds).toBe([1, 1, 1, 1, 1]);
		expect(cb.tier).toBe(1);
		expect(cb.boss).toBe([
			{ hp: 4000000, isHittable: true },
			{ hp: 6000000, isHittable: true },
			{ hp: 8000000, isHittable: true },
			{ hp: 10000000, isHittable: true },
			{ hp: 12000000, isHittable: true },
		]);
		expect(cb1).toBe(cb);
		expect(cb2).toBe(cb);
	});
});
