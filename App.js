import React, {Component} from 'react';
import { AppRegistry, ListView, StyleSheet, Text, View, Image, Button } from 'react-native';

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = "http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1";

export default class ToyProject extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.list);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.list)
        });
      })
      .done();
  }

  render(){
    return (
      <View style={styles.containerBig}>  
        <Text style={styles.paragraph}>Welcome to COMS 4156 HW4 React Toy!</Text>
        <Button
          onPress={this.fetchData}
          title="Movies"
          color="#841584"
          accessibilityLabel="List movies"
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie}
          style={styles.listView}
        />
      </View>
    );
  }

  renderMovie(weather) {
    return (
      <View style={styles.containerSmall}>
        <Text style={styles.title}>{weather.temp_min}</Text>
        <Text style={styles.year}>{weather.temp_max}</Text>
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