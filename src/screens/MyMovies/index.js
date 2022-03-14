import React, {useState, useCallback} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  FlatList,
  TextInput,
  Pressable,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-date-picker';
import MyMovieCard from './MyMovieCard';
import styles from './styles';

import {createMovie} from './../../redux/myMovies';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';

const MyMovies = ({route, navigation}) => {
  const movies = useSelector(state => state);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [rating, setRating] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const placeholder =
    'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png';

  const [imageSource, setImageSource] = useState(placeholder);
  const close = () => setVisible(false);

  const addToMyMovies = () => {
    if (title === '' || overview === '' || rating === '') {
      Alert.alert(
        'The movie title,overview and rating should be entered to create the movie!',
      );
    } else {
      dispatch(createMovie(title, overview, releaseDate, imageSource, rating));
      Alert.alert(
        'The movie has been created successfully!',
        'You can view it in My Movies tab',
      );
      setTitle('');
      setOverview('');
      setReleaseDate(new Date());
      setImageSource(placeholder);
      setOpenModal(!openModal);
    }
  };

  const onRequestClose = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const selectFile = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(response => {
      setImageSource(response.sourceURL);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      // cropping: true,
    })
      .then(image => {
        setImageSource(image.path);
      })
      .finally(close);
  };
  return (
    <View
      style={movies.length === 0 ? styles.emptyContainer : styles.container}>
      <Modal animationType={'fade'} transparent={true} visible={openModal}>
        <View style={styles.modalViewStyle}>
          <View style={styles.movieInfoView}>
            <Text style={styles.header}>Add your movie info</Text>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              onChangeText={setTitle}
              value={title}
            />
            <Text style={styles.label}>Overview</Text>
            <TextInput
              style={styles.overviewInput}
              onChangeText={setOverview}
              value={overview}
              multiline
            />

            <Text style={styles.label}>Release date</Text>

            <View style={styles.datePickerView}>
              <TextInput
                value={
                  releaseDate.getFullYear() +
                  '-' +
                  (releaseDate.getMonth() + 1) +
                  '-' +
                  releaseDate.getDate() +
                  ''
                }
                onChangeDate={value => releaseDate(value)}
              />
              <Pressable onPress={() => setOpenDate(true)}>
                <IconI style={styles.calendarIcon} name="calendar" />
              </Pressable>
            </View>
            <DatePicker
              open={openDate}
              date={releaseDate}
              mode="date"
              modal
              onConfirm={date => {
                setOpenDate(false);
                setReleaseDate(date);
              }}
              onCancel={() => {
                setOpenDate(false);
              }}
            />
            <Text style={styles.label}>Rating</Text>
            <TextInput
              style={styles.input}
              onChangeText={setRating}
              value={rating}
            />
            <Text style={styles.label}>Poster</Text>
            <View style={styles.posterButtonsView}>
              <TouchableOpacity
                onPress={selectFile}
                style={styles.posterButton}>
                <IconM name="photo-library" style={styles.photoLibraryIcon} />
                <Text style={styles.posterText}>Library</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={openCamera}
                style={styles.posterButton}>
                <IconF name="camera" style={styles.cameraIcon} />
                <Text style={styles.posterText}>Camera</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.moviePosterView}>
              <Image
                source={{
                  uri: imageSource,
                }}
                resizeMode="contain"
                style={styles.poster}
              />
            </View>

            <View style={styles.buttonsView}>
              <TouchableOpacity
                onPress={() => addToMyMovies()}
                style={styles.firstButton}>
                <Text style={styles.buttonText}> Add the movie </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onRequestClose}
                style={styles.secondButton}>
                <Text style={styles.buttonText}> Close </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {movies.length === 0 ? (
        <View style={styles.noMoviesView}>
          <Image
            source={require('./../../assets/Images/no-movies.webp')}
            resizeMode="contain"
          />
          <Text style={styles.title}>You don't have any movies!</Text>
          <Text style={styles.info}>
            Add a movie to your list by creating a new movie
          </Text>

          <Text style={styles.info}>
            or like a movie from 'All movies' list.
          </Text>
          <Pressable
            onPress={() => setOpenModal(true)}
            style={styles.addMovieButton}>
            <IconA style={styles.createMovieIcon} name="pluscircle" />
            <Text style={styles.addMovieText}>Create a movie</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <FlatList
            data={movies}
            renderItem={movie => <MyMovieCard {...movie} />}
            showsVerticalScrollIndicator={true}
          />

          <TouchableOpacity
            style={styles.icon}
            onPress={() => setOpenModal(true)}>
            <IconA name="pluscircle" style={styles.addMovieIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MyMovies;
