import React,{ Component} from 'react';
import {View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity , AppState} from 'react-native';
import Video from 'react-native-video';
import Slider from "react-native-slider";


//
//
import PlayIcon from './assets/play.svg';



/*
https://github.com/abbasfreestyle/react-native-af-video-player

*/

const url = 'http://media.mtvpersian.net/mp3/Reza%20Pishro/Reza-Pishro-Kalafegi.mp3';

class App extends Component {
   
  constructor(props) {
    super(props);
    this.state = { 
      appState: AppState.currentState,
      currentTime: null,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      screenType:'content'
    }; 
  }
 


  onPause(){
    this.setState({
      paused: !this.state.paused
    })
  }


  onProgress = data => {
    console.log(data)
    if (!this.state.paused) 
      this.setState({ currentTime: data.currentTime});
     
  };

  onLoad = data => {
    console.log(this.msToTime(data.duration))
   
    this.setState({ duration: data.duration, isLoading: false })
  };
  onEnd = () => this.setState({ paused: true });


  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time, 
    });
  }

  


  msToTime(time) {
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;
    
        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";
    
        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
    
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
  }
  

  onSeeking(value){
    console.log(Math.round(value))
    this.seek(Math.round(value));
  }
  

  render() { 


    const video = (
                    <Video source={{uri: url}}        // Can be a URL or a local file.
                      ref="audioElement"              // Pauses playback entirely.
                      onLoad={this.onLoad}            // Callback when video loads
                      onProgress={this.onProgress}    // Callback every ~250ms with currentTime
                      paused={this.state.paused}
                      onEnd={this.onEnd}
                       /> 
                  );


 


    
    return ( 
      <View style={styles.container}>  

      <View style={styles.imgContainer}>

      </View>
 
   
    
        {video}


        <Slider
          value={this.state.currentTime}
          minimumValue={0}
          maximumValue={this.state.duration}
          onSlidingComplete={value =>  this.onSeeking(value)}
          trackStyle={styles.trackStyle}
          thumbStyle={styles.thumbStyle}
          minimumTrackTintColor='#333'

        />
        <View style={styles.timeDurationContainer}>
          <Text>{this.msToTime(this.state.currentTime)}</Text>
          <Text>{ this.msToTime(this.state.duration)}</Text>
        </View>

        <View style={styles.bContainer}>
          <TouchableOpacity style={styles.btnContainer} onPress={this.onPause.bind(this)}>
            {!this.state.paused ? (
                    <Image
                    style={{width: 40, height: 40}}
                    source={require('./assets/s.png')}
                  />
            ) : (
              <Image
              style={{width: 40, height: 40}}
              source={require('./assets/p.png')}
            />
            )}
          </TouchableOpacity>
        </View>
     

    
      </View>
     );
  }
}

const styles = StyleSheet.create({
  container:{ 
  flex: 1,
  backgroundColor: '#555',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    
  },
  imgContainer:{
    backgroundColor:'#666',
    flex:2,


  },
  bContainer:{
    alignItems:'center'
  },

  btnContainer:{ 
    padding: 10,
    margin: 10,
    width:100,
    height:100,
    borderRadius: 100,
    justifyContent:'center',
    alignItems: 'center', 
    borderWidth: 5,
    borderColor: '#ffffff',


  },
  progressContainer:{
    width:'100%',
    height: 2,
    backgroundColor:'#fff'
  },
  timeDurationContainer:{ 
    flexDirection: 'row',
    backgroundColor: '#999999',
    justifyContent:'space-between',
    padding:10,


  },
  trackStyle:{
    backgroundColor:'#666',
  },
  thumbStyle:{
    backgroundColor:'#d63031',

  }


});

 
export default App;