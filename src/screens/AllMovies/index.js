import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import MovieCard from './MovieCard';
const axios = require('axios');

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=2af133461cc649b3d75d39cd9801f77d&page=' +
          pages,
      )
      .then(response => {
        let tempMoviesArray = [];
        for (let i = 0; i < response.data.results.length; i++) {
          response.data.results[i].favorite = false;
          tempMoviesArray.push(response.data.results[i]);
        }
        setMovies(tempMoviesArray);
        if (pages === 1) {
          setMovies(response.data.results);
        } else {
          let tempArray = movies.concat(tempMoviesArray);
          setMovies(tempArray);
        }
      });
  }, [pages]);

  const LoadMoreData = () => {
    setPages(pages + 1);
  };

  const renderFooter = () => {
    return <View>{loading ? <ActivityIndicator size="large" /> : null}</View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={movie => <MovieCard {...movie} />}
        showsVerticalScrollIndicator={true}
        onEndReachedThreshold={0}
        onEndReached={() => LoadMoreData()}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
});
export default AllMovies;
