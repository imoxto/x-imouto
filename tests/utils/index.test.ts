import { parseArguments } from '../../src/utils';
import { TEXT_COMMAND_START } from '../../src/constants';

describe('parseArguments', () => {
	test('should work correctly', () => {
		expect(parseArguments(`${TEXT_COMMAND_START}  help   me please `)).toStrictEqual([
			'help',
			'me',
			'please',
		]);
		expect(parseArguments(`${TEXT_COMMAND_START}init database`)).toStrictEqual([
			'init',
			'database',
		]);
		expect(parseArguments(`${TEXT_COMMAND_START}`)).toStrictEqual([]);
	});
});
