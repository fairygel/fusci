import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Search, EllipsisVertical } from "lucide-react-native";

export default function App() {
  const songs = [
    { id: "1", name: "Midnight", duration: "3:52" },
    { id: "2", name: "Midnight", duration: "3:52" },
    { id: "3", name: "Midnight", duration: "3:52" },
    { id: "4", name: "Midnight", duration: "3:52" },
  ];

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
      <View style={styles.songList}>
        {songs.map((song) => (
          <View style={styles.songContainer} key={song.id}>
            <View style={styles.albumCover} />
            <View style={styles.songInfo}>
              <Text style={styles.songName}>{song.name}</Text>
              <Text style={styles.songDuration}>{song.duration}</Text>
            </View>
            <EllipsisVertical />
          </View>
        ))}
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
    alignSelf: 'stretch',
    gap: 8,
    flex: 1
  },
  songContainer: {
    backgroundColor: "white",
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    width: '100%',
    borderRadius: 16,
    padding: 8,
  },
  albumCover: {
    backgroundColor: 'darkgrey',
    width: 40,
    height: 40,
    borderRadius: 8
  },
  songInfo: {
    gap: 4,
    flex: 1
  },
  songName: {
    color: '#000',
    fontSize: 16
  },
  songDuration: {
    color: 'darkgrey',
    fontSize: 12
  },
});
