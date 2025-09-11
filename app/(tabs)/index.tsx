import { MonoText } from "@/components/StyledText";
import React from "react";
import {
  View,
  StyleSheet,
  Linking,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type LinkItem = {
  title: string;
  url: string;
  icon: keyof typeof FontAwesome.glyphMap;
};

const links: LinkItem[] = [
  { title: "GitHub", url: "https://github.com/YourProfile", icon: "github" },
  { title: "LinkedIn", url: "https://linkedin.com/in/YourProfile", icon: "linkedin" },
  { title: "Portfolio", url: "https://yourwebsite.com", icon: "globe" },
];

export default function App() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {links.map((link, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => openLink(link.url)}
          activeOpacity={0.8}
        >
          <View style={styles.cardContent}>
            <FontAwesome name={link.icon} size={22} color="#fff" style={styles.icon} />
            <MonoText style={styles.cardText}>{link.title}</MonoText>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#1e1e1e",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    marginRight: 12,
  },
  cardText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
