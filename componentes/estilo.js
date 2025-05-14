import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight: '700'
  },
  titulo: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20
  },  
  texto: {
    textAlign: "center",
    fontSize: 16
  },
  capa: {
    width: 300,
    height: 200,
    marginBottom: 20
  }
});

export default estilo;