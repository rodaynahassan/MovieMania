import React from 'react';
import {Text, Modal, StyleSheet, View, Pressable} from 'react-native';

const OverviewPopUp = ({open, title, overview, onPressDecline, closeModal}) => {
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={open}
      onPressOut={closeModal}>
      <View style={styles.modalViewStyle}>
        <View style={styles.movieInfoView}>
          <Text style={styles.movieTitle}>{title}</Text>
          <Text style={styles.movieOverview}>{overview}</Text>

          <View style={styles.buttonView}>
            <Pressable onPress={onPressDecline} style={styles.button}>
              <Text style={styles.buttonText}> Close </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export {OverviewPopUp};

const styles = StyleSheet.create({
  modalViewStyle: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 14,
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  movieInfoView: {
    backgroundColor: 'white',
    borderRadius: 14,
    width: 340,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#292524',
    paddingTop: 10,
    paddingBottom: 8,
  },
  movieOverview: {
    marginLeft: 10,
    fontSize: 13,
    color: '#292524',
    marginTop: 1.2,
    textAlign: 'left',
    lineHeight: 20,
    paddingBottom: 10,
  },
  buttonView: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: '#C4C4C4',
    height: 43,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#749cd3',
  },
});
