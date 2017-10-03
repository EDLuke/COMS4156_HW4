import React, {
    View,
    Text,
    StyleSheet
} from 'react-native'
import savor from '../../../'
import ToyProject from '../App'
 
const TestText = (<Text>test</Text>)
const TestComponent = (<ToyProject/> )
 
savor.add('should mount a basic React Native component', function(context, done) {
  const wrapper = context.shallow(TestComponent)
  context.expect(wrapper.length).to.equal(1)
  context.expect(wrapper).to.contain(TestText)
  done()
}).
 
run('My React Native Tests')