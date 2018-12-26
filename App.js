import React,{ Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import SoundPlayer from 'react-native-sound-player'

/*
https://github.com/abbasfreestyle/react-native-af-video-player

*/

class App extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      duration: '0%',
    
    };
    this.getInfo = this.getInfo.bind(this)
  }
 
 
 loadSong() {
    try {
      SoundPlayer.playUrl('http://media.mtvpersian.net/mp3/Reza%20Pishro/Reza-Pishro-Kalafegi.mp3')
    } catch (e) {
      alert('Cannot play the file')
      console.log('cannot play the song file', e)
    }
  }

  playSong() {
    console.log("play")
      SoundPlayer.play()
   
  }
  componentDidCatch() {
    console.log("aras!")
  }

  stopSong() {
    console.log("pause"); 
    SoundPlayer.pause(); 
  }
  endSong() {
    console.log("stop");
    SoundPlayer.stop();
    SoundPlayer.pause();
    SoundPlayer.unmount();
  }



  async getInfo() { // You need the keyword `async`
  try {
    const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
    console.log('getInfo', parseInt(info.currentTime)) // {duration: 12.416, currentTime: 7.691}
    let x = (info.currentTime / info.duration )* 100 ;
    console.log(x)

    this.setState({duration : parseFloat(x) + '%'}) 

   
     
    console.log('getInfo', info.duration) // {duration: 12.416, currentTime: 7.691}
  } catch (e) {
    console.log('There is no song playing', e)
  }
}


componentWillUnmount(){
  console.log("Componetn will unmout")
  this.endSong();
}





  showDuration = function(size) {
          
    return { 
      width:size, 
      backgroundColor:'#333', 
      height:2 
    }
    
  }

  render() { 


    
    return ( 
      <View style={styles.container}> 
        <Text>Hellooooooo</Text>
        <TouchableOpacity onPress={this.loadSong} style={styles.btn}>
          <Text>Loading sound</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.playSong} style={styles.btn}>
          <Text>Paly</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.stopSong} style={styles.btn}>
          <Text>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.getInfo} style={styles.btn}>
          <Text>Get Info</Text>
        </TouchableOpacity>

        <View style={styles.progressContainer}>
          <View style={ this.showDuration(this.state.duration)}></View>
        </View>
        
      </View>
     );
  }
}

const styles = StyleSheet.create({
  container:{ 
  flex: 1,
  backgroundColor: '#555',
  justifyContent: 'center'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    
  },
  btn:{
    backgroundColor:'#fff',
    padding: 10,
    margin: 10

  },
  progressContainer:{
    width:'100%',
    height: 2,
    backgroundColor:'#fff'
  }
});

 
export default App;