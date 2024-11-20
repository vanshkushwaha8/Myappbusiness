import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Home = () => {
  const [onDuty, setOnDuty] = useState(false);

  const toggleDuty = () => setOnDuty(!onDuty);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: onDuty ? "#4CAF50" : "#f5f5f5" }, // Change header color when on duty
        ]}
      >
        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>Current Location</Text>
          <Text style={styles.locationSubtitle}>
            Narasaraopet, Guntur - 522601
          </Text>
        </View>

        {/* On/Off Duty Toggle */}
        <TouchableOpacity onPress={toggleDuty} style={styles.dutyToggle}>
          <Image
            source={
              onDuty
                ? require("../assets/onduty.png")
                : require("../assets/offduty.png")
            }
            style={styles.dutyIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Completion Line */}
      {onDuty && <View style={styles.completionLine} />}

      {/* Body */}
      <ScrollView style={styles.body}>
        {/* Ongoing Services */}
        {onDuty && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ongoing services</Text>
            <ScrollView horizontal>
              {[1, 2, 3].map((card, index) => (
                <View key={index} style={styles.card}>
                  <Image
                    source={require("../assets/splashImage.jpeg")}
                    style={styles.cardImage}
                  />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>
                      Haircut + FREE 10 Min Head Massage
                    </Text>
                    <Text style={styles.cardDetails}>Name: Rahul</Text>
                    <Text style={styles.cardDetails}>
                      Contact: +91-7286966090
                    </Text>
                    <Text style={styles.cardStatus}>Ongoing</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Upcoming Requests */}
        {onDuty && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Upcoming requests</Text>
            {[1, 2, 3].map((card, index) => (
              <View key={index} style={styles.card}>
                <Image
                  source={require("../assets/splashImage.jpeg")}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>Haircut</Text>
                  <Text style={styles.cardDetails}>Name: Rahul</Text>
                  <Text style={styles.cardDetails}>
                    Contact: +91-7286966090
                  </Text>
                  <Text style={styles.cardDetails}>
                    Address: Srinivasa Nagar, Narasaraopet
                  </Text>
                  <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>
                      Friday, 23 June 2023 @ 09.30 AM
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View
        style={[
          styles.footer,
          { backgroundColor: onDuty ? "#007BFF" : "#E0E0E0" },
        ]}
      >
        <Text style={styles.footerText}>
          Continue your service to earn more
        </Text>
        <Text style={styles.footerEarnings}>
          Total earnings today: Rs. 389.00
        </Text>
        <Text style={styles.footerEarnings}>
          Total earnings this month: Rs. 5269.00
        </Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../assets/home.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../assets/history.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../assets/reviews.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../assets/account.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  locationContainer: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  locationSubtitle: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
  dutyToggle: {
    alignSelf: "center",
  },
  dutyIcon: {
    top: 10,
    width: 50,
    height: 50,
  },
  completionLine: {
    height: 4,
    backgroundColor: "#4CAF50",
    marginVertical: 5,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 12,
    color: "#555",
    marginBottom: 3,
  },
  dateContainer: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
  dateText: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
  footer: {
    padding: 15,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  footerEarnings: {
    fontSize: 12,
    color: "#fff",
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
});

export default Home;
