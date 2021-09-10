import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import PacienteCard from "../../components/PacienteCard/PacienteCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { AuthContext, useAuth } from "../../contexts/AuthContext";
import { useContext } from "react";

const Pacientes = () => {



    return (
       <>
       <Header title="Pacientes"/>

       <ScrollView>
        <SearchBar/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        <PacienteCard/>
        </ScrollView>
       </>
    )
}

export default Pacientes
