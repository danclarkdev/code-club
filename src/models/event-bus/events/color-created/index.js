import { v4 as uuidv4 } from 'uuid';

export const NAME = 'ColorCreated';

export default value => {
    return new CustomEvent(NAME, {
        detail: {
            id: uuidv4(),
            value,
            timestamp: (new Date()).getTime(),
        }
    })
};