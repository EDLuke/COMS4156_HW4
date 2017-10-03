import React, {Component} from 'react';
import { AppRegistry, ListView, StyleSheet, Text, View, Image, Button } from 'react-native';


export default class ToyProject extends Component{
  constructor(props){
    super(props);
	  this.state = {pictures: []};
  }
  
  componentDidMount(){
	  function checkStatus(results) {
		  if (results.status >= 200 && results.status < 300) {
			  return results
		  } else {
			  var error = new Error(results.statusText)
			  error.response = results
			  throw error
		  }
	  }	  

	  function parseResults(results) {
		  return results.json()
	  }
	  fetch('https://randomuser.me/api/?results=5')
	  .then(checkStatus)
	  .then(parseResults)
	  .then(data => {
		  let pictures = data.results.map((pic) => {
			  return(
				  <View>
					<Image
						style={{width: 66, height: 58}}
						source={{uri: pic.picture.medium}} 
					/>
				  </View>
			  )
		  })
		  this.setState({pictures: pictures});
		  console.log("state", this.state.pictures);
		}).catch(error => {
			console.log("request failed", error);
		})
  }
  
  render(){
	return (
	  <View style={styles.containerBig}>  
		<Text style={styles.paragraph}>Welcome to COMS 4156 HW4 React Toy!</Text>
		{this.state.pictures}

	  </View>
	);
  }

}

const styles = StyleSheet.create({
  containerBig: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSmall: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  }
});
