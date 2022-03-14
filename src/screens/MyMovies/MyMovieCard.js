import React, {memo, useState, useCallback} from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {OverviewPopUp} from './../../components/OverviewPopUp.js';
import IconI from 'react-native-vector-icons/Ionicons';
import styles from './MyMovieCardStyles';
const MyMovieCard = memo(({item}) => {
  let image_path;
  if (item.poster !== undefined) {
    image_path = item.poster;
  } else {
    image_path = 'https://image.tmdb.org/t/p/w500' + item.poster_path;
  }
  const [openOverview, setOpenOverview] = useState(false);

  const onRequestClose = useCallback(() => {
    setOpenOverview(!openOverview);
  }, [openOverview]);

  return (
    <Pressable onPress={() => setOpenOverview(true)} style={styles.movieCard}>
      <OverviewPopUp
        open={openOverview}
        title={item.original_title}
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
        <Text style={styles.movieTitle}>{item.original_title}</Text>
        <Text style={styles.movieDate}>
          {typeof item.release_date === 'string'
            ? item.release_date
            : item.release_date.getFullYear() +
              '-' +
              (item.release_date.getMonth() + 1) +
              '-' +
              item.release_date.getDate()}
        </Text>
        <View style={styles.movieRatingView}>
          <Text style={styles.movieRating}>{item.vote_average}/10</Text>
          <Text style={styles.movieImd}> IMDb</Text>
        </View>
        <Pressable style={styles.button} onPress={() => setOpenOverview(true)}>
          <IconI name="list-circle" style={styles.overviewIcon} />
          <Text style={styles.buttonText}>Overview</Text>
        </Pressable>
      </View>
    </Pressable>
  );
});

export default MyMovieCard;
