import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import requestAnimationFrame from './tempPolyfills'

const adapter = new Adapter()

configure({ adapter, disableLifecycleMethods: true })
