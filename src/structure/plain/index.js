import splice from './splice'
import getIn from './getIn'
import setIn from './setIn'
import deepEqual from './deepEqual'
import deleteIn from './deleteIn'
import { some } from 'lodash'

const structure = {
  empty: {},
  getIn,
  setIn,
  deepEqual,
  deleteIn,
  fromJS: value => value,
  size: array => array ? array.length : 0,
  some,
  splice
}

export default structure
