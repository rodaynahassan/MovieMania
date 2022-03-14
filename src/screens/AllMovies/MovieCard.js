import React, {memo, useState, useCallback} from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {OverviewPopUp} from './../../components/OverviewPopUp.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';
import {
  addMovieToFavorites,
  removeMovieFromFavorites,
} from './../../redux/myMovies';
import {useDispatch} from 'react-redux';
import styles from './MovieCardStyles';

const MovieCard = memo(({item}) => {
  let image_path = 'https://image.tmdb.org/t/p/w500' + item.poster_path;

  const [openOverview, setOpenOverview] = useState(false);
  const [favorite, setFavorite] = useState(item.favorite);
  const dispatch = useDispatch();

  const onRequestClose = useCallback(() => {
    setOpenOverview(!openOverview);
  }, [openOverview]);

  const onRequestFavorite = useCallback(() => {
    setFavorite(!favorite);
    if (favorite === false) {
      dispatch(addMovieToFavorites(item));
    } else {
      dispatch(removeMovieFromFavorites(item));
    }
  }, [dispatch, item, favorite]);

  return (
    <Pressable onPress={() => setOpenOverview(true)} style={styles.movieCard}>
      <OverviewPopUp
        open={openOverview}
        title={item.title}
        overview={item.overview}
        onPressDecline={onRequestClose}
        closeModal={onRequestClose}
      />
      <View style={styles.moviePosterView}>
        <Image
          source={{uri: image_path}}
          resizeMode="contain"
          style={styles.poster}
        />
      </View>
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieDate}>{item.release_date}</Text>
        <View style={styles.movieRatingView}>
          <Text style={styles.movieRating}>{item.vote_average}/10</Text>
          <Text style={styles.movieImd}> IMDb</Text>
        </View>

        <Pressable style={styles.button} onPress={() => setOpenOverview(true)}>
          <IconI name="list-circle" style={styles.overviewIcon} />
          <Text style={styles.buttonText}>Overview</Text>
        </Pressable>
        <Icon
          name={favorite ? 'heart' : 'heart-o'}
          color={favorite ? 'red' : 'black'}
          style={styles.heartIcon}
          onPress={() => onRequestFavorite()}
        />
      </View>
    </Pressable>
  );
});

export default MovieCard;
