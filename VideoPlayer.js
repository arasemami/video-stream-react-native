import React,{ Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Alert, } from 'react-native';
import Video from 'react-native-af-video-player'

/*
https://github.com/abbasfreestyle/react-native-af-video-player

*/

class VideoPlayer extends Component {
   
 

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
    // const url = 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3'
    const theme = {
      title: '#FFF',
      more: '#fff',
      center: '#fff',
      fullscreen: '#fff',
      volume: '#fff',
      scrubberThumb: '#E74C3C',
      scrubberBar: '#ffffff',
      seconds: '#ffffff',
      duration: '#fff',
      progress: '#fff',
      loading: '#E74C3C'
    }
  
    const logo = 'https://3w0p8bpuk3t3ux7ue14sd2rlzb-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/google-new-logo-if-futura.png';

    
    return ( 
      <View style={styles.container}> 
              <Video
                autoPlay
                url={url}   
                theme={theme}
                logo={logo}
                resizeMode='cover'
                rotateToFullScreen
              />
     
      </View>
     );
  }
}

const styles = StyleSheet.create({
  container:{ 
  flex: 1,
  backgroundColor: '#000000',
  justifyContent: 'center'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    
  },
});

 
export default VideoPlayer;