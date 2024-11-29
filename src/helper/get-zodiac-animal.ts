import { zodiac } from '@kabeep/zodiac-animals';
import ensure from './_internal/ensure';

function getZodiacAnimal(date: Date) {
    const result = zodiac(date);
    ensure(result !== -1);

    return result.name;
}

export default getZodiacAnimal;
