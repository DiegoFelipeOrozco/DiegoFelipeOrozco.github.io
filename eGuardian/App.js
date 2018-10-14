import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from "expo";

class Point extends React.Component {
	render() {
		return (
			<MapView.Marker
		        key={1}
		        coordinate={{
			        latitude: 6.248282,
			        longitude: -75.572759,
			    }}
		        title={"titulo"}
		        description={"description"}
		    />
		);
	}
}

export default class App extends React.Component {
  render() {
    return (
    	<MapView
        	style={{flex: 1}}
        	initialRegion={{
	          latitude: 6.248282,
	          longitude: -75.572759,
	          latitudeDelta: 0.0922,
	          longitudeDelta: 0.0421
	        }}
    	>
    		<MapView.Marker
		        key={123456}
		        coordinate={{
			        latitude: 6.248282,
			        longitude: -75.572759,
			    }}
		        title={"ayuda"}
		        description={"busque https://github.com/airbnb/react-native-maps para aprender mas sobre este componente inventado por Aribnb"}
		    />
    	</MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  	color: 'red',
  	fontSize: 12
  }
});
