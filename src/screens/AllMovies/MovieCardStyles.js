import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  movieCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 40,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  moviePosterView: {
    flex: 0.45,
    marginBottom: 10,
    marginTop: 10,
  },
  poster: {
    width: 180,
    height: 180,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 7,
  },
  movieInfo: {
    justifyContent: 'center',
    flex: 0.55,
  },
  movieTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#292524',
  },
  movieDate: {
    fontSize: 14,
    color: '#292524',
    textAlign: 'left',
    fontStyle: 'italic',
    marginTop: 7,
  },
  movieRatingView: {
    flexDirection: 'row',
  },
  movieRating: {
    fontSize: 14,
    color: '#292524',
    textAlign: 'left',
    fontStyle: 'italic',
    marginBottom: 30,
  },
  movieImd: {
    fontSize: 10,
    color: '#749cd3',
    textAlign: 'left',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 30,
    alignSelf: 'flex-end',
  },
  button: {
    position: 'absolute',
    borderRadius: 15,
    width: 130,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 15,
    backgroundColor: '#f0f2f5',
    flexDirection: 'row',
  },
  overviewIcon: {
    color: '#749cd3',
    backgroundColor: '#f0f2f5',
    paddingRight: 8,
    fontSize: 35,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  heartIcon: {
    position: 'absolute',
    top: 15,
    right: 20,
    fontSize: 25,
  },
});
