import React,{ Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Alert, } from 'react-native';
import Video from 'react-native-af-video-player'


class App extends Component {
   
 

  // onFullScreen(status) {
  //     return !status
    
  // }

  // onMorePress() {
  //   Alert.alert(
  //     'Boom',
  //     'This is an action call!',
  //     [{ text: 'Aw yeah!' }]
  //   )
  // }

  render() { 

    const url = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
    const theme = {
      title: '#FFF',
      more: '#446984',
      center: '#7B8F99',
      fullscreen: '#446984',
      volume: '#A5957B',
      scrubberThumb: '#234458',
      scrubberBar: '#DBD5C7',
      seconds: '#DBD5C7',
      duration: '#DBD5C7',
      progress: '#446984',
      loading: '#DBD5C7'
    }
  

    return ( 
      <View style={styles.container}> 
              <Video
                autoPlay
                url={url}  
                // onMorePress={() => this.onMorePress()}
               // onFullScreen={status => this.onFullScreen(status)}
                rotateToFullScreen
              />
     
      </View>
     );
  }
}

var styles = StyleSheet.create({
  container:{ 
  flex: 1
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    
  },
});

 
export default App;