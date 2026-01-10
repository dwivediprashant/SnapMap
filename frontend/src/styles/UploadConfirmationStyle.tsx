import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEFF3",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  backIcon: {
    fontSize: 28,
  },

  header: {
    fontSize: 18,
    fontWeight: "600",
  },

  imageCard: {
    borderRadius: 26,
    overflow: "hidden",
    backgroundColor: "#FADADD",
    marginBottom: 20,
  },

  previewImage: {
    width: "100%",
    height: 360,
  },

  locationBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },

  locationText: {
    color: "#fff",
    fontSize: 12,
  },

  retakeIcon: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  retakeText: {
    fontSize: 18,
  },

  captionBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },

  captionInput: {
    flex: 1,
    fontSize: 14,
  },

  emoji: {
    fontSize: 18,
  },

  primaryButton: {
    backgroundColor: "#FF3B6A",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 14,
  },

  primaryButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  cancelText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },
});
