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

    const url = 'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_30mb.mp4'
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
  
    const logo = 'https://3w0p8bpuk3t3ux7ue14sd2rlzb-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/google-new-logo-if-futura.png'
    return ( 
      <View style={styles.container}> 
              <Video
                autoPlay
                url={url}   
                theme={theme}
                logo={logo}
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