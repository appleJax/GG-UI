import Loadable from 'react-loadable'
import Spinner  from 'Components/Spinner'

export default (opts) =>
  Loadable({
    loading: Spinner,
    ...opts
  })