import animals, { getAnimal } from './animals';

describe('Animal Reducer', () => {
  let state;
  let newState;

  beforeEach(() => {
    state = [{
      id: '12',
      name: 'test',
      order: 'test',
      family: 'test',
      description: 'test',
    }];

    const action = { type: "RECEIVE_ANIMALS", animals: state };

    newState = animals(animals, action);
  });

  it('record data to state', () => {
    expect(newState.getAll.length).toBe(1);
  });

  // it('get animal by id', () => {
  //   const actionGetById = getAnimal({ getAll: state }, state[0].id);

  //   expect(actionGetById.id).toBe(state[0].id);
  // });
});
