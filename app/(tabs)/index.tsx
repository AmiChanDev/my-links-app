import { MonoText } from "@/components/StyledText";
import React from "react";
import {
  View,
  StyleSheet,
  Linking,
  ScrollView,
  TouchableOpacity,
  Share,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type LinkItem = {
  title: string;
  url: string;
  icon: keyof typeof FontAwesome.glyphMap;
};

const links: LinkItem[] = [
  { title: "Facebook", url: "https://web.facebook.com/ami.gamage.69/", icon: "facebook" },
  { title: "Instagram", url: "https://www.instagram.com/amichan6.9", icon: "instagram" },
  { title: "Whatsapp", url: "https://api.whatsapp.com/send?phone=94717982214&text=Hi%20from%20the%20app", icon: "whatsapp" },
  { title: "TikTok", url: "https://tiktok.com/@ami_chan69", icon: "music" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/gamageami", icon: "linkedin" },
  { title: "Github", url: "https://github.com/AmiChanDev", icon: "github" },
  { title: "Portfolio", url: "https://amichandev.github.io/portfolio/", icon: "globe" },
  { title: "Email", url: "mailto:gamageamantha@gmail.com", icon: "mail-forward" },
];

export default function App() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  const shareLink = async (url: string, title: string) => {
    try {
      await Share.share({
        message: `My ${title} link: ${url}`,
      });
    } catch (error) {
      console.log("Error sharing link:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {links.map((link, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => openLink(link.url)}
          onLongPress={() => shareLink(link.url, link.title)}
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
