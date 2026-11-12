import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { Search, EllipsisVertical, SkipBack, SkipForward, Pause, Play } from "lucide-react-native";
import { useState } from "react";

export default function App() {
  // TODO: test data, for removal
  const songs = [
    { id: "1", name: "Midnight", duration: "3:52", isPlaying: false },
    { id: "2", name: "Midnight", duration: "3:52", isPlaying: true },
    { id: "3", name: "Midnight", duration: "3:52", isPlaying: false },
    { id: "4", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "5", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "6", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "7", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "8", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "9", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "10", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "11", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "12", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "13", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "14", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "15", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "16", name: "Midnight", duration: "3:52", isPlaying: false },
        { id: "17", name: "Midnight", duration: "3:52", isPlaying: false },
  ];

  const [currentlyPlaying] = useState({
    id: "2",
    name: "Midnight",
    duration: "3:52",
    isPlaying: true,
  });

  const [isOnPause, setIsOnPause] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.playlistName}>All Songs</Text>
        <Text style={styles.playlistInfo}>248 songs, 16h 42</Text>
      </View>
      <View style={styles.searchContainer}>
        <Search size={16} />
        <TextInput style={styles.search} placeholder="Songs, Authors..." />
      </View>
      <FlatList
        style={styles.songList}
        contentContainerStyle={styles.songListContent}
        data={songs}
        keyExtractor={(song) => song.id}
        renderItem={({ item: song }) => (
          <View
            style={[
              styles.songContainer,
              song.isPlaying ? styles.playing : styles.notPlaying,
            ]}
          >
            <View style={styles.albumCover} />
            <View style={styles.songInfo}>
              <Text style={styles.songName}>{song.name}</Text>
              <Text style={styles.songDuration}>{song.duration}</Text>
            </View>
            <EllipsisVertical />
          </View>
        )}
      />

      <View
        style={[
          styles.currentlyPlayingContainer,
        ]}
      >
        <View style={styles.albumCover} />
        <View style={styles.songInfo}>
          <Text style={styles.songName}>{currentlyPlaying.name}</Text>
          <Text style={styles.songDuration}>{currentlyPlaying.duration}</Text>
        </View>
        <View style={styles.songControl}>
          <SkipBack />
          <Pressable onPress={() => setIsOnPause(!isOnPause)}>
            {isOnPause ? <Pause /> : <Play />}
          </Pressable>
          <SkipForward />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  header: {
    marginTop: 24,
    padding: 16,
    alignItems: "flex-start",
    width: "100%",
    gap: 8,
  },
  playlistName: {
    color: "#fff",
    fontSize: 24,
  },
  playlistInfo: {
    color: "darkgrey",
    fontSize: 14,
  },
  searchContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    marginHorizontal: 16,
    height: 42,
    borderRadius: 16,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  search: {
    flex: 1,
  },
  songList: {
    marginVertical: 24,
    marginHorizontal: 16,
    alignSelf: "stretch",
    flex: 1,
  },
  songListContent: {
    gap: 8,
    paddingBottom: 110,
  },
  songContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    width: "100%",
    borderRadius: 16,
    padding: 8,
  },
  playing: {
    backgroundColor: "green",
  },
  notPlaying: {
    backgroundColor: "white",
  },
  currentlyPlayingContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 32,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopEndRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: 'white',
    gap: 8,
  },
  songControl: {
    flexDirection: 'row',
    gap: 16,
    marginRight: 16
  },
  albumCover: {
    backgroundColor: "darkgrey",
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  songInfo: {
    gap: 4,
    flex: 1,
  },
  songName: {
    color: "#000",
    fontSize: 16,
  },
  songDuration: {
    color: "darkgrey",
    fontSize: 12,
  },
});
