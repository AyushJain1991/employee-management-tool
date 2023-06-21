import * as fromReducer from './user.reducer';
import * as fromActions from '../app/user.actions';
import { reducer, initialState } from './user.reducer';

describe('User Reducer', () => {
  afterEach(() => {
    fromReducer.initialState.data = [];
  });

  it('SHOULD return the default state', () => {
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(undefined, { type: '' });
    expect(state).toBe(initialState);
  });

  it('SHOULD load data', () => {
    const { initialState } = fromReducer;
    const payload: any = {address: "Meerut",  email: "ayush.jain5@ibm.com", gender: "Male",
        name: "Ayush Jain", phoneNo : "9536580265",  skills : ['HTML5', 'CSS3', 'Java Script', 'Type Script', '5']
      };
    const userData: any = [{address: "Meerut",  email: "ayush.jain5@ibm.com", gender: "Male",
      name: "Ayush Jain", phoneNo : "9536580265",  skills : ['HTML5', 'CSS3', 'Java Script', 'Type Script', '5']
    }];   
   const action = fromActions.setData(
    { data: payload }
  );
   const state = fromReducer.reducer(initialState, action);
   expect(state.data).toEqual(userData);
  });

  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});

